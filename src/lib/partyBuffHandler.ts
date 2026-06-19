// data
import { getPartyBuffDefinitions } from "../data/partyBuffs";

// libs
import { getRaidGridModel } from "./grid";

// types
import type { PartyGroupBuffCoverage, PartyBuffCoverageRow } from "../types/buffs";
import type { Expansion, RaidSize } from "../types/expansions";
import type { RaidSlots } from "../types/raidGrid";

export function getPartyBuffCoverage(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): PartyGroupBuffCoverage[] {
  const partyBuffs = getPartyBuffDefinitions(expansion);

  if (partyBuffs.length === 0) return [];

  return getRaidGridModel(raidSize).map((group) => {
    const groupSpecIds = new Set(
      group.slots
        .map((slot) => raidSlots[slot.id]?.specId)
        .filter((specId): specId is NonNullable<typeof specId> => specId != null),
    );

    const buffs: PartyBuffCoverageRow[] = partyBuffs.map((buff) => ({
      buffId: buff.id,
      label: buff.label,
      iconPath: buff.iconPath,
      sourceSpecIds: buff.sourceSpecIds,
      covered: buff.sourceSpecIds.some((specId) => groupSpecIds.has(specId)),
    }));

    return { groupId: group.id, buffs };
  });
}
