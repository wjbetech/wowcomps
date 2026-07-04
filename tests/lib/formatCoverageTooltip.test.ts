import { describe, expect, it } from "vite-plus/test";
import {
  formatBloodlustHeroismTooltip,
  formatPartyBuffTooltip,
  formatRaidCoverageTooltip,
} from "../../src/lib/formatCoverageTooltip";
import type { CoverageTooltip } from "../../src/types/tooltips";

const baseRow = (overrides: Partial<CoverageTooltip> = {}): CoverageTooltip => ({
  label: "Arcane Brilliance",
  iconPath: "/icons/arcane-brilliance.jpg",
  covered: true,
  tier: "improved",
  sourceSpecIds: [],
  ...overrides,
});

describe("formatRaidCoverageTooltip", () => {
  it("marks missing buffs in footer", () => {
    const result = formatRaidCoverageTooltip(baseRow({ covered: false, tier: "none" }));

    expect(result.title).toBe("Arcane Brilliance");
    expect(result.footerLines?.[0]).toBe("Missing");
    expect(result.footerLines).toHaveLength(1);
  });

  it("marks base tier as covered with upgrade available", () => {
    const result = formatRaidCoverageTooltip(baseRow({ tier: "base" }));

    expect(result.footerLines?.[0]).toBe("Covered (base) — improved available");
  });

  it("marks improved tier as covered", () => {
    const result = formatRaidCoverageTooltip(baseRow({ tier: "improved" }));

    expect(result.footerLines?.[0]).toBe("Covered");
  });

  it("lists providers when source specs are present", () => {
    const result = formatRaidCoverageTooltip(
      baseRow({ sourceSpecIds: ["fire"], meta: ["Instant"], description: "Brilliance." }),
    );

    expect(result.meta).toEqual(["Instant"]);
    expect(result.description).toBe("Brilliance.");
    expect(result.footerLines?.[1]).toBe("Provided by: Fire");
  });
});

describe("formatPartyBuffTooltip", () => {
  it("uses Active in party when no providers are listed", () => {
    const result = formatPartyBuffTooltip({
      label: "Devotion Aura",
      iconPath: "/icons/devotion.jpg",
      sourceSpecIds: [],
    });

    expect(result.footerLines).toEqual(["Active in party"]);
  });

  it("lists providers when source specs are present", () => {
    const result = formatPartyBuffTooltip({
      label: "Moonkin Aura",
      iconPath: "/icons/moonkin.jpg",
      sourceSpecIds: ["balance"],
    });

    expect(result.footerLines).toEqual(["Provided by: Balance"]);
  });
});

describe("formatBloodlustHeroismTooltip", () => {
  it("merges bloodlust and heroism metadata into one tooltip", () => {
    const consolidated = baseRow({
      label: "Bloodlust",
      covered: true,
      tier: "improved",
      sourceSpecIds: ["elemental"],
    });

    const result = formatBloodlustHeroismTooltip(
      consolidated,
      {
        iconPath: "/icons/bloodlust.jpg",
        meta: ["Horde"],
        description: "Bloodlust desc",
      },
      {
        meta: ["Alliance"],
        description: "Heroism desc",
      },
    );

    expect(result.title).toBe("Bloodlust / Heroism");
    expect(result.iconPath).toBe("/icons/bloodlust.jpg");
    expect(result.meta).toEqual(["Horde", "Alliance"]);
    expect(result.description).toBe("Bloodlust desc");
    expect(result.footerLines?.[0]).toBe("Covered");
    expect(result.footerLines?.[1]).toBe("Provided by: Elemental");
  });
});
