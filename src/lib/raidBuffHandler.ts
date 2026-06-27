// types
import { getRaidBuffDefinitions } from "../data/raidBuffs";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidBuffCoverageRow } from "../types/raidBuffs";
import type { RaidSlots } from "../types/raidGrid";
import { consolidateWotlkBuffs } from "./wotlkBuffConsolidator";
import { consolidateClassicTbcBuffs } from "./classicTbcBuffConsolidator";
import { getRaidSpecIds } from "../utils/getRaidSpecIds";

function normalizeBuffTier(rows: RaidBuffCoverageRow[]): RaidBuffCoverageRow[] {
  return rows.map((row) => ({
    ...row,
    tier: row.tier === "none" && row.covered ? "improved" : row.tier,
  }));
}

export function getRaidBuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidBuffCoverageRow[] {
  const buffDefs = getRaidBuffDefinitions(expansion);
  const raidSpecIds = getRaidSpecIds(raidSlots, raidSize);

  const rows: RaidBuffCoverageRow[] = buffDefs.map((buff) => ({
    ...buff,
    covered: buff.sourceSpecIds.some((specId) => raidSpecIds.has(specId)),
    tier: "none",
  }));
  const isClassicTbc =
    expansion === "classic" ||
    expansion === "tbc" ||
    expansion === "sod" ||
    expansion === "classicPlus";
  if (expansion === "wotlk") return consolidateWotlkBuffs(rows);
  if (isClassicTbc) return consolidateClassicTbcBuffs(rows);

  return normalizeBuffTier(rows);
}
