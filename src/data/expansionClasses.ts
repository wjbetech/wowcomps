import type { Expansion } from "./expansionData";

export type ClassId =
  | "deathKnight"
  | "druid"
  | "hunter"
  | "mage"
  | "paladin"
  | "priest"
  | "rogue"
  | "shaman"
  | "warlock"
  | "warrior";

export type SpecId =
  | "blood"
  | "frost"
  | "unholy"
  | "balance"
  | "feral-dps"
  | "feral-tank"
  | "restoration"
  | "beastMastery"
  | "marksmanship"
  | "survival"
  | "arcane"
  | "fire"
  | "holy"
  | "protection"
  | "retribution"
  | "discipline"
  | "shadow"
  | "assassination"
  | "combat"
  | "subtlety"
  | "elemental"
  | "enhancement"
  | "affliction"
  | "demonology"
  | "destruction"
  | "arms"
  | "fury";

export type ExpansionClassGroup = {
  classId: ClassId;
  label: string;
  specs: {
    specId: SpecId;
    label: string;
  }[];
};

const classCatalog: Record<ClassId, ExpansionClassGroup> = {
  deathKnight: {
    classId: "deathKnight",
    label: "Death Knight",
    specs: [
      { specId: "blood", label: "Blood" },
      { specId: "frost", label: "Frost" },
      { specId: "unholy", label: "Unholy" },
    ],
  },
  druid: {
    classId: "druid",
    label: "Druid",
    specs: [
      { specId: "balance", label: "Balance" },
      { specId: "feral-dps", label: "Feral (DPS)" },
      { specId: "feral-tank", label: "Feral (Tank)" },
      { specId: "restoration", label: "Restoration" },
    ],
  },
  hunter: {
    classId: "hunter",
    label: "Hunter",
    specs: [
      { specId: "beastMastery", label: "Beast Mastery" },
      { specId: "marksmanship", label: "Marksmanship" },
      { specId: "survival", label: "Survival" },
    ],
  },
  mage: {
    classId: "mage",
    label: "Mage",
    specs: [
      { specId: "arcane", label: "Arcane" },
      { specId: "fire", label: "Fire" },
      { specId: "frost", label: "Frost" },
    ],
  },
  paladin: {
    classId: "paladin",
    label: "Paladin",
    specs: [
      { specId: "holy", label: "Holy" },
      { specId: "protection", label: "Protection" },
      { specId: "retribution", label: "Retribution" },
    ],
  },
  priest: {
    classId: "priest",
    label: "Priest",
    specs: [
      { specId: "discipline", label: "Discipline" },
      { specId: "holy", label: "Holy" },
      { specId: "shadow", label: "Shadow" },
    ],
  },
  rogue: {
    classId: "rogue",
    label: "Rogue",
    specs: [
      { specId: "assassination", label: "Assassination" },
      { specId: "combat", label: "Combat" },
      { specId: "subtlety", label: "Subtlety" },
    ],
  },
  shaman: {
    classId: "shaman",
    label: "Shaman",
    specs: [
      { specId: "elemental", label: "Elemental" },
      { specId: "enhancement", label: "Enhancement" },
      { specId: "restoration", label: "Restoration" },
    ],
  },
  warlock: {
    classId: "warlock",
    label: "Warlock",
    specs: [
      { specId: "affliction", label: "Affliction" },
      { specId: "demonology", label: "Demonology" },
      { specId: "destruction", label: "Destruction" },
    ],
  },
  warrior: {
    classId: "warrior",
    label: "Warrior",
    specs: [
      { specId: "arms", label: "Arms" },
      { specId: "fury", label: "Fury" },
      { specId: "protection", label: "Protection" },
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
