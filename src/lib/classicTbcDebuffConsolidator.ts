import type { RaidDebuffCoverageRow, RaidDebuffCoverageTier } from "../types/raidDebuffs";

type TieredDebuffPair = {
  kind: "tiered";
  groupId: string;
  baseId: string;
  improvedId: string;
  memberIds: [string, string];
};

type ConsolidatedDebuffSlot = {
  kind: "consolidated";
  groupId: string;
  memberIds: string[];
  displayId: string;
  precedenceOrder?: string[];
  lockIcon?: boolean;
  tierMode: "apReduction" | "alternatives";
};

type ClassicTbcDebuffGroup = TieredDebuffPair | ConsolidatedDebuffSlot;

const CLASSIC_TBC_DEBUFF_GROUPS: ClassicTbcDebuffGroup[] = [
  {
    kind: "consolidated",
    groupId: "armorReduction",
    memberIds: ["sunderArmor", "exposeArmor"],
    displayId: "sunderArmor",
    precedenceOrder: ["exposeArmor", "sunderArmor"],
    tierMode: "alternatives",
  },
  {
    kind: "tiered",
    groupId: "faerieFire",
    baseId: "faerieFire",
    improvedId: "improvedFaerieFire",
    memberIds: ["faerieFire", "improvedFaerieFire"],
  },
  {
    kind: "consolidated",
    groupId: "apReduction",
    memberIds: [
      "demoralizingRoar",
      "improvedDemoralizingRoar",
      "demoralizingShout",
      "improvedDemoralizingShout",
    ],
    displayId: "demoralizingShout",
    precedenceOrder: [
      "improvedDemoralizingShout",
      "improvedDemoralizingRoar",
      "demoralizingRoar",
      "demoralizingShout",
    ],
    tierMode: "apReduction",
  },
  {
    kind: "tiered",
    groupId: "huntersMark",
    baseId: "huntersMark",
    improvedId: "improvedHuntersMark",
    memberIds: ["huntersMark", "improvedHuntersMark"],
  },
];

function resolveApReductionTier(
  rowById: Map<string, RaidDebuffCoverageRow>,
): RaidDebuffCoverageTier {
  const impRoar = rowById.get("improvedDemoralizingRoar")?.covered ?? false;
  const impShout = rowById.get("improvedDemoralizingShout")?.covered ?? false;
  const roar = rowById.get("demoralizingRoar")?.covered ?? false;
  const shout = rowById.get("demoralizingShout")?.covered ?? false;
  if (impRoar || impShout) return "improved";
  if (roar || shout) return "base";
  return "none";
}

function resolveAlternativesTier(
  group: ConsolidatedDebuffSlot,
  rowById: Map<string, RaidDebuffCoverageRow>,
): RaidDebuffCoverageTier {
  const anyCovered = group.memberIds.some((id) => rowById.get(id)?.covered ?? false);
  return anyCovered ? "improved" : "none";
}
function pickDisplayRow(
  group: ConsolidatedDebuffSlot,
  rowById: Map<string, RaidDebuffCoverageRow>,
  tier: RaidDebuffCoverageTier,
  fallback: RaidDebuffCoverageRow,
): RaidDebuffCoverageRow {
  if (tier === "none") {
    return rowById.get(group.displayId) ?? fallback;
  }
  const order = group.precedenceOrder ?? group.memberIds;
  const winningId = order.find((id) => rowById.get(id)?.covered);
  return (winningId ? rowById.get(winningId) : undefined) ?? fallback;
}
export function consolidateClassicTbcDebuffs(
  rows: RaidDebuffCoverageRow[],
): RaidDebuffCoverageRow[] {
  const rowById = new Map<string, RaidDebuffCoverageRow>(rows.map((row) => [row.id, row]));
  const memberToGroup = new Map<string, ClassicTbcDebuffGroup>();
  for (const group of CLASSIC_TBC_DEBUFF_GROUPS) {
    for (const memberId of group.memberIds) {
      memberToGroup.set(memberId, group);
    }
  }
  const emittedGroups = new Set<string>();
  const result: RaidDebuffCoverageRow[] = [];
  for (const row of rows) {
    const group = memberToGroup.get(row.id);
    // Not in any group → pass through
    if (!group) {
      result.push({
        ...row,
        tier: row.covered ? "improved" : "none",
      });
      continue;
    }
    // Already emitted this group
    if (emittedGroups.has(group.groupId)) continue;
    emittedGroups.add(group.groupId);
    // --- TIERED (faerie fire, hunter's mark) ---
    if (group.kind === "tiered") {
      const baseRow = rowById.get(group.baseId);
      const improvedRow = rowById.get(group.improvedId);
      if (!baseRow || !improvedRow) continue;
      const tier: RaidDebuffCoverageTier = improvedRow.covered
        ? "improved"
        : baseRow.covered
          ? "base"
          : "none";
      const displayRow = tier === "improved" ? improvedRow : baseRow;
      result.push({ ...displayRow, covered: tier !== "none", tier });
      continue;
    }
    // --- CONSOLIDATED (armor, AP reduction) ---
    const tier =
      group.tierMode === "apReduction"
        ? resolveApReductionTier(rowById) // ← YOUR HELPER CALLED HERE
        : resolveAlternativesTier(group, rowById);
    const displayRow = pickDisplayRow(group, rowById, tier, row);
    result.push({
      ...displayRow,
      covered: tier !== "none",
      tier,
    });
  }
  return result;
}
