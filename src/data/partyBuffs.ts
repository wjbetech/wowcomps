import type { Expansion } from "../types/expansions";
import type { PartyBuffDefinition, PartyBuffId } from "../types/buffs";
import { getRaidBuffDefinitions } from "./raidBuffs";

const classicPartyBuffs: PartyBuffDefinition[] = [
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_unyeildingstamina.jpg",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "moonkinAura",
    label: "Moonkin Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_moonglow.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "aspectOfTheWild",
    label: "Aspect of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg",
    sourceSpecIds: ["beastMastery", "marksmanship", "survival"],
  },
  {
    id: "trueshot",
    label: "Trueshot Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_trueshot.jpg",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "ferociousInspiration",
    label: "Ferocious Inspiration",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_ferociousinspiration.jpg",
    sourceSpecIds: ["beastMastery"],
  },
  {
    id: "devotionAura",
    label: "Devotion Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_devotionaura.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctityAura",
    label: "Sanctity Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_mindvision.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "resistanceAuras",
    label: "Resistance Auras",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_fire_sealoffire.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "resistanceTotems",
    label: "Resistance Totems",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_natureresistancetotem.jpg",
    sourceSpecIds: ["elemental", "restorationShaman", "enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_earthbindtotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "graceOfAirTotem",
    label: "Grace of Air Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_invisibilitytotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "manaSpringtotem",
    label: "Mana Spring Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_manaregentotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman", "elemental"],
  },
  {
    id: "windfuryTotem",
    label: "Windfury Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_windfury.jpg",
    sourceSpecIds: ["enhancement", "elemental"],
  },
  {
    id: "manaTideTotem",
    label: "Mana Tide Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_frost_summonwaterelemental.jpg",
    sourceSpecIds: ["restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_bloodboil.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_battleshout.jpg",
    sourceSpecIds: ["arms", "fury"],
  },
];

const tbcPartyBuffs: PartyBuffDefinition[] = [
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_unyeildingstamina.jpg",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "moonkinAura",
    label: "Moonkin Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_moonglow.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "treeOfLife",
    label: "Tree of Life",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_druid_treeoflife.jpg",
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "aspectOfTheWild",
    label: "Aspect of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/large/spell_nature_protectionformnature.jpg",
    sourceSpecIds: ["beastMastery", "marksmanship", "survival"],
  },
  {
    id: "trueshot",
    label: "Trueshot Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_trueshot.jpg",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "ferociousInspiration",
    label: "Ferocious Inspiration",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_ferociousinspiration.jpg",
    sourceSpecIds: ["beastMastery"],
  },
  {
    id: "devotionAura",
    label: "Devotion Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_devotionaura.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctityAura",
    label: "Sanctity Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_mindvision.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "resistanceAuras",
    label: "Resistance Auras",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_fire_sealoffire.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "vampiricEmbrace",
    label: "Vampiric Embrace",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_unsummonbuilding.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "vampiricTouch",
    label: "Vampiric Touch",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_stoicism.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "totemOfWrath",
    label: "Totem of Wrath",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_fire_totemofwrath.jpg",
    sourceSpecIds: ["elemental"],
  },
  {
    id: "wrathOfAirTotem",
    label: "Wrath of Air Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_slowingtotem.jpg",
    sourceSpecIds: ["elemental", "restorationShaman"],
  },
  {
    id: "resistanceTotems",
    label: "Resistance Totems",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_natureresistancetotem.jpg",
    sourceSpecIds: ["elemental", "restorationShaman", "enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_earthbindtotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "graceOfAirTotem",
    label: "Grace of Air Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_invisibilitytotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "manaSpringtotem",
    label: "Mana Spring Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_manaregentotem.jpg",
    sourceSpecIds: ["enhancement", "restorationShaman", "elemental"],
  },
  {
    id: "windfuryTotem",
    label: "Windfury Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_windfury.jpg",
    sourceSpecIds: ["enhancement", "elemental"],
  },
  {
    id: "manaTideTotem",
    label: "Mana Tide Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_frost_summonwaterelemental.jpg",
    sourceSpecIds: ["restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_bloodboil.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_battleshout.jpg",
    sourceSpecIds: ["arms", "fury"],
  },
  {
    id: "improvedBattleShout",
    label: "Improved Battle Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_battleshout.jpg",
    sourceSpecIds: ["arms", "fury"],
  },
  {
    id: "commandingShout",
    label: "Commanding Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_rallyingcry.jpg",
    sourceSpecIds: ["protectionWarrior"],
  },
];

const wotlkPartyBuffs: PartyBuffDefinition[] = [
  // no party buffs in wotlk
];

const partyBuffsByExpansion: Record<Expansion, PartyBuffDefinition[]> = {
  classic: classicPartyBuffs,
  sod: classicPartyBuffs,
  wotlk: wotlkPartyBuffs,
  tbc: tbcPartyBuffs,
  classicPlus: classicPartyBuffs,
};

export function getPartyBuffDefinitions(expansion: Expansion): PartyBuffDefinition[] {
  return partyBuffsByExpansion[expansion] ?? [];
}

export function getPartyBuffById(
  expansion: Expansion,
  buffId: PartyBuffId,
): PartyBuffDefinition | undefined {
  return getPartyBuffDefinitions(expansion).find((buff) => buff.id === buffId);
}

export function getPaladinAuraFamily(expansion: Expansion) {
  const devotionAura = getPartyBuffById(expansion, "devotionAura");
  const resistanceAuras = getPartyBuffById(expansion, "resistanceAuras");

  if (!devotionAura || !resistanceAuras) return undefined;

  return {
    devotionAura,
    resistanceAuras,
  };
}

export function getShamanBloodlustFamily(expansion: Expansion) {
  if (expansion === "classic" || expansion === "sod") return null;
  const defs = getRaidBuffDefinitions(expansion);
  const bloodlust = defs.find((buff) => buff.id === "bloodlust");
  const heroism = defs.find((buff) => buff.id === "heroism");

  return bloodlust && heroism ? { bloodlust, heroism } : null;
}
