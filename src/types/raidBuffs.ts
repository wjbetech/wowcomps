import type { SpecId } from "./classesSpecs";

export type ClassicRaidBuffId =
  | "giftOfTheWild"
  | "arcaneBrilliance"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfLight"
  | "greaterBlessingOfMight"
  | "greaterBlessingOfWisdom"
  | "greaterBlessingOfSalvation"
  | "greaterBlessingOfSanctuary"
  | "prayerOfSpirit"
  | "prayerOfFortitude"
  | "prayerOfShadowProtection";

export type ClassicRaidDebuffId =
  | "demoralizingRoar"
  | "faerieFire"
  | "exposeArmor"
  | "improvedScorch"
  | "wintersChill"
  | "shadowWeaving"
  | "curseOfRecklessness"
  | "curseOfShadow"
  | "huntersMark"
  | "sunderArmor";

export type TbcRaidBuffId =
  | "giftOfTheWild"
  | "Innervate"
  | "improvedHunterssMark"
  | "arcaneBrilliance"
  | "greaterBlessingOfKings"
  | "greaterBlessingOfLight"
  | "greaterBlessingOfMight"
  | "greaterBlessingOfWisdom"
  | "greaterBlessingOfSalvation"
  | "greaterBlessingOfSanctuary"
  | "divineSpirit"
  | "prayerOfFortitude"
  | "prayerOfShadowProtection";

export type TbcRaidDebuffId =
  | "demoralizingRoar"
  | "faerieFire"
  | "improvedFaerieFire"
  | "insectSwarm"
  | "mangle(Bear)"
  | "mangle(Cat)"
  | "exposeWeakness"
  | "improvedScorch"
  | "wintersChill"
  | "improvedSealOfTheCrusader"
  | "misery"
  | "shadowWeaving"
  | "improvedExposeArmor"
  | "curseOfRecklessness"
  | "curseOfTheElements"
  | "improvedShadowBolt"
  | "malediction"
  | "shadowEmbrace"
  | "bloodFrenzy"
  | "improvedDemoralizingShout"
  | "bloodlust"
  | "heroism";

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

export type WotlkRaidDebuffId =
  | "ebonPlaguebringer"
  | "improvedIcyTouch"
  | "demoralizingRoar"
  | "earthAndMoon"
  | "faerieFire"
  | "improvedFaerieFire"
  | "infectedWounds"
  | "insectSwarm"
  | "mangle"
  | "improvedScorch"
  | "wintersChill"
  | "heartOfTheCrusader"
  | "judgementsOfTheJust"
  | "vindication"
  | "misery"
  | "exposeArmor"
  | "masterPoisoner"
  | "savageCombat"
  | "curseOfTheElements"
  | "curseOfWeakness"
  | "improvedShadowBolt"
  | "bloodFrenzy"
  | "demoralizingShout"
  | "improvedThunderClap"
  | "sunderArmor"
  | "trauma";

export type RaidBuffDefinition = {
  id: ClassicRaidBuffId | TbcRaidBuffId | WotlkRaidBuffId;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

export type RaidDebuffDefinition = {
  id: ClassicRaidDebuffId | TbcRaidDebuffId | WotlkRaidDebuffId;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

export type RaidBuffCoverageRow = RaidBuffDefinition & { covered: boolean };

export type RaidDebuffCoverageRow = RaidDebuffDefinition & { covered: boolean };
