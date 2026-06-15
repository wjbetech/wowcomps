import type { ClassId, ExpansionClassGroup, SpecId } from "./classesSpecs";
import type { Expansion } from "./expansions";
import type { PlacedSpec } from "./raidGrid";

export type SpecsPanelProps = {
  selectedExpansion: Expansion;
  fillNextSlot: (spec: PlacedSpec) => void;
};

export type SpecsPanelRowsProps = {
  rows: ExpansionClassGroup[][];
  fillNextSlot: (spec: PlacedSpec) => void;
};

export type DraggableSpecButtonProps = {
  classId: ClassId;
  specId: SpecId;
  label: string;
  iconLink?: string;
  fillNextSlot: (spec: PlacedSpec) => void;
};

export type ClassSpecCardProps = {
  group: ExpansionClassGroup;
  fillNextSlot: (spec: PlacedSpec) => void;
};
