// types
import type { Expansion, RaidSize } from "./expansions";
import type { RaidSlots } from "./raidGrid";

export type StorableRaidComposition = {
  name: string;
  expansion: Expansion;
  raidSize: RaidSize;
  slots: RaidSlots;
};

export type StoredWorkingRaid = {
  storageVersion: number;
  composition: StorableRaidComposition;
};

export type WorkingRaidSnapshot = StorableRaidComposition;
