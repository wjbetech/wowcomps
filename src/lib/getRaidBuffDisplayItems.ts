import { getShamanBloodlustFamily } from "../data/partyBuffs";
import type { Expansion } from "../types/expansions";
import type { RaidBuffCoverageRow, RaidBuffDisplayItem } from "../types/raidBuffs";
import { formatBloodlustHeroismTooltip, formatRaidCoverageTooltip } from "./formatCoverageTooltip";

export function getRaidBuffDisplayItems(
  buffs: RaidBuffCoverageRow[],
  memberRows: RaidBuffCoverageRow[],
  expansion: Expansion,
): RaidBuffDisplayItem[] {
  const family = getShamanBloodlustFamily(expansion);
  const bloodlustMember = memberRows.find((row) => row.id === "bloodlust");
  const heroismMember = memberRows.find((row) => row.id === "heroism");

  return buffs.flatMap((buff): RaidBuffDisplayItem[] => {
    if (buff.id === "heroism" && family) return [];

    if (buff.id === "bloodlust" && family) {
      return [
        {
          kind: "bloodlustHeroism" as const,
          key: "bloodlust-heroism",
          row: buff,
          tooltip: formatBloodlustHeroismTooltip(buff, bloodlustMember, heroismMember),
          bottomLeft: { iconPath: family.bloodlust.iconPath, label: family.bloodlust.label },
          topRight: { iconPath: family.heroism.iconPath, label: family.heroism.label },
        },
      ];
    }

    return [
      {
        kind: "single" as const,
        key: buff.id,
        row: buff,
        tooltip: formatRaidCoverageTooltip(buff),
        showUpgradeBadge: buff.tier === "base",
      },
    ];
  });
}
