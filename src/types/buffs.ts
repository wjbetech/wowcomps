import type { SpecId } from "./classesSpecs";
import type { Expansion } from "./expansions";

export type PartyBuffId =
  | "leaderOfThePack"
  | "moonkinAura"
  | "aspectOfTheWild"
  | "trueshotAura"
  | "furiousHowl"
  | "battleShout"
  | "improvedBattleShout"
  | "devotionAura"
  | "sanctityAura"
  | "ferociousInspiration"
  | "resistanceAuras"
  | "resistanceTotems"
  | "strengthOfEarthTotem"
  | "graceOfAirTotem"
  | "manaSpringtotem"
  | "windfuryTotem"
  | "manaTideTotem"
  | "bloodPact"
  | "commandingShout"
  | "treeOfLife"
  | "vampiricEmbrace"
  | "vampiricTouch"
  | "totemOfWrath"
  | "wrathOfAirTotem";

export type PartyBuffDefinition = {
  id: PartyBuffId;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
  meta?: string[];
  tools?: string;
  description?: string;
  range?: string;
  rightCooldown?: string;
  talent?: boolean;
  extra?: string;
};

export type PartyBuffFamilyId = "paladinAura" | "shamanResistanceTotems";

export type PartyBuffVariant = {
  id: PartyBuffId;
  label: string;
  iconPath: string;
  sourceSpecIds: SpecId[];
};

export type PartyBuffFamily = {
  familyId: PartyBuffFamilyId;
  display: "split-diagonal";
  variants: PartyBuffVariant[];
};

export type PartyBuffEntry =
  | { kind: "single"; definition: PartyBuffDefinition }
  | { kind: "family"; family: PartyBuffFamily };

export type PartyBuffCoverageRow = {
  buffId: PartyBuffId;
  label: string;
  iconPath: string;
  covered: boolean;
  sourceSpecIds: SpecId[];
  meta?: string[];
  description?: string;
  range?: string;
  rightCooldown?: string;
  talent?: boolean;
  extra?: string;
  tools?: string;
};

export type GroupPartyBuffIcons = {
  buffs: PartyBuffCoverageRow[];
};

export type PartyGroupBuffCoverage = {
  groupId: number;
  buffs: PartyBuffCoverageRow[];
};

export type PartyBuffsPanelProps = {
  groups: PartyGroupBuffCoverage[];
};

export type SplitDiagonalBuffIconProps = {
  bottomLeft: { iconPath: string; label: string; active?: boolean };
  topRight: { iconPath: string; label: string; active?: boolean };
  triangleClassName?: string;
};

export type DiagonalBuffVariant = {
  buffs: PartyBuffCoverageRow[];
  expansion: Expansion;
};
