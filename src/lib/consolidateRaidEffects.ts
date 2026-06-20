import type { SpecId } from "../types/classesSpecs";

type ConsolidatedRow = {
  id: string;
  covered: boolean;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

type EffectGroup = {
  groupId: string;
  memberIds: string[];
  displayId: string;
  precedenceOrder?: string[];
  lockIcon?: boolean;
};

export function consolidateRaidEffects<T extends ConsolidatedRow>(
  rows: T[],
  groups: EffectGroup[],
): T[] {
  const rowById = new Map(rows.map((row) => [row.id, row]));
  const memberToGroup = new Map<string, EffectGroup>();

  for (const group of groups) {
    for (const memberId of group.memberIds) {
      memberToGroup.set(memberId, group);
    }
  }

  const emittedGroups = new Set<string>();
  const result: T[] = [];

  for (const row of rows) {
    const group = memberToGroup.get(row.id);
    if (!group) {
      result.push(row);
      continue;
    }

    if (emittedGroups.has(group.groupId)) continue;

    emittedGroups.add(group.groupId);
    const coverageIds = group.lockIcon
      ? group.memberIds.filter((id) => id !== group.displayId)
      : group.memberIds;
    const covered = coverageIds.some((id) => rowById.get(id)?.covered ?? false);
    const displayRow = group.lockIcon
      ? (rowById.get(group.displayId) ?? row)
      : (rowById.get(
          covered
            ? ((group.precedenceOrder ?? [group.displayId, ...group.memberIds]).find(
                (id) => rowById.get(id)?.covered,
              ) ?? group.displayId)
            : group.displayId,
        ) ?? row);
    result.push({ ...displayRow, covered });
  }

  return result;
}
