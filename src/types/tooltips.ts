import type { SpecId } from "./classesSpecs";

export type CoverageTooltip = {
  label: string;
  talentLabel?: string;
  iconPath: string;
  covered: boolean;
  tier: "none" | "base" | "improved";
  sourceSpecIds: SpecId[];
  description?: string;
  meta?: string[];
  talent?: boolean;
  tools?: string;
  extra?: string;
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

export type WoWTooltip = {
  content: WoWTooltipContent;
  children: React.ReactNode;
};

export type WoWTooltipContent = {
  iconPath?: string;
  title: string;
  talent?: boolean;
  talentLabel?: string;
  cost?: string;
  cast?: string;
  range?: string;
  rightCooldown?: string;
  offsetDescription?: string;
  tools?: string;
  requires?: string[];
  meta?: string[];
  description?: string;
  talentDescription?: string;
  footerLines?: string[];
  sections?: WoWTooltipSection[];
  splitIcon?: {
    topLeft: {
      iconPath: string;
      label: string;
      active?: boolean;
    };
    bottomRight: {
      iconPath: string;
      label: string;
      active?: boolean;
    };
  };
  hideTitle?: boolean;
};

export type WoWTooltipSection = {
  title: string;
  talent?: boolean;
  cost?: string;
  cast?: string;
  range?: string;
  rightCooldown?: string;
  requires?: string[];
  tools?: string;
  description?: string;
  footerLines?: string[];
};
