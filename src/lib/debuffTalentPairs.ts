import type { Expansion } from "../types/expansions";
import type { RaidDebuffDefinition } from "../types/raidDebuffs";

export type RaidDebuffId = RaidDebuffDefinition["id"];

export type DebuffTalentPair = {
  baseId: RaidDebuffId;
  talentId: RaidDebuffId;
};

export const CLASSIC_DEBUFF_TALENT_PAIRS: DebuffTalentPair[] = [
  { baseId: "demoralizingShout", talentId: "improvedDemoralizingShout" },
  { baseId: "demoralizingRoar", talentId: "feralAggression" },
  { baseId: "exposeArmor", talentId: "improvedExposeArmor" },
];

export const TBC_DEBUFF_TALENT_PAIRS: DebuffTalentPair[] = [
  { baseId: "demoralizingShout", talentId: "improvedDemoralizingShout" },
  { baseId: "demoralizingRoar", talentId: "feralAggression" },
  { baseId: "faerieFire", talentId: "improvedFaerieFire" },
  { baseId: "exposeArmor", talentId: "improvedExposeArmor" },
  { baseId: "huntersMark", talentId: "improvedHuntersMark" },
];

export const WOTLK_DEBUFF_TALENT_PAIRS: DebuffTalentPair[] = [
  { baseId: "faerieFire", talentId: "improvedFaerieFire" },
];

export function getDebuffTalentPairs(expansion: Expansion): DebuffTalentPair[] {
  switch (expansion) {
    case "sod":
    case "classicPlus":
    case "classic":
      return CLASSIC_DEBUFF_TALENT_PAIRS;
    case "tbc":
      return TBC_DEBUFF_TALENT_PAIRS;
    case "wotlk":
      return WOTLK_DEBUFF_TALENT_PAIRS;
    default:
      return [];
  }
}
