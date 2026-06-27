// core
import { describe, expect, it } from "vite-plus/test";

// libs
import { getClassBreakdown } from "../../src/lib/classesHandler";
import { createInitialRaidSlots } from "../../src/lib/grid";

describe("getClassBreakdown", () => {
  it("returns every class in the expansion with zero counts for an empty raid", () => {
    const raidSlots = createInitialRaidSlots(40);

    const result = getClassBreakdown(raidSlots, "classic", 40);
    expect(result.map((entry) => entry.classId)).toEqual([
      "druid",
      "hunter",
      "mage",
      "paladin",
      "priest",
      "rogue",
      "shaman",
      "warlock",
      "warrior",
    ]);
  });

  it("counts multiple placed specs by class", () => {
    const raidSlots = createInitialRaidSlots(40);

    raidSlots["1-1"] = { specId: "fire", classId: "mage" };
    raidSlots["1-2"] = { specId: "balance", classId: "druid" };
    raidSlots["1-3"] = { specId: "beastMastery", classId: "hunter" };

    const result = getClassBreakdown(raidSlots, "classic", 40);

    expect(result.find((entry) => entry.classId === "mage")?.count).toBe(1);
    expect(result.find((entry) => entry.classId === "druid")?.count).toBe(1);
    expect(result.find((entry) => entry.classId === "hunter")?.count).toBe(1);

    const result2 = getClassBreakdown(raidSlots, "wotlk", 25);

    expect(result2.find((entry) => entry.classId === "mage")?.count).toBe(1);
    expect(result2.find((entry) => entry.classId === "druid")?.count).toBe(1);
    expect(result2.find((entry) => entry.classId === "hunter")?.count).toBe(1);
  });

  it("ignores classes that are not part of the selected expansion", () => {
    const raidSlots = createInitialRaidSlots(40);

    raidSlots["1-1"] = { specId: "frostDeathknight", classId: "deathKnight" };

    const classicResult = getClassBreakdown(raidSlots, "classic", 40);
    const wotlkResult = getClassBreakdown(raidSlots, "wotlk", 25);

    expect(classicResult.some((entry) => entry.classId === "deathKnight")).toBe(false);
    expect(wotlkResult.find((entry) => entry.classId === "deathKnight")?.count).toBe(1);
  });

  it("ignores placed specs outside the selected raid size", () => {
    const raidSlots = createInitialRaidSlots(40);

    raidSlots["1-1"] = { specId: "fire", classId: "mage" };
    raidSlots["6-1"] = { specId: "shadow", classId: "priest" };

    const result = getClassBreakdown(raidSlots, "classic", 20);

    expect(result.find((entry) => entry.classId === "mage")?.count).toBe(1);
    expect(result.find((entry) => entry.classId === "priest")?.count).toBe(0);
  });
});
