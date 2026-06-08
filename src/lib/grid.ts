import type { RaidSize } from "../types/expansions";
import type { RaidGroup, RaidSlotId, RaidSlots } from "../types/raidGrid";

export function createInitialRaidSlots(raidSize: RaidSize): RaidSlots {
  const slots: RaidSlots = {};

  for (const group of getRaidGridModel(raidSize)) {
    for (const slot of group.slots) {
      slots[slot.id] = null;
    }
  }

  return slots;
}

export function getRaidGridModel(raidSize: 10 | 20 | 25 | 40): RaidGroup[] {
  const groupCount = Math.ceil(raidSize / 5);

  return Array.from({ length: groupCount }, (_, groupIndex) => ({
    id: groupIndex + 1,
    slots: Array.from({ length: 5 }, (_, slotIndex) => ({
      id: `${groupIndex + 1}-${slotIndex + 1}` as RaidSlotId,
      label: `Slot ${slotIndex + 1}`,
    })),
  }));
}
