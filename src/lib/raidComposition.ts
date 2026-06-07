import type { Expansion, ExpansionConfig, RaidSize } from "../types/expansions";
import type { RaidSlotId, RaidSlots } from "../types/raidGrid";
import type { PlacedSpec } from "../types/raidGrid";

export function placeSpec(raidSlots: RaidSlots, slotId: RaidSlotId, spec: PlacedSpec): RaidSlots {
  return { ...raidSlots, [slotId]: spec };
}

export function fillNextEmptySlot(raidSlots: RaidSlots, spec: PlacedSpec): RaidSlots {
  const nextEmptySlotId = (Object.keys(raidSlots) as RaidSlotId[]).find(
    (slotId) => raidSlots[slotId] === null,
  );

  if (!nextEmptySlotId) {
    return raidSlots;
  }

  return { ...raidSlots, [nextEmptySlotId]: spec };
}

export function clearSlot(raidSlots: RaidSlots, slotId: RaidSlotId): RaidSlots {
  return { ...raidSlots, [slotId]: null };
}

export function clearRaid(raidSlots: RaidSlots): RaidSlots {
  const clearedSlots = { ...raidSlots };

  for (const slotId of Object.keys(clearedSlots) as RaidSlotId[]) {
    clearedSlots[slotId] = null;
  }

  return clearedSlots;
}

export function resolveExpansionChange(
  currentRaidSize: RaidSize,
  nextExpansion: Expansion,
  expansionConfig: ExpansionConfig,
) {
  return {
    selectedExpansion: nextExpansion,
    selectedRaidSize: resolveExpansionRaidSize(currentRaidSize, expansionConfig),
  };
}

export function resolveExpansionRaidSize(
  currentRaidSize: RaidSize,
  expansionConfig: ExpansionConfig,
): RaidSize {
  if (expansionConfig.raidSizes.includes(currentRaidSize)) {
    return currentRaidSize;
  }

  return expansionConfig.raidSizes[expansionConfig.raidSizes.length - 1];
}
