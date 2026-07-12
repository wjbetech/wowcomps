import { getShamanBloodlustFamily } from "../data/partyBuffs";
import type { Expansion } from "../types/expansions";
import type { RaidBuffCoverageRow, RaidBuffDisplayItem } from "../types/raidBuffs";
import { getBuffTalentPairs } from "./buffTalentPairs";
import {
  formatBaseAndTalentTooltip,
  formatBloodlustHeroismTooltip,
  formatRaidCoverageTooltip,
} from "./formatCoverageTooltip";

export function getRaidBuffDisplayItems(
  buffs: RaidBuffCoverageRow[],
  memberRows: RaidBuffCoverageRow[],
  expansion: Expansion,
): RaidBuffDisplayItem[] {
  const family = getShamanBloodlustFamily(expansion);
  const bloodlustMember = memberRows.find((r) => r.id === "bloodlust");
  const heroismMember = memberRows.find((r) => r.id === "heroism");
  const pairs = getBuffTalentPairs(expansion);
  const byId = new Map<RaidBuffCoverageRow["id"], RaidBuffCoverageRow>(
    memberRows.map((r) => [r.id, r]),
  );
  const hiddenTalentIds = new Set<RaidBuffCoverageRow["id"]>(pairs.map((p) => p.talentId));
  return buffs.flatMap((buff): RaidBuffDisplayItem[] => {
    if (buff.id === "heroism" && family) return [];
    if (buff.id === "bloodlust" && family) {
      return [
        {
          kind: "bloodlustHeroism",
          key: "bloodlust-heroism",
          row: buff,
          tooltip: formatBloodlustHeroismTooltip(buff, bloodlustMember, heroismMember),
          bottomLeft: { iconPath: family.bloodlust.iconPath, label: family.bloodlust.label },
          topRight: { iconPath: family.heroism.iconPath, label: family.heroism.label },
        },
      ];
    }

    // Talent-only coverage rows: skip when the base is already shown; otherwise this
    // row is the consolidator display winner (e.g. improved Might) — keep it.
    if (hiddenTalentIds.has(buff.id)) {
      const pair = pairs.find((p) => p.talentId === buff.id);
      if (!pair || buffs.some((row) => row.id === pair.baseId)) return [];
    }

    const pair =
      pairs.find((p) => p.baseId === buff.id) ?? pairs.find((p) => p.talentId === buff.id);
    if (pair) {
      const base = byId.get(pair.baseId);
      if (base) {
        const talentRow = byId.get(pair.talentId);
        const talent = talentRow?.covered ? talentRow : undefined;
        return [
          {
            kind: "single",
            key: pair.baseId,
            row: buff,
            tooltip: formatBaseAndTalentTooltip(buff, base, talent),
            showUpgradeBadge: buff.tier === "base",
          },
        ];
      }
    }
    return [
      {
        kind: "single",
        key: buff.id,
        row: buff,
        tooltip: formatRaidCoverageTooltip(buff),
        showUpgradeBadge: buff.tier === "base",
      },
    ];
  });
}
