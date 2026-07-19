// libs
import { createInitialRaidSlots } from "./grid";

// types
import type { PlacedSpec, RaidSlotId, RaidSlots } from "../types/raidGrid";
import type {
  StorableRaidComposition,
  StoredWorkingRaid,
  WorkingRaidSnapshot,
} from "../types/raids";
import type { Expansion, RaidSize } from "../types/expansions";

const WORKING_RAID_STORAGE_KEY = "wowcomps:workingRaid";
const WORKING_RAID_STORAGE_VERSION = 3 as const;

const VALID_EXPANSIONS = new Set<Expansion>(["classic", "tbc", "wotlk", "sod", "classicPlus"]);

function normalizeExpansion(value: unknown): Expansion {
  if (typeof value === "string" && VALID_EXPANSIONS.has(value as Expansion)) {
    return value as Expansion;
  }

  return "classic";
}

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
  const defaultSnapshot: WorkingRaidSnapshot = {
    name: "New Raid",
    slots: defaultSlots,
    raidSize,
    expansion: "classic",
  };

  if (typeof window === "undefined") return defaultSnapshot;

  try {
    const raw = window.localStorage.getItem(WORKING_RAID_STORAGE_KEY);
    if (!raw) return defaultSnapshot;

    const parsed = JSON.parse(raw) as Partial<StoredWorkingRaid>;

    if (parsed.storageVersion === 3) {
      const composition = parsed.composition;
      const raidSizeValue =
        composition?.raidSize ?? (parsed as { raidSize?: RaidSize }).raidSize ?? raidSize;
      const slotsSource =
        composition?.slots ??
        (parsed as { raidSlots?: unknown }).raidSlots ??
        (parsed as { composition?: { raidSlots?: unknown } }).composition?.raidSlots;
      const expansionSource =
        composition?.expansion ?? (parsed as { expansion?: unknown }).expansion;
      return {
        name: composition?.name ?? "",
        slots: normalizeRaidSlots(slotsSource, raidSizeValue),
        raidSize: raidSizeValue,
        expansion: normalizeExpansion(expansionSource),
      };
    }

    if (parsed.storageVersion === 2) {
      const raidSizeValue = (parsed as { raidSize?: RaidSize }).raidSize ?? raidSize;
      const slotsSource = (parsed as { raidSlots?: unknown }).raidSlots;
      return {
        name: "",
        slots: normalizeRaidSlots(slotsSource, raidSizeValue),
        raidSize: raidSizeValue,
        expansion: "classic",
      };
    }

    if (parsed.storageVersion === 1) {
      const slotsSource = (parsed as { raidSlots?: unknown }).raidSlots;
      return {
        name: "",
        slots: normalizeRaidSlots(slotsSource, raidSize),
        raidSize,
        expansion: "classic",
      };
    }

    return defaultSnapshot;
  } catch {
    return defaultSnapshot;
  }
}

export function writeWorkingRaidSlots(
  raidSize: RaidSize,
  raidSlots: RaidSlots,
  expansion: Expansion,
): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload: StoredWorkingRaid = {
    storageVersion: WORKING_RAID_STORAGE_VERSION,
    composition: {
      name: "New Raid",
      expansion,
      raidSize,
      slots: raidSlots,
    },
  };

  try {
    window.localStorage.setItem(WORKING_RAID_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    return;
  }
}

export function readWorkingRaid(fallbackRaidSize: RaidSize): WorkingRaidSnapshot {
  return readWorkingRaidSlots(fallbackRaidSize);
}

export function writeWorkingRaid(composition: StorableRaidComposition): void {
  const payload: StoredWorkingRaid = {
    storageVersion: WORKING_RAID_STORAGE_VERSION,
    composition,
  };

  window.localStorage.setItem(WORKING_RAID_STORAGE_KEY, JSON.stringify(payload));
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

export function createDefaultComposition(raidSize: RaidSize): StorableRaidComposition {
  return {
    name: "",
    expansion: "classic",
    raidSize,
    slots: createInitialRaidSlots(raidSize),
  };
}
