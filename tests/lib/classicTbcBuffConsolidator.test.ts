import { describe, expect, it } from "vite-plus/test";
import { RaidBuffCoverageRow } from "./../../src/types/raidBuffs";
import { consolidateClassicTbcBuffs } from "../../src/lib/classicTbcBuffConsolidator";

const row = (id: string, covered: boolean): RaidBuffCoverageRow => ({
  id: id as RaidBuffCoverageRow["id"],
  label: id,
  iconPath: "",
  sourceSpecIds: [],
  covered,
  tier: "none",
});

describe("classicTbcBuffConsolidator", () => {
  it("should consolidate base Gift of the Wild", () => {
    const result = consolidateClassicTbcBuffs([
      row("giftOfTheWild", true),
      row("improvedMarkOfTheWild", false),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("giftOfTheWild");
    expect(result[0]?.tier).toBe("base");
    expect(result[0]?.covered).toBe(true);
  });

  it("should consolidate imp. might over regular might", () => {
    const result = consolidateClassicTbcBuffs([
      row("improvedBlessingOfMight", true),
      row("greaterBlessingOfMight", false),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("improvedBlessingOfMight");
    expect(result[0]?.tier).toBe("improved");
    expect(result[0]?.covered).toBe(true);
  });

  it("should consolidate imp. fortitude over regular fortitude", () => {
    const result = consolidateClassicTbcBuffs([
      row("improvedPowerWordFortitude", true),
      row("prayerOfFortitude", false),
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("improvedPowerWordFortitude");
    expect(result[0]?.tier).toBe("improved");
    expect(result[0]?.covered).toBe(true);
  });

  it("should pass through ungrouped buffs with tier improved when covered", () => {
    const result = consolidateClassicTbcBuffs([row("arcaneBrilliance", true)]);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("arcaneBrilliance");
    expect(result[0]?.tier).toBe("improved");
    expect(result[0]?.covered).toBe(true);
  });
});
