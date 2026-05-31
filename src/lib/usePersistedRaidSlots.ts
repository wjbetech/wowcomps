import { useEffect, useState } from "react";
import type { RaidSlots } from "../types/raidGrid";
import { readWorkingRaidSlots, writeWorkingRaidSlots } from "./raidStorage";

export function usePersistedRaidSlots() {
  const [raidSlots, setRaidSlots] = useState<RaidSlots>(readWorkingRaidSlots);

  useEffect(() => {
    writeWorkingRaidSlots(raidSlots);
  }, [raidSlots]);

  return [raidSlots, setRaidSlots] as const;
}
