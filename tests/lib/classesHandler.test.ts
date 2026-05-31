// core
import { describe, expect, it } from "vite-plus/test";

// libs
import { getClassBreakdown } from "../../src/lib/classesHandler";
import { createInitialRaidSlots } from "../../src/lib/grid";

describe("getClassBreakdown", () => {
  it("returns every class in the expansion with zero counts for an empty raid", () => {
    const raidSlots = createInitialRaidSlots();

    const result = getClassBreakdown(raidSlots, "classic");
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
    const raidSlots = createInitialRaidSlots();

    raidSlots["1-1"] = { specId: "fire", classId: "mage" };
    raidSlots["1-2"] = { specId: "balance", classId: "druid" };
    raidSlots["1-3"] = { specId: "beastMastery", classId: "hunter" };

    const result = getClassBreakdown(raidSlots, "classic");

    expect(result.find((entry) => entry.classId === "mage")?.count).toBe(1);
    expect(result.find((entry) => entry.classId === "druid")?.count).toBe(1);
    expect(result.find((entry) => entry.classId === "hunter")?.count).toBe(1);
  });

  it("ignores classes that are not part of the selected expansion", () => {
    const raidSlots = createInitialRaidSlots();

    raidSlots["1-1"] = { specId: "frost", classId: "deathKnight" };

    const classicResult = getClassBreakdown(raidSlots, "classic");
    const wotlkResult = getClassBreakdown(raidSlots, "wotlk");

    expect(classicResult.some((entry) => entry.classId === "deathKnight")).toBe(false);
    expect(wotlkResult.find((entry) => entry.classId === "deathKnight")?.count).toBe(1);
  });
});
