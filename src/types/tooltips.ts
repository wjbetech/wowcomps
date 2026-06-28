import type { SpecId } from "./classesSpecs";

export type CoverageTooltip = {
  label: string;
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
};

export type CoverageTooltipIcon = {
  tooltip: string;
  children: React.ReactNode;
};

export type CoverageRow = {
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
};

export type CoverageSummaryState = "empty" | "partial" | "complete";
