import { describe, expect, it } from "vite-plus/test";
import { getCoverageCounter } from "../../src/lib/getCoverageCounter";
import { getCoverageProgressColor } from "../../src/lib/getCoverageProgressColor";
import { getCoverageSummary } from "../../src/lib/getCoverageSummary";

describe("getCoverageProgressColor", () => {
  it("returns grey when total is zero (no rows)", () => {
    expect(getCoverageProgressColor(0, 0)).toBe("hsl(0, 0%, 60%)");
  });

  it("returns red when nothing is covered", () => {
    expect(getCoverageProgressColor(0, 10)).toBe("hsl(0, 70%, 55%)");
  });

  it("returns green at full coverage", () => {
    expect(getCoverageProgressColor(10, 10)).toBe("hsl(120, 70%, 55%)");
  });
});

describe("getCoverageSummary", () => {
  it("returns complete when all covered without base tier", () => {
    expect(
      getCoverageSummary([{ covered: true, tier: "improved", sourceSpecIds: [] }]),
    ).toMatchObject({
      state: "complete",
      covered: 1,
      total: 1,
    });
  });

  it("returns empty when nothing is covered", () => {
    expect(
      getCoverageSummary([
        { covered: false, tier: "none", sourceSpecIds: [] },
        { covered: false, tier: "none", sourceSpecIds: [] },
      ]),
    ).toMatchObject({
      state: "empty",
      covered: 0,
      total: 2,
    });
  });

  it("returns partial when some rows are covered", () => {
    expect(
      getCoverageSummary([
        { covered: true, tier: "improved", sourceSpecIds: [] },
        { covered: false, tier: "none", sourceSpecIds: [] },
      ]),
    ).toMatchObject({
      state: "partial",
      covered: 1,
      total: 2,
    });
  });

  it("returns partial when all rows are covered but a base tier remains", () => {
    expect(
      getCoverageSummary([
        { covered: true, tier: "base", sourceSpecIds: [] },
        { covered: true, tier: "improved", sourceSpecIds: [] },
      ]),
    ).toMatchObject({
      state: "partial",
      covered: 2,
      total: 2,
    });
  });
});

describe("getCoverageCounter", () => {
  it("returns label and color from coverage counts", () => {
    const counter = getCoverageCounter(3, 10);

    expect(counter.label).toBe("3 / 10");
    expect(counter.color).toBe(getCoverageProgressColor(3, 10));
  });
});
