import type { Expansion } from "../types/expansions";
import type { RaidBuffDefinition } from "../types/raidBuffs";

export type RaidBuffId = RaidBuffDefinition["id"];

export type BuffTalentPair = {
  baseId: RaidBuffId;
  talentId: RaidBuffId;
};

export const CLASSIC_BUFF_TALENT_PAIRS: BuffTalentPair[] = [
  { baseId: "giftOfTheWild", talentId: "improvedMarkOfTheWild" },
  { baseId: "greaterBlessingOfMight", talentId: "improvedBlessingOfMight" },
  { baseId: "greaterBlessingOfWisdom", talentId: "improvedBlessingOfWisdom" },
  { baseId: "prayerOfFortitude", talentId: "improvedPowerWordFortitude" },
];

export const TBC_BUFF_TALENT_PAIRS: BuffTalentPair[] = [
  { baseId: "giftOfTheWild", talentId: "improvedMarkOfTheWild" },
  { baseId: "greaterBlessingOfMight", talentId: "improvedBlessingOfMight" },
  { baseId: "greaterBlessingOfWisdom", talentId: "improvedBlessingOfWisdom" },
  { baseId: "prayerOfFortitude", talentId: "improvedPowerWordFortitude" },
];

export const WOTLK_BUFF_TALENT_PAIRS: BuffTalentPair[] = [
  { baseId: "greaterBlessingOfMight", talentId: "improvedBlessingOfMight" },
  { baseId: "greaterBlessingOfWisdom", talentId: "improvedBlessingOfWisdom" },
  { baseId: "prayerOfFortitude", talentId: "improvedPowerWordFortitude" },
  { baseId: "battleShout", talentId: "commandingPresence" },
  { baseId: "commandingShout", talentId: "commandingPresence" },
  { baseId: "strengthOfEarthTotem", talentId: "enhancingTotems" },
  { baseId: "windfuryTotem", talentId: "improvedWindfuryTotem" },
];

export function getBuffTalentPairs(expansion: Expansion): BuffTalentPair[] {
  switch (expansion) {
    case "sod":
    case "classicPlus":
    case "classic":
      return CLASSIC_BUFF_TALENT_PAIRS;
    case "tbc":
      return TBC_BUFF_TALENT_PAIRS;
    case "wotlk":
      return WOTLK_BUFF_TALENT_PAIRS;
    default:
      return [];
  }
}
