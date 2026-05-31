// libs
import { createInitialRaidSlots } from "./grid";

// types
import type { PlacedSpec, RaidSlotId, RaidSlots } from "../types/raidGrid";
import type { StoredWorkingRaid } from "../types/raids";

const WORKING_RAID_STORAGE_KEY = "wowcomps:workingRaid";
const WORKING_RAID_STORAGE_VERSION = 1 as const;

function isPlacedSpec(value: unknown): value is PlacedSpec {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<PlacedSpec>;

  return typeof candidate.classId === "string" && typeof candidate.specId === "string";
}

function normalizeRaidSlots(value: unknown): RaidSlots {
  const emptySlots = createInitialRaidSlots();

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
      emptySlots[slotId] = storedValue;
    }
  }

  return emptySlots;
}

export function readWorkingRaidSlots(): RaidSlots {
  const emptySlots = createInitialRaidSlots();

  if (typeof window === "undefined") {
    return emptySlots;
  }

  try {
    const rawStorage = window.localStorage.getItem(WORKING_RAID_STORAGE_KEY);

    if (!rawStorage) {
      return emptySlots;
    }

    const parsedStorage = JSON.parse(rawStorage) as Partial<StoredWorkingRaid>;

    if (parsedStorage.storageVersion !== WORKING_RAID_STORAGE_VERSION) {
      return emptySlots;
    }

    return normalizeRaidSlots(parsedStorage.raidSlots);
  } catch {
    return emptySlots;
  }
}

export function writeWorkingRaidSlots(raidSlots: RaidSlots): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: StoredWorkingRaid = {
    storageVersion: WORKING_RAID_STORAGE_VERSION,
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
