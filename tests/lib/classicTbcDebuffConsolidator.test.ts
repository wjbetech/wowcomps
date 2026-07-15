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
      row("demoralizingRoar", false),
      row("improvedDemoralizingShout", false),
      row("feralAggression", false),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("demoralizingShout");
    expect(result[0].tier).toBe("base");
    expect(result[0].covered).toBe(true);
  });

  it("should not emit feral aggression separately from AP reduction", () => {
    const result = consolidateClassicTbcDebuffs([
      row("demoralizingRoar", true),
      row("feralAggression", true),
      row("demoralizingShout", false),
      row("improvedDemoralizingShout", false),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("feralAggression");
    expect(result[0].tier).toBe("improved");
  });

  it("should prefer improved demoralizing shout over feral aggression", () => {
    const result = consolidateClassicTbcDebuffs([
      row("demoralizingRoar", true),
      row("feralAggression", true),
      row("demoralizingShout", true),
      row("improvedDemoralizingShout", true),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("improvedDemoralizingShout");
    expect(result[0].tier).toBe("improved");
  });

  it("should consolidate imp demo over regular demo", () => {
    const result = consolidateClassicTbcDebuffs([
      row("improvedDemoralizingShout", true),
      row("demoralizingShout", false),
    ]);

    expect(result[0]?.tier).toBe("improved");
  });

  it("should consolidate imp faerie fire over regular faerie fire", () => {
    const result = consolidateClassicTbcDebuffs([
      row("improvedFaerieFire", true),
      row("faerieFire", false),
    ]);

    expect(result[0]?.tier).toBe("improved");
  });
});
