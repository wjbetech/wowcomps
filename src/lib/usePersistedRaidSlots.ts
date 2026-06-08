// core
import { useEffect, useState } from "react";

// libs
import { readWorkingRaidSlots, writeWorkingRaidSlots } from "./raidStorage";

// types
import type { RaidSlots } from "../types/raidGrid";
import type { RaidSize } from "../types/expansions";

export function usePersistedRaidSlots(raidSize: RaidSize) {
  const [raidSlots, setRaidSlots] = useState<RaidSlots>(readWorkingRaidSlots(raidSize));

  useEffect(() => {
    writeWorkingRaidSlots(raidSlots);
  }, [raidSlots]);

  return [raidSlots, setRaidSlots] as const;
}
