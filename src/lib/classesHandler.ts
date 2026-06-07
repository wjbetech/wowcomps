// data
import { getExpansionClassGroups } from "../data/expansionClasses";

// types
import type { ClassId } from "../types/classesSpecs";
import type { Expansion } from "../types/expansions";
import type { RaidSlots } from "../types/raidGrid";

type ClassBreakdownRow = {
  classId: ClassId;
  label: string;
  color: string;
  count: number;
};

export function getClassBreakdown(raidSlots: RaidSlots, expansion: Expansion): ClassBreakdownRow[] {
  const classGroups = getExpansionClassGroups(expansion);
  const counts = new Map<ClassId, number>();

  for (const classGroup of classGroups) {
    counts.set(classGroup.classId, 0);
  }

  for (const placedSpec of Object.values(raidSlots)) {
    if (!placedSpec) continue;

    const classId = placedSpec.classId;

    if (!counts.has(classId)) continue;

    counts.set(classId, (counts.get(classId) ?? 0) + 1);
  }

  return classGroups.map((classGroup) => ({
    classId: classGroup.classId,
    label: classGroup.label,
    color: classGroup.color,
    count: counts.get(classGroup.classId) ?? 0,
  }));
}
