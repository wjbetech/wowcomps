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
  | "frostDeathknight"
  | "unholy"
  | "balance"
  | "feralDps"
  | "feralTank"
  | "restorationDruid"
  | "beastMastery"
  | "marksmanship"
  | "survival"
  | "arcane"
  | "fire"
  | "frostMage"
  | "holyPaladin"
  | "protectionPaladin"
  | "retribution"
  | "discipline"
  | "holyPriest"
  | "shadow"
  | "assassination"
  | "combat"
  | "subtlety"
  | "elemental"
  | "enhancement"
  | "restorationShaman"
  | "affliction"
  | "demonology"
  | "destruction"
  | "arms"
  | "fury"
  | "protectionWarrior";

export type ExpansionClassGroup = {
  classId: ClassId;
  label: string;
  color: string;
  specs: SpecCatalogEntry[];
};

export type SpecCatalogEntry = {
  specId: SpecId;
  label: string;
  iconLink?: string;
};

export type ClassCatalogEntry = {
  classId: ClassId;
  label: string;
  color: string;
  specs: SpecCatalogEntry[];
};
