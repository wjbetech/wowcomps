export type RaidSlotId = string;

export type PlacedSpec = {
  classId: string;
  specId: string;
  label: string;
  iconLink?: string;
};

export type RaidSlots = Record<string, PlacedSpec | null>;
