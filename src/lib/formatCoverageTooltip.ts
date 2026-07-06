import type { CoverageTooltip, WoWTooltipContent } from "../types/tooltips";

import getSpecLabels from "../utils/getSpecLabels";

// Raid buff/debuff — already has tier
export function formatRaidCoverageTooltip(row: CoverageTooltip): WoWTooltipContent {
  const status = !row.covered
    ? "Missing"
    : row.tier === "base"
      ? "Covered (base) — improved available"
      : "Covered";
  const providers = getSpecLabels(row.sourceSpecIds);
  return {
    iconPath: row.iconPath,
    title: row.label,
    meta: row.meta,
    description: row.description,
    footerLines: [
      status,
      ...(providers.length > 0 ? [`Provided by: ${providers.join(", ")}`] : []),
    ],
  };
}

// Party buffs — no tier, always covered when shown
export function formatPartyBuffTooltip(
  row: Pick<CoverageTooltip, "label" | "sourceSpecIds" | "iconPath" | "meta" | "description">,
): WoWTooltipContent {
  const providers = getSpecLabels(row.sourceSpecIds);
  return {
    iconPath: row.iconPath,
    title: row.label,
    meta: row.meta,
    description: row.description,
    footerLines: providers.length ? [`Provided by: ${providers.join(", ")}`] : ["Active in party"],
  };
}

export function formatBloodlustHeroismTooltip(
  consolidated: CoverageTooltip,
  bloodlust?: Pick<CoverageTooltip, "iconPath" | "meta" | "description">,
  heroism?: Pick<CoverageTooltip, "meta" | "description">,
): WoWTooltipContent {
  return {
    iconPath: bloodlust?.iconPath,
    title: "Bloodlust / Heroism",
    meta: [...new Set([...(bloodlust?.meta ?? []), ...(heroism?.meta ?? [])])],
    description: bloodlust?.description ?? heroism?.description,
    footerLines: formatRaidCoverageTooltip(consolidated).footerLines,
  };
}

export function formatBaseAndTalentTooltip(
  consolidated: CoverageTooltip,
  base: Pick<CoverageTooltip, "label" | "iconPath" | "meta" | "description">,
  talent?: Pick<CoverageTooltip, "label" | "meta" | "description">,
): WoWTooltipContent {
  return {
    iconPath: base.iconPath,
    title: talent ? `${base.label} / ${talent.label}` : base.label,
    meta: [...new Set([...(base.meta ?? []), ...(talent?.meta ?? [])])],
    description: [base.description, talent?.description].filter(Boolean).join("\n\n"),
    footerLines: formatRaidCoverageTooltip(consolidated).footerLines,
  };
}
