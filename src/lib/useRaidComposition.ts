// core
import { useState, useEffect } from "react";
import { readWorkingRaidSlots, writeWorkingRaidSlots } from "./raidStorage";

// data
import { getExpansionConfig } from "../data/expansionData";
import { getExpansionClassGroups } from "../data/expansionClasses";

// libs
import {
  clearRaid,
  clearSlot,
  fillNextEmptySlot,
  renameSlot,
  placeSpec,
  resolveExpansionChange,
  reconcileRaidSlots,
  stripInvalidClassSpecs,
} from "./raidComposition";

// types
import type { PlacedSpec, RaidSlotId } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";

export function useRaidComposition(raidSize: RaidSize) {
  const initialSnapshot = readWorkingRaidSlots(raidSize);
  const [raidSlots, setRaidSlots] = useState(initialSnapshot.raidSlots);
  const [selectedRaidSize, setSelectedRaidSize] = useState<RaidSize>(initialSnapshot.raidSize);
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");

  useEffect(() => {
    writeWorkingRaidSlots(selectedRaidSize, raidSlots);
  }, [raidSlots, selectedRaidSize]);

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
      const validClassIds = new Set(
        getExpansionClassGroups(nextExpac.selectedExpansion).map((group) => group.classId),
      );

      setRaidSlots((prev) => {
        const reconciled = reconcileRaidSlots(prev, nextExpac.selectedRaidSize);
        return stripInvalidClassSpecs(reconciled, validClassIds);
      });
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
