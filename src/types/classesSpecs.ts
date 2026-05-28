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
    iconLink?: string;
  }[];
};
