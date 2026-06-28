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
    title: row.label,
    lines: providers.length
      ? [
          { text: status, tone: "white" },
          { text: `Provided by: ${providers.join(", ")}`, tone: "green" },
        ]
      : [{ text: status, tone: "green" }],
    iconPath: row.iconPath,
  };
}
// Party buffs — no tier, always covered when shown
export function formatPartyBuffTooltip(
  row: Pick<CoverageTooltip, "label" | "sourceSpecIds" | "iconPath">,
): WoWTooltipContent {
  const providers = getSpecLabels(row.sourceSpecIds);
  return {
    title: row.label,
    lines: providers.length
      ? [{ text: `Provided by: ${providers.join(", ")}`, tone: "white" }]
      : [{ text: "Active in party", tone: "green" }],
    iconPath: row.iconPath,
  };
}
