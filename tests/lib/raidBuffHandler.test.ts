import { describe, expect, it } from "vite-plus/test";
import { createInitialRaidSlots } from "../../src/lib/grid";
import {
  getRaidBuffCoverage,
  getRaidBuffCoverageFromRows,
  getRaidBuffMemberRows,
} from "../../src/lib/raidBuffHandler";

describe("getRaidBuffMemberRows", () => {
  it("marks buffs covered when a matching spec is in the raid", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "fire", classId: "mage" };

    const rows = getRaidBuffMemberRows(raidSlots, "wotlk", 25);
    const arcaneBrilliance = rows.find((row) => row.id === "arcaneBrilliance");

    expect(arcaneBrilliance?.covered).toBe(true);
    expect(arcaneBrilliance?.tier).toBe("none");
  });

  it("keeps separate member rows before consolidation", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "elemental", classId: "shaman" };

    const rows = getRaidBuffMemberRows(raidSlots, "wotlk", 25);

    expect(rows.some((row) => row.id === "bloodlust")).toBe(true);
    expect(rows.some((row) => row.id === "heroism")).toBe(true);
  });
});

describe("getRaidBuffCoverage", () => {
  it("consolidates wotlk bloodlust and heroism into one covered row", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "elemental", classId: "shaman" };

    const coverage = getRaidBuffCoverage(raidSlots, "wotlk", 25);
    const bloodlust = coverage.find((row) => row.id === "bloodlust");
    const heroism = coverage.find((row) => row.id === "heroism");

    expect(bloodlust?.covered).toBe(true);
    expect(heroism).toBeUndefined();
  });

  it("reports base tier when only the base buff is present in classic", () => {
    const raidSlots = createInitialRaidSlots(40);
    raidSlots["1-1"] = { specId: "protectionPaladin", classId: "paladin" };

    const coverage = getRaidBuffCoverage(raidSlots, "classic", 40);
    const greaterBlessingOfMight = coverage.find((row) => row.id === "greaterBlessingOfMight");

    expect(greaterBlessingOfMight?.covered).toBe(true);
    expect(greaterBlessingOfMight?.tier).toBe("base");
  });

  it("ignores specs outside the selected raid size", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["6-1"] = { specId: "fire", classId: "mage" };

    const coverage = getRaidBuffCoverage(raidSlots, "wotlk", 20);
    const arcaneBrilliance = coverage.find((row) => row.id === "arcaneBrilliance");

    expect(arcaneBrilliance?.covered).toBe(false);
  });
});

describe("getRaidBuffCoverageFromRows", () => {
  it("consolidates prebuilt member rows without re-reading raid slots", () => {
    const raidSlots = createInitialRaidSlots(40);
    raidSlots["1-1"] = { specId: "protectionPaladin", classId: "paladin" };

    const memberRows = getRaidBuffMemberRows(raidSlots, "classic", 40);
    const coverage = getRaidBuffCoverageFromRows(memberRows, "classic");

    expect(coverage.length).toBeLessThan(memberRows.length);
    expect(coverage.find((row) => row.id === "greaterBlessingOfMight")?.covered).toBe(true);
  });
});
