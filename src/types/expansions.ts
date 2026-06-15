export type Expansion = "classic" | "tbc" | "wotlk" | "sod" | "classicPlus";

export type RaidSize = 10 | 20 | 25 | 40;

export type ExpansionConfig = {
  id: Expansion;
  label: string;
  enabled: boolean;
  raidSizes: RaidSize[];
};

export type ExpansionSelect = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
};
