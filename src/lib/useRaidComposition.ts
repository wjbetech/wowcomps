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
  placeSpec,
  resolveExpansionChange,
} from "./raidComposition";

// types
import type { PlacedSpec, RaidSlotId } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";

export function useRaidComposition() {
  const [raidSlots, setRaidSlots] = usePersistedRaidSlots();
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const [selectedRaidSize, setSelectedRaidSize] = useState<RaidSize>(40);

  return {
    raidSlots,
    placeSpec: (slotId: RaidSlotId, spec: PlacedSpec) =>
      setRaidSlots((prev) => placeSpec(prev, slotId, spec)),
    fillNextEmptySlot: (spec: PlacedSpec) => setRaidSlots((prev) => fillNextEmptySlot(prev, spec)),
    clearSlot: (slotId: RaidSlotId) => setRaidSlots((prev) => clearSlot(prev, slotId)),
    clearRaid: () => setRaidSlots((prev) => clearRaid(prev)),
    selectedExpansion,
    setSelectedExpansion: (nextExpansion: Expansion) => setSelectedExpansion(nextExpansion),
    selectedRaidSize,
    setSelectedRaidSize: (raidSize: RaidSize) => setSelectedRaidSize(raidSize),
    selectExpansion: (nextExpansion: Expansion) => {
      const config = getExpansionConfig(nextExpansion);
      if (!config) return;

      const nextExpac = resolveExpansionChange(selectedRaidSize, nextExpansion, config);
      setSelectedExpansion(nextExpac.selectedExpansion);
      setSelectedRaidSize(nextExpac.selectedRaidSize);
    },
  };
}
