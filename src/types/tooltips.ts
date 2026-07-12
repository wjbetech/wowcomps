import type { SpecId } from "./classesSpecs";

export type CoverageTooltip = {
  label: string;
  iconPath: string;
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
  description?: string;
  meta?: string[];
  talent?: boolean;
  range?: string;
  rightCooldown?: string;
  offsetDescription?: string;
};

export type CoverageRow = {
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
};

export type CoverageSummaryState = "empty" | "partial" | "complete";

export type WoWTooltipContent = {
  iconPath?: string;
  title: string;
  talent?: boolean;
  cost?: string;
  cast?: string;
  range?: string;
  rightCooldown?: string;
  offsetDescription?: string;
  requires?: string[];
  meta?: string[];
  description?: string;
  footerLines?: string[];
};

export type WoWTooltip = {
  content: WoWTooltipContent;
  children: React.ReactNode;
};
