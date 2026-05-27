import type { Expansion } from "../data/expansionData";

export type SpecsPanelLayoutTier = "wide" | "medium";

export function getSpecsPanelRowPattern(
  expansion: Expansion,
  tier: SpecsPanelLayoutTier,
): number[] {
  if (tier === "wide") {
    return expansion === "wotlk" ? [5, 5] : [5, 4];
  }
  return expansion === "wotlk" ? [3, 3, 3, 3] : [3, 3, 3];
}

export function chunkByPattern<T>(items: T[], pattern: number[]): T[][] {
  const rows: T[][] = [];
  let start = 0;

  for (const size of pattern) {
    const row = items.slice(start, start + size);

    if (row.length === 0) {
      break;
    }

    rows.push(row);
    start += size;
  }

  if (start < items.length) {
    rows.push(items.slice(start));
  }

  return rows;
}

export function getSpecsPanelRows<T>(
  items: T[],
  expansion: Expansion,
  tier: SpecsPanelLayoutTier,
): T[][] {
  return chunkByPattern(items, getSpecsPanelRowPattern(expansion, tier));
}
