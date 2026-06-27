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
