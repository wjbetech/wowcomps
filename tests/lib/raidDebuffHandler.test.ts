import { describe, expect, it } from "vite-plus/test";
import { createInitialRaidSlots } from "../../src/lib/grid";
import { getRaidDebuffCoverage } from "../../src/lib/raidDebuffHandler";

describe("getRaidDebuffCoverage", () => {
  it("marks debuffs covered when a matching spec is in the raid", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "balance", classId: "druid" };

    const coverage = getRaidDebuffCoverage(raidSlots, "wotlk", 25);
    const faerieFire = coverage.find((row) => row.id === "faerieFire");

    expect(faerieFire?.covered).toBe(true);
    expect(faerieFire?.tier).toBe("improved");
  });

  it("consolidates tbc faerie fire variants", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "balance", classId: "druid" };

    const coverage = getRaidDebuffCoverage(raidSlots, "tbc", 25);

    expect(coverage.some((row) => row.id === "faerieFire")).toBe(false);
    expect(coverage.find((row) => row.id === "improvedFaerieFire")?.covered).toBe(true);
  });

  it("ignores specs outside the selected raid size", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["6-1"] = { specId: "balance", classId: "druid" };

    const coverage = getRaidDebuffCoverage(raidSlots, "wotlk", 20);
    const faerieFire = coverage.find((row) => row.id === "faerieFire");

    expect(faerieFire?.covered).toBe(false);
  });
});
