import { describe, expect, it } from "vite-plus/test";
import { consolidateClassicTbcDebuffs } from "../../src/lib/classicTbcDebuffConsolidator";
import type { RaidDebuffCoverageRow } from "../../src/types/raidDebuffs";

const row = (id: string, covered: boolean): RaidDebuffCoverageRow => ({
  id: id as RaidDebuffCoverageRow["id"],
  label: id,
  iconPath: "",
  sourceSpecIds: [],
  covered,
  tier: "none",
});

describe("classicTbcDebuffConsolidator", () => {
  it("should consolidate AP reduction", () => {
    const result = consolidateClassicTbcDebuffs([
      row("demoralizingShout", true),
      row("demoralizingroar", false),
      row("improvedDemoralizingShout", false),
      row("improvedDemoralizingRoar", false),
    ]);

    const apReductionDebuff = result.find((d) => d.id === "demoralizingShout");
    expect(apReductionDebuff?.tier).toBe("base");
    expect(apReductionDebuff?.covered).toBe(true);
  });
});
