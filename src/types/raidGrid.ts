// types
import type { ClassId, SpecId } from "./classesSpecs";
import type { RaidSize } from "./expansions";

export type RaidSlotId = `${number}-${number}`;

export type RaidGridProps = {
  raidSlots: RaidSlots;
  selectedRaidSize: RaidSize;
  onClearSlot: (slotId: RaidSlotId) => void;
  onRenameSlot: (slotId: RaidSlotId, newName: string) => void;
  activeDraggedSlotId?: RaidSlotId | null;
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
