// core
import { getDebuffTalentPairs } from "./debuffTalentPairs";

// types
import type { Expansion } from "../types/expansions";
import type { RaidDebuffCoverageRow, RaidDebuffDisplayItem } from "../types/raidDebuffs";
import { formatBaseAndTalentTooltip, formatRaidCoverageTooltip } from "./formatCoverageTooltip";

const AP_REDUCTION_MEMBER_IDS = new Set<RaidDebuffCoverageRow["id"]>([
  "demoralizingRoar",
  "feralAggression",
  "demoralizingShout",
  "improvedDemoralizingShout",
]);

function apReductionDisplayKey(debuffId: RaidDebuffCoverageRow["id"]): string {
  return AP_REDUCTION_MEMBER_IDS.has(debuffId) ? "apReduction" : debuffId;
}

export function getRaidDebuffDisplayItems(
  debuffs: RaidDebuffCoverageRow[],
  memberRows: RaidDebuffCoverageRow[],
  expansion: Expansion,
): RaidDebuffDisplayItem[] {
  const pairs = getDebuffTalentPairs(expansion);
  const byId = new Map<RaidDebuffCoverageRow["id"], RaidDebuffCoverageRow>(
    memberRows.map((row) => [row.id, row]),
  );
  const hiddenTalentIds = new Set<RaidDebuffCoverageRow["id"]>(pairs.map((pair) => pair.talentId));
  return debuffs.flatMap((debuff): RaidDebuffDisplayItem[] => {
    if (hiddenTalentIds.has(debuff.id)) {
      const pair = pairs.find((entry) => entry.talentId === debuff.id);
      if (!pair || debuffs.some((row) => row.id === pair.baseId)) {
        return [];
      }
    }
    const pair =
      pairs.find((entry) => entry.baseId === debuff.id) ??
      pairs.find((entry) => entry.talentId === debuff.id);
    if (pair) {
      const base = byId.get(pair.baseId);
      if (base) {
        const talentRow = byId.get(pair.talentId);
        const talent = talentRow?.covered ? talentRow : undefined;
        return [
          {
            key: AP_REDUCTION_MEMBER_IDS.has(debuff.id) ? "apReduction" : pair.baseId,
            row: debuff,
            tooltip: formatBaseAndTalentTooltip(debuff, base, talent),
            showUpgradeBadge: debuff.tier === "base",
          },
        ];
      }
    }
    return [
      {
        key: apReductionDisplayKey(debuff.id),
        row: debuff,
        tooltip: formatRaidCoverageTooltip(debuff),
        showUpgradeBadge: debuff.tier === "base",
      },
    ];
  });
}
