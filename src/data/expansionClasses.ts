import type { Expansion } from "../types/expansions";
import { specIcons } from "./specIcons";
import type { ClassId, ExpansionClassGroup } from "../types/classesSpecs";

const classCatalog: Record<ClassId, ExpansionClassGroup> = {
  deathKnight: {
    classId: "deathKnight",
    label: "Death Knight",
    specs: [
      { specId: "blood", label: "Blood", iconLink: specIcons.deathKnight?.blood },
      { specId: "frost", label: "Frost", iconLink: specIcons.deathKnight?.frost },
      { specId: "unholy", label: "Unholy", iconLink: specIcons.deathKnight?.unholy },
    ],
  },
  druid: {
    classId: "druid",
    label: "Druid",
    specs: [
      { specId: "balance", label: "Balance", iconLink: specIcons.druid?.balance },
      { specId: "feral-dps", label: "Feral (DPS)", iconLink: specIcons.druid?.["feral-dps"] },
      { specId: "feral-tank", label: "Feral (Tank)", iconLink: specIcons.druid?.["feral-tank"] },
      { specId: "restoration", label: "Restoration", iconLink: specIcons.druid?.restoration },
    ],
  },
  hunter: {
    classId: "hunter",
    label: "Hunter",
    specs: [
      { specId: "beastMastery", label: "Beast Mastery", iconLink: specIcons.hunter?.beastMastery },
      { specId: "marksmanship", label: "Marksmanship", iconLink: specIcons.hunter?.marksmanship },
      { specId: "survival", label: "Survival", iconLink: specIcons.hunter?.survival },
    ],
  },
  mage: {
    classId: "mage",
    label: "Mage",
    specs: [
      { specId: "arcane", label: "Arcane", iconLink: specIcons.mage?.arcane },
      { specId: "fire", label: "Fire", iconLink: specIcons.mage?.fire },
      { specId: "frost", label: "Frost", iconLink: specIcons.mage?.frost },
    ],
  },
  paladin: {
    classId: "paladin",
    label: "Paladin",
    specs: [
      { specId: "holy", label: "Holy", iconLink: specIcons.paladin?.holy },
      { specId: "protection", label: "Protection", iconLink: specIcons.paladin?.protection },
      { specId: "retribution", label: "Retribution", iconLink: specIcons.paladin?.retribution },
    ],
  },
  priest: {
    classId: "priest",
    label: "Priest",
    specs: [
      { specId: "discipline", label: "Discipline", iconLink: specIcons.priest?.discipline },
      { specId: "holy", label: "Holy", iconLink: specIcons.priest?.holy },
      { specId: "shadow", label: "Shadow", iconLink: specIcons.priest?.shadow },
    ],
  },
  rogue: {
    classId: "rogue",
    label: "Rogue",
    specs: [
      { specId: "assassination", label: "Assassination", iconLink: specIcons.rogue?.assassination },
      { specId: "combat", label: "Combat", iconLink: specIcons.rogue?.combat },
      { specId: "subtlety", label: "Subtlety", iconLink: specIcons.rogue?.subtlety },
    ],
  },
  shaman: {
    classId: "shaman",
    label: "Shaman",
    specs: [
      { specId: "elemental", label: "Elemental", iconLink: specIcons.shaman?.elemental },
      { specId: "enhancement", label: "Enhancement", iconLink: specIcons.shaman?.enhancement },
      { specId: "restoration", label: "Restoration", iconLink: specIcons.shaman?.restoration },
    ],
  },
  warlock: {
    classId: "warlock",
    label: "Warlock",
    specs: [
      { specId: "affliction", label: "Affliction", iconLink: specIcons.warlock?.affliction },
      { specId: "demonology", label: "Demonology", iconLink: specIcons.warlock?.demonology },
      { specId: "destruction", label: "Destruction", iconLink: specIcons.warlock?.destruction },
    ],
  },
  warrior: {
    classId: "warrior",
    label: "Warrior",
    specs: [
      { specId: "arms", label: "Arms", iconLink: specIcons.warrior?.arms },
      { specId: "fury", label: "Fury", iconLink: specIcons.warrior?.fury },
      { specId: "protection", label: "Protection", iconLink: specIcons.warrior?.protection },
    ],
  },
};

const expansionClassIds: Record<Expansion, ClassId[]> = {
  classic: [
    "druid",
    "hunter",
    "mage",
    "paladin",
    "priest",
    "rogue",
    "shaman",
    "warlock",
    "warrior",
  ],
  tbc: ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"],
  wotlk: [
    "deathKnight",
    "druid",
    "hunter",
    "mage",
    "paladin",
    "priest",
    "rogue",
    "shaman",
    "warlock",
    "warrior",
  ],
  sod: ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"],
  classicPlus: [],
};

export const expansionClasses: Record<Expansion, ExpansionClassGroup[]> = Object.fromEntries(
  Object.entries(expansionClassIds).map(([expansion, classIds]) => [
    expansion,
    classIds.map((classId) => classCatalog[classId]),
  ]),
) as Record<Expansion, ExpansionClassGroup[]>;
