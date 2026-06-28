import type { CoverageRow, CoverageSummaryState } from "../types/tooltips";

export function getCoverageSummary(rows: CoverageRow[]): {
  state: CoverageSummaryState;
  covered: number;
  total: number;
} {
  const total = rows.length;
  const covered = rows.filter((r) => r.covered).length;
  const hasBaseTier = rows.some((r) => r.tier === "base");

  let state: CoverageSummaryState = "partial";
  if (covered === 0) state = "empty";
  else if (covered === total && !hasBaseTier) state = "complete";

  return { state, covered, total };
}
