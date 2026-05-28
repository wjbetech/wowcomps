// data
import { expansionClasses } from "../data/expansionClasses";
import classColors from "../data/classColors";

// types
import { type ClassId } from "../types/classesSpecs";
import type { Expansion } from "../types/expansions";
import type { RaidSlots } from "../types/raidGris";

type ClassBreakdownRow = {
  classId: ClassId;
  label: string;
  color: string;
  count: number;
};

export function getClassBreakdown(raidSlots: RaidSlots, expansion: Expansion): ClassBreakdownRow[] {
  const classGroups = expansionClasses[expansion];
  const counts = new Map<ClassId, number>();

  for (const classGroup of classGroups) {
    counts.set(classGroup.classId, 0);
  }

  for (const placedSpec of Object.values(raidSlots)) {
    if (!placedSpec) continue;

    const classId = placedSpec.classId as ClassId;

    if (!counts.has(classId)) continue;

    counts.set(classId, (counts.get(classId) || 0) + 1);
  }

  return classGroups.map((classGroup) => ({
    classId: classGroup.classId,
    label: classGroup.label,
    color: classColors[classGroup.classId],
    count: counts.get(classGroup.classId) || 0,
  }));
}
