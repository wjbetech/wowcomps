import type { RaidSlots } from "../types/grid";

export const GROUP_COUNT = 8;
export const SLOTS_PER_GROUP = 5;

export function createInitialRaidSlots(): RaidSlots {
  const slots: RaidSlots = {};

  for (let group = 1; group <= GROUP_COUNT; group++) {
    for (let slot = 1; slot <= SLOTS_PER_GROUP; slot++) {
      slots[`${group}-${slot}`] = null;
    }
  }

  return slots;
}
