import type { RaidGroup } from "../types/raidGrid";

export function getGroupSlotIds(group: RaidGroup) {
  return group.slots.map((slot) => slot.id);
}
