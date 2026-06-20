import type { RaidSlots } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";
import { getRaidGridModel } from "./grid";
import type { RaidDebuffCoverageRow } from "../types/raidDebuffs";
import { getRaidDebuffDefinitions } from "../data/raidDebuffs";

export function getRaidDebuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RaidDebuffCoverageRow[] {
  const debuffDefs = getRaidDebuffDefinitions(expansion);

  const raidSpecIds = new Set(
    getRaidGridModel(raidSize)
      .flatMap((group) => group.slots.map((slot) => raidSlots[slot.id]?.specId))
      .filter((specId): specId is NonNullable<typeof specId> => specId !== null),
  );

  return debuffDefs.map((debuff) => ({
    ...debuff,
    covered: debuff.sourceSpecIds.some((specId) => raidSpecIds.has(specId)),
  }));
}
