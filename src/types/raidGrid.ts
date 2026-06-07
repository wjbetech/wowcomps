import type { ClassId, SpecId } from "./classesSpecs";

export type RaidSlotId = `${number}-${number}`;

export type RaidGridProps = {
  raidSlots: RaidSlots;
};

export type RaidGridSlot = {
  id: RaidSlotId;
  label: string;
};

export type RaidGroup = {
  id: number;
  slots: RaidGridSlot[];
};

export type PlacedSpec = {
  classId: ClassId;
  specId: SpecId;
  playerName?: string;
};

export type RaidSlots = Record<RaidSlotId, PlacedSpec | null>;
