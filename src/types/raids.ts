// types
import type { RaidSize } from "./expansions";
import type { RaidSlots } from "./raidGrid";

export type StoredWorkingRaid = {
  storageVersion: number;
  raidSize: RaidSize;
  raidSlots: RaidSlots;
  updatedAt: string;
};

export type WorkingRaidSnapshot = {
  raidSlots: RaidSlots;
  raidSize: RaidSize;
};
