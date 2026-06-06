import type { Expansion, ExpansionConfig } from "../types/expansions";

export const expansionsData: ExpansionConfig[] = [
  {
    id: "classic",
    label: "Classic",
    enabled: true,
    raidSizes: [10, 20, 40],
  },
  {
    id: "tbc",
    label: "The Burning Crusade",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "wotlk",
    label: "Wrath of the Lich King",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "sod",
    label: "Season of Discovery",
    enabled: true,
    raidSizes: [10, 25],
  },
  {
    id: "classicPlus",
    label: "Classic+",
    enabled: false,
    raidSizes: [10, 20, 40],
  },
];

export function getExpansions(): ExpansionConfig[] {
  return expansionsData;
}

export function getExpansionConfig(expansion: Expansion): ExpansionConfig | null {
  return expansionsData.find((entry) => entry.id === expansion) ?? null;
}
