// data
import { specIcons } from "./specIcons";
import classColors from "./classColors";

// types
import type { Expansion } from "../types/expansions";
import type {
  ClassId,
  ClassCatalogEntry,
  SpecId,
  ExpansionClassGroup,
} from "../types/classesSpecs";

export const classCatalog: Record<ClassId, ClassCatalogEntry> = {
  deathKnight: {
    classId: "deathKnight",
    label: "Death Knight",
    color: classColors.deathKnight,
    specs: [
      { specId: "blood", label: "Blood", iconLink: specIcons.deathKnight?.blood },
      {
        specId: "frostDeathknight",
        label: "Frost",
        iconLink: specIcons.deathKnight?.frostDeathknight,
      },
      { specId: "unholy", label: "Unholy", iconLink: specIcons.deathKnight?.unholy },
    ],
  },
  druid: {
    classId: "druid",
    label: "Druid",
    color: classColors.druid,
    specs: [
      { specId: "balance", label: "Balance", iconLink: specIcons.druid?.balance },
      { specId: "feralDps", label: "Feral (DPS)", iconLink: specIcons.druid?.["feralDps"] },
      { specId: "feralTank", label: "Feral (Tank)", iconLink: specIcons.druid?.["feralTank"] },
      {
        specId: "restorationDruid",
        label: "Restoration",
        iconLink: specIcons.druid?.restorationDruid,
      },
    ],
  },
  hunter: {
    classId: "hunter",
    label: "Hunter",
    color: classColors.hunter,
    specs: [
      { specId: "beastMastery", label: "Beast Mastery", iconLink: specIcons.hunter?.beastMastery },
      { specId: "marksmanship", label: "Marksmanship", iconLink: specIcons.hunter?.marksmanship },
      { specId: "survival", label: "Survival", iconLink: specIcons.hunter?.survival },
    ],
  },
  mage: {
    classId: "mage",
    label: "Mage",
    color: classColors.mage,
    specs: [
      { specId: "arcane", label: "Arcane", iconLink: specIcons.mage?.arcane },
      { specId: "fire", label: "Fire", iconLink: specIcons.mage?.fire },
      { specId: "frostMage", label: "Frost", iconLink: specIcons.mage?.frostMage },
    ],
  },
  paladin: {
    classId: "paladin",
    label: "Paladin",
    color: classColors.paladin,
    specs: [
      { specId: "holyPaladin", label: "Holy", iconLink: specIcons.paladin?.holyPaladin },
      {
        specId: "protectionPaladin",
        label: "Protection",
        iconLink: specIcons.paladin?.protectionPaladin,
      },
      { specId: "retribution", label: "Retribution", iconLink: specIcons.paladin?.retribution },
    ],
  },
  priest: {
    classId: "priest",
    label: "Priest",
    color: classColors.priest,
    specs: [
      { specId: "discipline", label: "Discipline", iconLink: specIcons.priest?.discipline },
      { specId: "holyPriest", label: "Holy", iconLink: specIcons.priest?.holyPriest },
      { specId: "shadow", label: "Shadow", iconLink: specIcons.priest?.shadow },
    ],
  },
  rogue: {
    classId: "rogue",
    label: "Rogue",
    color: classColors.rogue,
    specs: [
      { specId: "assassination", label: "Assassination", iconLink: specIcons.rogue?.assassination },
      { specId: "combat", label: "Combat", iconLink: specIcons.rogue?.combat },
      { specId: "subtlety", label: "Subtlety", iconLink: specIcons.rogue?.subtlety },
    ],
  },
  shaman: {
    classId: "shaman",
    label: "Shaman",
    color: classColors.shaman,
    specs: [
      { specId: "elemental", label: "Elemental", iconLink: specIcons.shaman?.elemental },
      { specId: "enhancement", label: "Enhancement", iconLink: specIcons.shaman?.enhancement },
      {
        specId: "restorationShaman",
        label: "Restoration",
        iconLink: specIcons.shaman?.restorationShaman,
      },
    ],
  },
  warlock: {
    classId: "warlock",
    label: "Warlock",
    color: classColors.warlock,
    specs: [
      { specId: "affliction", label: "Affliction", iconLink: specIcons.warlock?.affliction },
      { specId: "demonology", label: "Demonology", iconLink: specIcons.warlock?.demonology },
      { specId: "destruction", label: "Destruction", iconLink: specIcons.warlock?.destruction },
    ],
  },
  warrior: {
    classId: "warrior",
    label: "Warrior",
    color: classColors.warrior,
    specs: [
      { specId: "arms", label: "Arms", iconLink: specIcons.warrior?.arms },
      { specId: "fury", label: "Fury", iconLink: specIcons.warrior?.fury },
      {
        specId: "protectionWarrior",
        label: "Protection",
        iconLink: specIcons.warrior?.protectionWarrior,
      },
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

export function getExpansionClassGroups(expansion: Expansion): ExpansionClassGroup[] {
  return expansionClassIds[expansion].map((classId) => classCatalog[classId]);
}

export function getSpecDisplay(classId: ClassId, specId: SpecId) {
  const group = classCatalog[classId];
  const spec = group.specs.find((entry) => entry.specId === specId);
  return spec ? { label: spec.label, iconLink: spec.iconLink } : null;
}

export function getClassDisplay(classId: ClassId): ClassCatalogEntry {
  return classCatalog[classId];
}

export function getClassCatalog(): ClassCatalogEntry[] {
  return Object.values(classCatalog);
}

export function getSpecsForClass(classId: ClassId) {
  return classCatalog[classId].specs;
}

export function getSpecEntry(classId: ClassId, specId: SpecId) {
  return classCatalog[classId].specs.find((entry) => entry.specId === specId) ?? null;
}
