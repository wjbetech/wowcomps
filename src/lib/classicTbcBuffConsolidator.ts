import type { RaidBuffCoverageRow, RaidBuffCoverageTier } from "../types/raidBuffs";

type TieredBuffGroup = {
  groupId: string;
  baseId: string;
  improvedId: string;
  memberIds: string[];
};

const CLASSIC_TBC_BUFF_GROUPS: TieredBuffGroup[] = [
  {
    groupId: "giftOfTheWild",
    baseId: "giftOfTheWild",
    improvedId: "improvedMarkOfTheWild",
    memberIds: ["giftOfTheWild", "improvedMarkOfTheWild"],
  },
  {
    groupId: "greaterBlessingOfMight",
    baseId: "greaterBlessingOfMight",
    improvedId: "improvedGreaterBlessingOfMight",
    memberIds: ["greaterBlessingOfMight", "improvedGreaterBlessingOfMight"],
  },
  {
    groupId: "greaterBlessingOfWisdom",
    baseId: "greaterBlessingOfWisdom",
    improvedId: "improvedGreaterBlessingOfWisdom",
    memberIds: ["greaterBlessingOfWisdom", "improvedGreaterBlessingOfWisdom"],
  },
  {
    groupId: "prayerOfFortitude",
    baseId: "prayerOfFortitude",
    improvedId: "improvedPrayerOfFortitude",
    memberIds: ["prayerOfFortitude", "improvedPrayerOfFortitude"],
  },
];

export function consolidateClassicTbcBuffs(rows: RaidBuffCoverageRow[]): RaidBuffCoverageRow[] {
  const rowById = new Map<string, RaidBuffCoverageRow>(rows.map((row) => [row.id, row]));
  const memberToGroup = new Map<string, TieredBuffGroup>();
  for (const group of CLASSIC_TBC_BUFF_GROUPS) {
    for (const memberId of group.memberIds) {
      memberToGroup.set(memberId, group);
    }
  }
  const emittedGroups = new Set<string>();
  const result: RaidBuffCoverageRow[] = [];
  for (const row of rows) {
    const group = memberToGroup.get(row.id);
    if (!group) {
      result.push({
        ...row,
        tier: row.covered ? "improved" : "none",
      });
      continue;
    }
    if (emittedGroups.has(group.groupId)) continue;
    emittedGroups.add(group.groupId);
    const baseRow = rowById.get(group.baseId);
    const improvedRow = rowById.get(group.improvedId);
    if (!baseRow || !improvedRow) continue;
    const hasImproved = improvedRow.covered;
    const hasBase = baseRow.covered;
    const tier: RaidBuffCoverageTier = hasImproved ? "improved" : hasBase ? "base" : "none";
    const displayRow = tier === "improved" ? improvedRow : baseRow;
    result.push({
      ...displayRow,
      covered: tier !== "none",
      tier,
    });
  }
  return result;
}
