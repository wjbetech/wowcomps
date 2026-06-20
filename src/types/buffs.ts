import type { SpecId } from "./classesSpecs";
import type { Expansion } from "./expansions";

export type PartyBuffId =
  | "leaderOfThePack"
  | "moonkinAura"
  | "aspectOfTheWild"
  | "trueshot"
  | "ferociousInspiration"
  | "furiousHowl"
  | "battleShout"
  | "improvedBattleShout"
  | "devotionAura"
  | "sanctityAura"
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
};

export type DiagonalBuffVariant = {
  buffs: PartyBuffCoverageRow[];
  expansion: Expansion;
};
