import type { SpecId } from "../types/classesSpecs";
import { consolidateRaidEffects } from "./consolidateRaidEffects";

type ConsolidatedBuffRow = {
  id: string;
  covered: boolean;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

const WOTLK_BUFF_GROUPS: {
  groupId: string;
  memberIds: string[];
  displayId: string;
  precedenceOrder?: string[];
  lockIcon?: boolean;
}[] = [
  {
    groupId: "bloodlustHerosim",
    memberIds: ["bloodlust", "heroism"],
    displayId: "bloodlust",
    precedenceOrder: ["bloodlust", "heroism"],
  },
  {
    groupId: "10%Stats",
    memberIds: ["greaterBlessingOfKings", "giftOfTheWild"],
    displayId: "giftOfTheWild",
  },
  {
    groupId: "mp5",
    memberIds: ["greaterBlessingOfWisdom", "improvedBlessingOfWisdom", "restorativeTotems"],
    displayId: "greaterBlessingOfWisdom",
    precedenceOrder: ["improvedBlessingOfWisdom", "greaterBlessingOfWisdom", "restorativeTotems"],
  },
  {
    groupId: "spellPower",
    memberIds: ["flametongueTotem", "totemOfWrath", "demonicPact"],
    displayId: "demonicPact",
  },
  {
    groupId: "5%SpellHaste",
    memberIds: ["wrathOfAirTotem"],
    displayId: "wrathOfAirTotem",
  },
  {
    groupId: "5%SpellCrit",
    memberIds: ["moonkinForm", "elementalOath"],
    displayId: "elementalOath",
  },
  {
    groupId: "attackPower",
    memberIds: [
      "greaterBlessingOfMight",
      "improvedBlessingOfMight",
      "battleShout",
      "commandingPresence",
    ],
    displayId: "greaterBlessingOfMight",
  },
  {
    groupId: "5%Crit",
    memberIds: ["leaderOfThePack", "rampage"],
    displayId: "leaderOfThePack",
  },
  {
    groupId: "20%MeleeHaste",
    memberIds: ["improvedWindfuryTotem", "improvedIcyTalons"],
    displayId: "improvedWindfuryTotem",
  },
  {
    groupId: "3%Haste",
    memberIds: ["improvedMoonkinForm", "swiftRetribution"],
    displayId: "swiftRetribution",
  },
  {
    groupId: "health",
    memberIds: ["bloodPact", "commandingShout"],
    displayId: "commandingShout",
  },
  {
    groupId: "strengthAndAgility",
    memberIds: ["hornOfWinter", "strengthOfEarthTotem"],
    displayId: "strengthOfEarthTotem",
  },
  {
    groupId: "10%AttackPower",
    memberIds: ["abominationsMight", "trueshotAura", "unleashedRage"],
    displayId: "trueshotAura",
  },
  {
    groupId: "3%Damage",
    memberIds: ["ferociousInspiration", "arcaneEmpowerment", "sanctifiedRetribution"],
    displayId: "ferociousInspiration",
  },
  {
    groupId: "spirit",
    memberIds: ["prayerOfSpirit", "felIntelligence"],
    displayId: "prayerOfSpirit",
  },
  {
    groupId: "6%Healing",
    memberIds: ["treeOfLife", "improvedDevotionAura"],
    displayId: "treeOfLife",
  },
  {
    groupId: "intellect",
    memberIds: ["arcaneBrilliance", "felIntelligence"],
    displayId: "arcaneBrilliance",
  },
  {
    groupId: "stamina",
    memberIds: ["prayerOfFortitude"],
    displayId: "prayerOfFortitude",
  },
  {
    groupId: "replenishment",
    memberIds: [
      "revitalize",
      "improvedSoulLeech",
      "enduringWinter",
      "judgementsOfTheWise",
      "huntingParty",
      "replenishment",
    ],
    displayId: "replenishment",
    precedenceOrder: [
      "replenishment",
      "revitalize",
      "improvedSoulLeech",
      "enduringWinter",
      "judgementsOfTheWise",
      "huntingParty",
    ],
    lockIcon: true,
  },
];

export function consolidateWotlkBuffs<T extends ConsolidatedBuffRow>(rows: T[]): T[] {
  return consolidateRaidEffects(rows, WOTLK_BUFF_GROUPS);
}
