import type { SpecId } from "./classesSpecs";

export type CoverageTooltip = {
  label: string;
  iconPath: string;
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
};

export type CoverageRow = {
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
};

export type CoverageSummaryState = "empty" | "partial" | "complete";

export type WoWTooltipLine = {
  text: string;
  tone: "gold" | "green" | "white" | "gray";
};

export type WoWTooltipContent = {
  iconPath?: string;
  title: string;
  lines: WoWTooltipLine[];
};

export type WoWTooltip = {
  content: WoWTooltipContent;
  children: React.ReactNode;
};
