import { describe, expect, it } from "vite-plus/test";
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
});
