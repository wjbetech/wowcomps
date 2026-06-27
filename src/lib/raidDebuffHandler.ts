import type { RaidSlots } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidDebuffCoverageRow } from "../types/raidDebuffs";
import { getRaidDebuffDefinitions } from "../data/raidDebuffs";
import { consolidateWotlkDebuffs } from "./debuffConsolidator";
import { consolidateClassicTbcDebuffs } from "./classicTbcDebuffConsolidator";
import { getRaidSpecIds } from "../utils/getRaidSpecIds";

function normalizeDebuffTier(rows: RaidDebuffCoverageRow[]): RaidDebuffCoverageRow[] {
  return rows.map((row) => ({
    ...row,
    tier: row.tier === "none" && row.covered ? "improved" : row.tier,
  }));
}

export function getRaidDebuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidDebuffCoverageRow[] {
  const debuffDefs = getRaidDebuffDefinitions(expansion);
  const raidSpecIds = getRaidSpecIds(raidSlots, raidSize);

  const rows: RaidDebuffCoverageRow[] = debuffDefs.map((debuff) => ({
    ...debuff,
    covered: debuff.sourceSpecIds.some((specId) => raidSpecIds.has(specId)),
    tier: "none",
  }));
  const isClassicTbc =
    expansion === "classic" ||
    expansion === "tbc" ||
    expansion === "sod" ||
    expansion === "classicPlus";
  if (expansion === "wotlk") return normalizeDebuffTier(consolidateWotlkDebuffs(rows));
  if (isClassicTbc) return consolidateClassicTbcDebuffs(rows);

  return normalizeDebuffTier(rows);
}
