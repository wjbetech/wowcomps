import { describe, expect, it } from "vite-plus/test";

import { createInitialRaidSlots } from "../../src/lib/grid";
import { normalizeRaidSlots } from "../../src/lib/raidStorage";

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
});
