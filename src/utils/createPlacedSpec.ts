import type { ClassId, SpecId } from "../types/classesSpecs";
import type { PlacedSpec } from "../types/raidGrid";

export function createPlacedSpec(classId: ClassId, specId: SpecId): PlacedSpec {
  return {
    classId,
    specId,
    playerName: "",
  };
}
