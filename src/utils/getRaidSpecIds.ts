// utils
import { getRaidGridModel } from "../lib/grid";

// types
import type { SpecId } from "../types/classesSpecs";
import type { RaidSize } from "../types/expansions";
import type { RaidSlots } from "../types/raidGrid";

export function getRaidSpecIds(raidSlots: RaidSlots, raidSize: RaidSize): Set<SpecId> {
  return new Set(
    getRaidGridModel(raidSize)
      .flatMap((group) => group.slots.map((slot) => raidSlots[slot.id]?.specId))
      .filter((specId): specId is SpecId => specId !== null),
  );
}
