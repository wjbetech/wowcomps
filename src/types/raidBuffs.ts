import type { SpecId } from "./classesSpecs";
import type { Expansion } from "./expansions";
import type { WoWTooltipContent } from "./tooltips";

export type ClassicRaidBuffId =
  | "giftOfTheWild"
  | "improvedMarkOfTheWild"
  | "arcaneBrilliance"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfLight"
  | "greaterBlessingOfMight"
  | "improvedGreaterBlessingOfMight"
  | "greaterBlessingOfWisdom"
  | "improvedGreaterBlessingOfWisdom"
  | "greaterBlessingOfSalvation"
  | "greaterBlessingOfSanctuary"
  | "prayerOfSpirit"
  | "prayerOfFortitude"
  | "improvedPowerWordFortitude"
  | "prayerOfShadowProtection";

export type TbcRaidBuffId =
  | "giftOfTheWild"
  | "improvedMarkOfTheWild"
  | "arcaneBrilliance"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfLight"
  | "greaterBlessingOfMight"
  | "improvedGreaterBlessingOfMight"
  | "greaterBlessingOfWisdom"
  | "improvedGreaterBlessingOfWisdom"
  | "greaterBlessingOfSalvation"
  | "greaterBlessingOfSanctuary"
  | "divineSpirit"
  | "prayerOfFortitude"
  | "improvedPrayerOfFortitude"
  | "prayerOfShadowProtection"
  | "heroism"
  | "bloodlust";

export type WotlkRaidBuffId =
  | "abominationsMight"
  | "hornOfWinter"
  | "improvedIcyTalons"
  | "giftOfTheWild"
  | "moonkinForm"
  | "improvedMoonkinForm"
  | "leaderOfThePack"
  | "treeOfLife"
  | "ferociousInspiration"
  | "trueshotAura"
  | "arcaneBrilliance"
  | "arcaneEmpowerment"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfMight"
  | "improvedBlessingOfMight"
  | "greaterBlessingOfWisdom"
  | "improvedBlessingOfWisdom"
  | "improvedDevotionAura"
  | "sanctifiedRetribution"
  | "swiftRetribution"
  | "prayerOfFortitude"
  | "prayerOfSpirit"
  | "bloodlust"
  | "heroism"
  | "elementalOath"
  | "flametongueTotem"
  | "windfuryTotem"
  | "improvedWindfuryTotem"
  | "strengthOfEarthTotem"
  | "enhancingTotems"
  | "totemOfWrath"
  | "unleashedRage"
  | "wrathOfAirTotem"
  | "bloodPact"
  | "demonicPact"
  | "felIntelligence"
  | "battleShout"
  | "commandingShout"
  | "rampage"
  | "huntingParty"
  | "revitalize"
  | "enduringWinter"
  | "improvedSoulLeech"
  | "greaterBlessingOfSanctuary"
  | "judgementsOfTheWise"
  | "replenishment"
  | "commandingPresence";

export type RaidBuffDefinition = {
  id: ClassicRaidBuffId | TbcRaidBuffId | WotlkRaidBuffId;
  label: string;
  iconPath: string;
  talent?: boolean;
  meta?: string[];
  range?: string;
  cooldown?: string;
  tools?: string;
  reagent?: string;
  description?: string;
  sourceSpecIds: SpecId[];
  extra?: string;
};

export type RaidBuffCoverageTier = "none" | "base" | "improved";

export type RaidBuffCoverageRow = RaidBuffDefinition & {
  covered: boolean;
  tier: RaidBuffCoverageTier;
};

export type RaidBuffPanel = {
  buffs: RaidBuffCoverageRow[];
  memberRows: RaidBuffCoverageRow[];
  selectedExpansion: Expansion;
};

export type RaidBuffDisplayItem =
  | {
      kind: "single";
      key: string;
      row: RaidBuffCoverageRow;
      tooltip: WoWTooltipContent;
      showUpgradeBadge: boolean;
    }
  | {
      kind: "bloodlustHeroism";
      key: "bloodlust-heroism";
      row: RaidBuffCoverageRow;
      tooltip: WoWTooltipContent;
      bottomLeft: { iconPath: string; label: string };
      topRight: { iconPath: string; label: string };
    };
