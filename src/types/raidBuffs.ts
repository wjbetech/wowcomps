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
  | "improvedPrayerOfFortitude"
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
  | "improvedMoonkinForm"
  | "leaderOfThePack"
  | "treeOfLife"
  | "ferociousInspiration"
  | "trueshotAura"
  | "arcaneBrilliance"
  | "arcaneEmpowerment"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfMight"
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
  | "judgementsOfTheWise";

export type RaidBuffDefinition = {
  id: ClassicRaidBuffId | TbcRaidBuffId | WotlkRaidBuffId;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

export type RaidBuffCoverageRow = RaidBuffDefinition & { covered: boolean };
