// core
import { useState } from "react";
import { usePersistedRaidSlots } from "./usePersistedRaidSlots";

// data
import { getExpansionConfig } from "../data/expansionData";

// libs
import {
  clearRaid,
  clearSlot,
  fillNextEmptySlot,
  renameSlot,
  placeSpec,
  resolveExpansionChange,
  reconcileRaidSlots,
} from "./raidComposition";

// types
import type { PlacedSpec, RaidSlotId } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";

export function useRaidComposition(raidSize: RaidSize) {
  const [raidSlots, setRaidSlots] = usePersistedRaidSlots(raidSize);
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const [selectedRaidSize, setSelectedRaidSize] = useState<RaidSize>(raidSize);

  return {
    raidSlots,
    placeSpec: (slotId: RaidSlotId, spec: PlacedSpec) => {
      setRaidSlots((prev) => placeSpec(prev, slotId, spec));
    },
    renameSlot: (slotId: RaidSlotId, playerName: string) => {
      setRaidSlots((prev) => renameSlot(prev, slotId, playerName));
    },
    fillNextEmptySlot: (spec: PlacedSpec) => setRaidSlots((prev) => fillNextEmptySlot(prev, spec)),
    clearSlot: (slotId: RaidSlotId) => setRaidSlots((prev) => clearSlot(prev, slotId)),
    clearRaid: () => setRaidSlots((prev) => clearRaid(prev)),
    selectExpansion: (nextExpansion: Expansion) => {
      const config = getExpansionConfig(nextExpansion);
      if (!config) return;

      const nextExpac = resolveExpansionChange(selectedRaidSize, nextExpansion, config);
      setRaidSlots((prev) => reconcileRaidSlots(prev, nextExpac.selectedRaidSize));
      setSelectedExpansion(nextExpac.selectedExpansion);
      setSelectedRaidSize(nextExpac.selectedRaidSize);
    },
    selectRaidSize: (nextRaidSize: RaidSize) => {
      setRaidSlots((prev) => reconcileRaidSlots(prev, nextRaidSize));
      setSelectedRaidSize(nextRaidSize);
    },
    selectedExpansion,
    selectedRaidSize,
  };
}
