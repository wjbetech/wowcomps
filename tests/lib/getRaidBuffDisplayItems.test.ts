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

  it("flags base-tier singles for the upgrade badge", () => {
    const buffs = [row("giftOfTheWild", { covered: true, tier: "base" })];

    const items = getRaidBuffDisplayItems(buffs, [], "tbc");

    expect(items[0]).toMatchObject({
      kind: "single",
      showUpgradeBadge: true,
    });
  });

  it("shows base title until commanding presence is covered in WotLK", () => {
    const buffs = [
      row("commandingShout", { covered: true, tier: "base", label: "Commanding Presence" }),
    ];
    const memberBuffs = [
      row("commandingShout", { covered: true, label: "Commanding Shout", description: "base" }),
      row("commandingPresence", {
        covered: false,
        label: "Commanding Presence",
        description: "talent",
      }),
    ];

    expect(getRaidBuffDisplayItems(buffs, memberBuffs, "wotlk")[0]?.tooltip.title).toBe(
      "Commanding Shout",
    );
    expect(getRaidBuffDisplayItems(buffs, memberBuffs, "wotlk")[0]?.tooltip.talentLabel).toBe(
      undefined,
    );

    memberBuffs[1] = { ...memberBuffs[1], covered: true };

    const withTalent = getRaidBuffDisplayItems(buffs, memberBuffs, "wotlk")[0]?.tooltip;
    expect(withTalent?.title).toBe("Commanding Shout");
    expect(withTalent?.talentLabel).toBe("Commanding Presence");
  });

  it("does not merge bloodlust and heroism in classic", () => {
    const buffs = [row("arcaneBrilliance", { covered: true, tier: "improved" })];

    const items = getRaidBuffDisplayItems(buffs, [], "classic");

    expect(items.every((item) => item.kind === "single")).toBe(true);
  });

  it("keeps classic might icon when consolidator displays the improved row", () => {
    const buffs = [
      row("improvedBlessingOfMight", {
        covered: true,
        tier: "improved",
        label: "Improved Blessing of Might",
      }),
    ];
    const memberRows = [
      row("greaterBlessingOfMight", {
        covered: true,
        label: "Greater Blessing of Might",
        description: "Base.",
      }),
      row("improvedBlessingOfMight", {
        covered: true,
        label: "Improved Blessing of Might",
        description: "Talent.",
      }),
    ];

    const items = getRaidBuffDisplayItems(buffs, memberRows, "classic");

    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      kind: "single",
      key: "greaterBlessingOfMight",
    });
    expect(items[0]?.tooltip.title).toBe("Greater Blessing of Might");
    expect(items[0]?.tooltip.talentLabel).toBe("Improved Blessing of Might");
  });
});
