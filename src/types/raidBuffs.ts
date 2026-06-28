import type { SpecId } from "./classesSpecs";

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
  | "prayerOfShadowProtection";

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
  | "elementalOath"
  | "flametongueTotem"
  | "improvedWindfuryTotem"
  | "strengthOfEarthTotem"
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
  | "heroism"
  | "replenishment"
  | "commandingPresence";

export type RaidBuffDefinition = {
  id: ClassicRaidBuffId | TbcRaidBuffId | WotlkRaidBuffId;
  label: string;
  iconPath: string;
  talent?: boolean;
  meta?: string[];
  range?: string;
  reagent?: string;
  description?: string;
  sourceSpecIds: SpecId[];
};

export type RaidBuffCoverageTier = "none" | "base" | "improved";

export type RaidBuffCoverageRow = RaidBuffDefinition & {
  covered: boolean;
  tier: RaidBuffCoverageTier;
};

export type RaidBuffPanel = {
  buffs: RaidBuffCoverageRow[];
};
