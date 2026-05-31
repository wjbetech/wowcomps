import type { RaidSlots } from "./raidGrid";

export type StoredWorkingRaid = {
  storageVersion: 1;
  raidSlots: RaidSlots;
  updatedAt: string;
};
