import { usePersistedRaidSlots } from "./usePersistedRaidSlots";
import { clearRaid, clearSlot, fillNextEmptySlot, placeSpec } from "./raidComposition";
import type { PlacedSpec, RaidSlotId } from "../types/raidGrid";

export function useRaidComposition() {
  const [raidSlots, setRaidSlots] = usePersistedRaidSlots();

  return {
    raidSlots,
    placeSpec: (slotId: RaidSlotId, spec: PlacedSpec) =>
      setRaidSlots((prev) => placeSpec(prev, slotId, spec)),
    fillNextEmptySlot: (spec: PlacedSpec) => setRaidSlots((prev) => fillNextEmptySlot(prev, spec)),
    clearSlot: (slotId: RaidSlotId) => setRaidSlots((prev) => clearSlot(prev, slotId)),
    clearRaid: () => setRaidSlots((prev) => clearRaid(prev)),
  };
}
