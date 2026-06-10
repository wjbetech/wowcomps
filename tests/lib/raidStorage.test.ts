import { describe, expect, it } from "vite-plus/test";

import { createInitialRaidSlots } from "../../src/lib/grid";
import { normalizeRaidSlots, readWorkingRaidSlots } from "../../src/lib/raidStorage";

describe("normalizeRaidSlots, raid storage", () => {
  it("returns a fresh set of empty raid slots for non-object input", () => {
    expect(normalizeRaidSlots(null, 40)).toEqual(createInitialRaidSlots(40));
    expect(normalizeRaidSlots("bad data", 40)).toEqual(createInitialRaidSlots(40));
  });

  it("keeps valid placed specs, normalizes invalid and null slots to empty", () => {
    const result = normalizeRaidSlots(
      {
        "1-1": { classId: "mage", specId: "fire" },
        "1-2": { classId: "druid", specId: "balance" },
        "1-3": null,
        "1-4": { invalid: "data" },
        "1-5": { classId: "hunter" },
      },
      40,
    );

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
    expect(result["1-2"]).toEqual({ classId: "druid", specId: "balance", playerName: "" });
    expect(result["1-3"]).toBeNull();
    expect(result["1-4"]).toBeNull();
    expect(result["1-5"]).toBeNull();
  });

  // this test is a little bit redundant with the previous test,
  // but I am a tiny bit too lazy during development to change
  // the previous test's input data to cover this case as well
  it("drops malformed slot values back to null", () => {
    const result = normalizeRaidSlots(
      {
        "1-1": { classId: "mage" },
        "1-2": { specId: "balance" },
        "1-3": { classId: "druid", specId: "balance", extra: "data" },
      },
      40,
    );

    expect(result["1-1"]).toBeNull();
    expect(result["1-2"]).toBeNull();
    expect(result["1-3"]).toEqual({ classId: "druid", specId: "balance", playerName: "" });
  });

  it("ignores unknown slot ids and does not add them to the normalized output", () => {
    const result = normalizeRaidSlots(
      {
        "1-1": { classId: "mage", specId: "fire" },
        "unknown-slot": { classId: "druid", specId: "balance" },
      },
      40,
    );

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
    expect("unknown-slot" in result).toBe(false);
  });

  it("reads a v2 working raid snapshot with persisted raid size", () => {
    window.localStorage.setItem(
      "wowcomps:workingRaid",
      JSON.stringify({
        storageVersion: 2,
        raidSize: 20,
        raidSlots: {
          "1-1": { classId: "mage", specId: "fire", playerName: "Valruna" },
          "2-1": { classId: "rogue", specId: "combat", playerName: "Easton" },
        },
        updatedAt: "2026-06-10T00:00:00.000Z",
      }),
    );

    const result = readWorkingRaidSlots(40);

    expect(result.raidSize).toBe(20);
    expect(result.raidSlots["1-1"]).toEqual({
      classId: "mage",
      specId: "fire",
      playerName: "Valruna",
    });
    expect(result.raidSlots["2-1"]).toEqual({
      classId: "rogue",
      specId: "combat",
      playerName: "Easton",
    });
  });

  it("falls back to the provided raid size when reading a v1 working raid snapshot", () => {
    window.localStorage.setItem(
      "wowcomps:workingRaid",
      JSON.stringify({
        storageVersion: 1,
        raidSlots: {
          "1-1": { classId: "mage", specId: "fire", playerName: "Valruna" },
          "2-1": { classId: "rogue", specId: "combat", playerName: "Easton" },
        },
        updatedAt: "2026-06-10T00:00:00.000Z",
      }),
    );

    const result = readWorkingRaidSlots(40);

    expect(result.raidSize).toBe(40);
    expect(result.raidSlots["1-1"]).toEqual({
      classId: "mage",
      specId: "fire",
      playerName: "Valruna",
    });
    expect(result.raidSlots["2-1"]).toEqual({
      classId: "rogue",
      specId: "combat",
      playerName: "Easton",
    });
  });
});
