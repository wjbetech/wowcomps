import { describe, expect, it } from "vite-plus/test";
import { getRaidBuffDisplayItems } from "../../src/lib/getRaidBuffDisplayItems";
import type { RaidBuffCoverageRow } from "../../src/types/raidBuffs";

const row = (
  id: RaidBuffCoverageRow["id"],
  overrides: Partial<RaidBuffCoverageRow> = {},
): RaidBuffCoverageRow => ({
  id,
  label: id,
  iconPath: `/icons/${id}.jpg`,
  sourceSpecIds: [],
  covered: false,
  tier: "none",
  ...overrides,
});

describe("getRaidBuffDisplayItems", () => {
  it("skips heroism and renders a diagonal bloodlust item in wotlk", () => {
    const buffs = [
      row("bloodlust", { covered: true, tier: "improved", sourceSpecIds: ["elemental"] }),
      row("heroism", { covered: true, tier: "improved" }),
      row("arcaneBrilliance"),
    ];
    const memberRows = [
      row("bloodlust", { covered: true, tier: "none", sourceSpecIds: ["elemental"] }),
      row("heroism", { covered: true, tier: "none" }),
    ];

    const items = getRaidBuffDisplayItems(buffs, memberRows, "wotlk");

    expect(items.some((item) => item.key === "heroism")).toBe(false);
    expect(items.find((item) => item.kind === "bloodlustHeroism")).toMatchObject({
      key: "bloodlust-heroism",
      bottomLeft: { label: "Bloodlust" },
      topRight: { label: "Heroism" },
    });
  });

  it("does not merge bloodlust and heroism in classic", () => {
    const buffs = [row("arcaneBrilliance", { covered: true, tier: "improved" })];

    const items = getRaidBuffDisplayItems(buffs, [], "classic");

    expect(items.every((item) => item.kind === "single")).toBe(true);
  });

  it("flags base-tier singles for the upgrade badge", () => {
    const buffs = [row("giftOfTheWild", { covered: true, tier: "base" })];

    const items = getRaidBuffDisplayItems(buffs, [], "tbc");

    expect(items[0]).toMatchObject({
      kind: "single",
      showUpgradeBadge: true,
    });
  });
});
