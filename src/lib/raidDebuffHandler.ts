// data
import { getRaidDebuffDefinitions } from "../data/raidDebuffs";

// types
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidDebuffCoverageRow } from "../types/raidDebuffs";
import type { RaidSlots } from "../types/raidGrid";

// utils
import { getRaidSpecIds } from "../utils/getRaidSpecIds";
import { consolidateClassicTbcDebuffs } from "./classicTbcDebuffConsolidator";
import { consolidateWotlkDebuffs } from "./debuffConsolidator";

function normalizeDebuffTier(rows: RaidDebuffCoverageRow[]): RaidDebuffCoverageRow[] {
  return rows.map((row) => ({
    ...row,
    tier: row.tier === "none" && row.covered ? "improved" : row.tier,
  }));
}

function buildRaidDebuffRows(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidDebuffCoverageRow[] {
  const debuffDefs = getRaidDebuffDefinitions(expansion);
  const raidSpecIds = getRaidSpecIds(raidSlots, raidSize);

  return debuffDefs.map((debuff) => ({
    ...debuff,
    covered: debuff.sourceSpecIds.some((specId) => raidSpecIds.has(specId)),
    tier: "none",
  }));
}

function consolidateDebuffsForExpansion(
  rows: RaidDebuffCoverageRow[],
  expansion: Expansion,
): RaidDebuffCoverageRow[] {
  const isClassicTbc =
    expansion === "classic" ||
    expansion === "tbc" ||
    expansion === "sod" ||
    expansion === "classicPlus";

  if (expansion === "wotlk") {
    return normalizeDebuffTier(consolidateWotlkDebuffs(rows));
  }

  if (isClassicTbc) {
    return consolidateClassicTbcDebuffs(rows);
  }

  return normalizeDebuffTier(rows);
}

export function getRaidDebuffMembersRows(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidDebuffCoverageRow[] {
  return buildRaidDebuffRows(raidSlots, expansion, raidSize);
}

export function getRaidDebuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidDebuffCoverageRow[] {
  const rows = buildRaidDebuffRows(raidSlots, expansion, raidSize);
  return consolidateDebuffsForExpansion(rows, expansion);
}

export function getRaidDebuffCoverageFromRows(
  rows: RaidDebuffCoverageRow[],
  expansion: Expansion,
): RaidDebuffCoverageRow[] {
  return consolidateDebuffsForExpansion(rows, expansion);
}
