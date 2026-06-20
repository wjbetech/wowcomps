import type { SpecId } from "../types/classesSpecs";
import { consolidateRaidEffects } from "./consolidateRaidEffects";

type ConsolidatedDebuffRow = {
  id: string;
  covered: boolean;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

const WOTLK_DEBUFF_GROUPS: {
  groupId: string;
  memberIds: string[];
  displayId: string;
  precedenceOrder?: string[];
  lockIcon?: boolean;
}[] = [
  {
    groupId: "5%ArmorReduction",
    memberIds: ["faerieFire", "improvedFaerieFire", "curseOfWeakness"],
    displayId: "faerieFire",
  },
  {
    groupId: "20%AttackSpeedReduction",
    memberIds: ["improvedIcyTouch", "infectedWounds", "judgementsOfTheJust", "improvedThunderClap"],
    displayId: "improvedThunderClap",
  },
  {
    groupId: "attackPowerReduction",
    memberIds: ["demoralizingRoar", "vindication", "curseOfWeakness", "demoralizingShout"],
    displayId: "demoralizingRoar",
  },
  {
    groupId: "30%BleedDamage",
    memberIds: ["mangle", "trauma"],
    displayId: "mangle",
  },
  {
    groupId: "3%HitReduction",
    memberIds: ["insectSwarm"],
    displayId: "insectSwarm",
  },
  {
    groupId: "5%SpellCrit",
    memberIds: ["improvedScorch", "wintersChill", "improvedShadowBolt"],
    displayId: "improvedScorch",
  },
  {
    groupId: "4%PhysicalDamage",
    memberIds: ["savageCombat", "bloodFrenzy"],
    displayId: "bloodFrenzy",
  },
  {
    groupId: "13%SpellDamage",
    memberIds: ["ebonPlaguebringer", "earthAndMoon", "curseOfTheElements"],
    displayId: "earthAndMoon",
  },
  {
    groupId: "20%ArmorReduction",
    memberIds: ["exposeArmor", "sunderArmor"],
    displayId: "sunderArmor",
  },
  {
    groupId: "3%MeleeCrit",
    memberIds: ["heartOfTheCrusader", "masterPoisoner", "totemOfWrath"],
    displayId: "heartOfTheCrusader",
  },
  {
    groupId: "3%SpellHit",
    memberIds: ["improvedFaerieFire", "misery"],
    displayId: "misery",
  },
];

export function consolidateWotlkDebuffs<T extends ConsolidatedDebuffRow>(rows: T[]): T[] {
  return consolidateRaidEffects(rows, WOTLK_DEBUFF_GROUPS);
}
