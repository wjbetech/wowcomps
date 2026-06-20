// types
import { getRaidBuffDefinitions } from "../data/raidBuffs";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidBuffCoverageRow } from "../types/raidBuffs";
import type { RaidSlots } from "../types/raidGrid";
import { getRaidGridModel } from "./grid";
import { consolidateWotlkBuffs } from "./wotlkBuffConsolidator";
import { consolidateClassicTbcBuffs } from "./classicTbcBuffConsolidator";

export function getRaidBuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidBuffCoverageRow[] {
  const buffDefs = getRaidBuffDefinitions(expansion);
  const raidSpecIds = new Set(
    getRaidGridModel(raidSize)
      .flatMap((group) => group.slots.map((slot) => raidSlots[slot.id]?.specId))
      .filter((specId): specId is NonNullable<typeof specId> => specId != null),
  );

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
  return rows;
}
