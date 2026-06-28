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
