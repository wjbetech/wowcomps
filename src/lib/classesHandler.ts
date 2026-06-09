// data
import { getExpansionClassGroups } from "../data/expansionClasses";

// libs
import { createInitialRaidSlots } from "./grid";

// types
import type { ClassId } from "../types/classesSpecs";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidSlots } from "../types/raidGrid";

type ClassBreakdownRow = {
  classId: ClassId;
  label: string;
  color: string;
  count: number;
};

export function getClassBreakdown(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): ClassBreakdownRow[] {
  const classGroups = getExpansionClassGroups(expansion);
  const validClassIds = new Set(classGroups.map((group) => group.classId));
  const counts = new Map<ClassId, number>();
  const activeSlotIds = Object.keys(createInitialRaidSlots(raidSize));

  for (const slotId of activeSlotIds) {
    const placedSpec = raidSlots[slotId as keyof RaidSlots];
    if (!placedSpec) continue;

    const classId = placedSpec.classId;
    if (!validClassIds.has(classId)) continue;

    counts.set(classId, (counts.get(classId) ?? 0) + 1);
  }

  return classGroups.map((classGroup) => ({
    classId: classGroup.classId,
    label: classGroup.label,
    color: classGroup.color,
    count: counts.get(classGroup.classId) ?? 0,
  }));
}
