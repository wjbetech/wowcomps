export type Expansion = "classic" | "tbc" | "wotlk" | "sod" | "classicPlus";

export type RaidSize = 10 | 20 | 25 | 40;

export type ExpansionConfig = {
  id: Expansion;
  label: string;
  themeKey: string;
  enabled: boolean;
  raidSizes: RaidSize[];
};

export const expansionsData: ExpansionConfig[] = [
  {
    id: "classic",
    label: "Classic",
    themeKey: "classic",
    enabled: true,
    raidSizes: [10, 20, 40],
  },
  {
    id: "tbc",
    label: "The Burning Crusade",
    themeKey: "tbc",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "wotlk",
    label: "Wrath of the Lich King",
    themeKey: "wotlk",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "sod",
    label: "Season of Discovery",
    themeKey: "sod",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "classicPlus",
    label: "Classic+",
    themeKey: "classicPlus",
    enabled: false,
    raidSizes: [10, 20, 40],
  },
];
