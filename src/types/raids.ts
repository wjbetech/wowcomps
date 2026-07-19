// types
import type { Expansion, RaidSize } from "./expansions";
import type { RaidSlots } from "./raidGrid";

export type StoredWorkingRaid = {
  storageVersion: number;
  expansion: Expansion;
  raidSize: RaidSize;
  raidSlots: RaidSlots;
  updatedAt: string;
};

export type WorkingRaidSnapshot = {
  raidSlots: RaidSlots;
  raidSize: RaidSize;
  expansion: Expansion;
};
