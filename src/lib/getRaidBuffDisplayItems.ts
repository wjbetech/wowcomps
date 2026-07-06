import { getShamanBloodlustFamily } from "../data/partyBuffs";
import type { Expansion } from "../types/expansions";
import type { RaidBuffCoverageRow, RaidBuffDisplayItem } from "../types/raidBuffs";
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
  const bloodlustMember = memberRows.find((row) => row.id === "bloodlust");
  const heroismMember = memberRows.find((row) => row.id === "heroism");
  const battleShoutMember = memberRows.find((row) => row.id === "battleShout");
  const commandingPresenceMember = memberRows.find((row) => row.id === "commandingPresence");
  const commandingShoutMember = memberRows.find((row) => row.id === "commandingShout");

  return buffs.flatMap((buff): RaidBuffDisplayItem[] => {
    if (buff.id === "heroism" && family) return [];
    if (buff.id === "commandingPresence") return [];
    if (buff.id === "improvedPowerWordFortitude" && expansion === "wotlk") return [];

    if (expansion === "wotlk" && buff.id === "battleShout" && battleShoutMember) {
      return [
        {
          kind: "single" as const,
          key: buff.id,
          row: buff,
          tooltip: formatBaseAndTalentTooltip(buff, battleShoutMember, commandingPresenceMember),
          showUpgradeBadge: buff.tier === "base",
        },
      ];
    }

    if (expansion === "wotlk" && buff.id === "commandingShout" && commandingShoutMember) {
      return [
        {
          kind: "single" as const,
          key: buff.id,
          row: buff,
          tooltip: formatBaseAndTalentTooltip(
            buff,
            commandingShoutMember,
            commandingPresenceMember,
          ),
          showUpgradeBadge: buff.tier === "base",
        },
      ];
    }

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
