// libs
import { createInitialRaidSlots } from "./grid";

// types
import type { PlacedSpec, RaidSlotId, RaidSlots } from "../types/raidGrid";
import type { StoredWorkingRaid, WorkingRaidSnapshot } from "../types/raids";
import type { RaidSize } from "../types/expansions";

const WORKING_RAID_STORAGE_KEY = "wowcomps:workingRaid";
const WORKING_RAID_STORAGE_VERSION = 2 as const;

function isPlacedSpec(value: unknown): value is PlacedSpec {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<PlacedSpec>;

  return typeof candidate.classId === "string" && typeof candidate.specId === "string";
}

export function normalizeRaidSlots(value: unknown, raidSize: RaidSize): RaidSlots {
  const emptySlots = createInitialRaidSlots(raidSize);

  if (!value || typeof value !== "object") {
    return emptySlots;
  }

  const candidate = value as Record<string, unknown>;

  for (const slotId of Object.keys(emptySlots) as RaidSlotId[]) {
    const storedValue = candidate[slotId];

    if (storedValue === null) {
      emptySlots[slotId] = null;
      continue;
    }

    if (isPlacedSpec(storedValue)) {
      emptySlots[slotId] = {
        classId: storedValue.classId,
        specId: storedValue.specId,
        playerName: storedValue.playerName ?? "",
      };
    }
  }

  return emptySlots;
}

export function readWorkingRaidSlots(raidSize: RaidSize): WorkingRaidSnapshot {
  const defaultSlots = createInitialRaidSlots(raidSize);
  const defaultSnapshot = { raidSlots: defaultSlots, raidSize };

  if (typeof window === "undefined") return defaultSnapshot;

  try {
    const raw = window.localStorage.getItem(WORKING_RAID_STORAGE_KEY);
    if (!raw) return defaultSnapshot;

    const parsed = JSON.parse(raw) as Partial<StoredWorkingRaid>;

    if (parsed.storageVersion === 2) {
      return {
        raidSlots: normalizeRaidSlots(parsed.raidSlots, parsed.raidSize ?? raidSize),
        raidSize: parsed.raidSize ?? raidSize,
      };
    }

    if (parsed.storageVersion === 1) {
      return {
        raidSlots: normalizeRaidSlots(parsed.raidSlots, raidSize),
        raidSize,
      };
    }

    return defaultSnapshot;
  } catch {
    return defaultSnapshot;
  }
}

export function writeWorkingRaidSlots(raidSize: RaidSize, raidSlots: RaidSlots): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: StoredWorkingRaid = {
    storageVersion: WORKING_RAID_STORAGE_VERSION,
    raidSize,
    raidSlots,
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(WORKING_RAID_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    return;
  }
}

export function clearWorkingRaidSlots(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(WORKING_RAID_STORAGE_KEY);
  } catch {
    return;
  }
}
