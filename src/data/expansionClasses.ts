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
      { specId: "frost", label: "Frost", iconLink: specIcons.deathKnight?.frost },
      { specId: "unholy", label: "Unholy", iconLink: specIcons.deathKnight?.unholy },
    ],
  },
  druid: {
    classId: "druid",
    label: "Druid",
    color: classColors.druid,
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
      { specId: "frost", label: "Frost", iconLink: specIcons.mage?.frost },
    ],
  },
  paladin: {
    classId: "paladin",
    label: "Paladin",
    color: classColors.paladin,
    specs: [
      { specId: "holy", label: "Holy", iconLink: specIcons.paladin?.holy },
      { specId: "protection", label: "Protection", iconLink: specIcons.paladin?.protection },
      { specId: "retribution", label: "Retribution", iconLink: specIcons.paladin?.retribution },
    ],
  },
  priest: {
    classId: "priest",
    label: "Priest",
    color: classColors.priest,
    specs: [
      { specId: "discipline", label: "Discipline", iconLink: specIcons.priest?.discipline },
      { specId: "holy", label: "Holy", iconLink: specIcons.priest?.holy },
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
      { specId: "restoration", label: "Restoration", iconLink: specIcons.shaman?.restoration },
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
