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
  onClearGroup: (slotIds: RaidSlotId[]) => void;
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

export type RaidSlotDisplay = {
  placedSpec: PlacedSpec | null;
  isDraggedSource: boolean;
};

export type SlotClassNames = {
  displayedSpec: PlacedSpec | null;
  isDraggedSource: boolean;
  isOver: boolean;
};

export type RaidSlotClick = {
  displayedSpec: PlacedSpec | null;
  isEditing: boolean;
  inputRef: { current: HTMLInputElement | null };
  suppressClickRef: { current: boolean };
  onClearSlot: (slotId: RaidSlotId) => void;
  slotId: RaidSlotId;
};

export type RaidSlots = Record<RaidSlotId, PlacedSpec | null>;
