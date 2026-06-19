// data
import { getExpansionClassGroups } from "../data/expansionClasses";

// libs
import { getRaidGridModel } from "../lib/grid";

// types
import type { ClassId } from "../types/classesSpecs";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidGroup, RaidSlots } from "../types/raidGrid";

export type ClassBreakdownRow = {
  classId: ClassId;
  label: string;
  color: string;
  count: number;
};

export type ClassBreakdownPanel = {
  breakdown: ClassBreakdownRow[];
};

export function getClassBreakdown(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): ClassBreakdownRow[] {
  const classGroups = getExpansionClassGroups(expansion);
  const validClassIds = new Set(classGroups.map((group) => group.classId));
  const counts = new Map<ClassId, number>();
  const activeSlotIds = getRaidGridModel(raidSize).flatMap((group: RaidGroup) =>
    group.slots.map((slot) => slot.id),
  );

  for (const slotId of activeSlotIds) {
    const placedSpec = raidSlots[slotId];
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
