import type { SpecId } from "./classesSpecs";
import type { Expansion } from "./expansions";
import type { WoWTooltipContent } from "./tooltips";

export type ClassicRaidDebuffId =
  | "demoralizingRoar"
  | "faerieFire"
  | "exposeArmor"
  | "improvedScorch"
  | "wintersChill"
  | "shadowWeaving"
  | "curseOfRecklessness"
  | "curseOfShadow"
  | "huntersMark"
  | "sunderArmor"
  | "demoralizingShout"
  | "improvedDemoralizingShout";

export type TbcRaidDebuffId =
  | "demoralizingRoar"
  | "faerieFire"
  | "improvedFaerieFire"
  | "insectSwarm"
  | "mangle(Bear)"
  | "mangle(Cat)"
  | "feralAggression"
  | "exposeWeakness"
  | "exposeArmor"
  | "improvedScorch"
  | "improvedSealOfTheCrusader"
  | "improvedHuntersMark"
  | "misery"
  | "shadowWeaving"
  | "improvedExposeArmor"
  | "curseOfRecklessness"
  | "curseOfTheElements"
  | "improvedShadowBolt"
  | "malediction"
  | "shadowEmbrace"
  | "bloodFrenzy"
  | "improvedDemoralizingShout"
  | "bloodlust"
  | "heroism";

export type WotlkRaidDebuffId =
  | "ebonPlaguebringer"
  | "improvedIcyTouch"
  | "demoralizingRoar"
  | "earthAndMoon"
  | "faerieFire"
  | "improvedFaerieFire"
  | "insectSwarm"
  | "mangleBear"
  | "mangleCat"
  | "improvedScorch"
  | "heartOfTheCrusader"
  | "judgementsOfTheJust"
  | "vindication"
  | "misery"
  | "exposeArmor"
  | "masterPoisoner"
  | "savageCombat"
  | "curseOfTheElements"
  | "curseOfWeakness"
  | "improvedShadowBolt"
  | "bloodFrenzy"
  | "demoralizingShout"
  | "improvedThunderClap"
  | "sunderArmor"
  | "trauma";

export type RaidDebuffDefinition = {
  id: ClassicRaidDebuffId | TbcRaidDebuffId | WotlkRaidDebuffId;
  label: string;
  iconPath: string;
  meta?: string[];
  talent?: boolean;
  range?: string;
  rightCooldown?: string;
  description?: string;
  offsetDescription?: string;
  sourceSpecIds: SpecId[];
  extra?: string;
};

export type RaidDebuffCoverageTier = "none" | "base" | "improved";

export type RaidDebuffCoverageRow = RaidDebuffDefinition & {
  covered: boolean;
  tier: RaidDebuffCoverageTier;
};

export type RaidDebuffPanel = {
  raidDebuffs: RaidDebuffCoverageRow[];
  memberRows: RaidDebuffCoverageRow[];
  selectedExpansion: Expansion;
};

export type RaidDebuffDisplayItem = {
  key: string;
  row: RaidDebuffCoverageRow;
  tooltip: WoWTooltipContent;
  showUpgradeBadge: boolean;
};
