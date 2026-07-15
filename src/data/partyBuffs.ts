import type { Expansion } from "../types/expansions";
import type { PartyBuffDefinition, PartyBuffId } from "../types/buffs";
import { getRaidBuffDefinitions } from "./raidBuffs";

const ZAMIMG_ICON = (icon: string) => `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;

const classicPartyBuffs: PartyBuffDefinition[] = [
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: ZAMIMG_ICON("spell_nature_unyeildingstamina"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 3%.",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "moonkinAura",
    label: "Moonkin Aura",
    iconPath: ZAMIMG_ICON("spell_nature_moonglow"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell critical chance increased by 3%. The Moonkin can only cast Balance spells while shapeshifted. \n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
    sourceSpecIds: ["balance"],
  },
  {
    id: "aspectOfTheWild",
    label: "Aspect of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_protectionformnature"),
    meta: ["115 Mana", "Instant", "Requires Hunter", "Requires level 56"],
    description:
      "The hunter and group members within 30 yards take on the aspect of the wild, increasing Nature resistance by 60.  Only one Aspect can be active at a time.",
    sourceSpecIds: ["beastMastery", "marksmanship", "survival"],
  },
  {
    id: "trueshotAura",
    label: "Trueshot Aura",
    iconPath: ZAMIMG_ICON("ability_trueshot"),
    talent: true,
    meta: ["525 Mana", "Instant", "Requires Hunter", "Requires level 60"],
    description: "Increases the attack power of party members within 45 yards by 100.",
    extra: "Lasts 30 min.",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "devotionAura",
    label: "Devotion Aura",
    iconPath: ZAMIMG_ICON("spell_holy_devotionaura"),
    meta: ["Instant", "Requires Paladin", "Requires level 60"],
    description:
      "Gives 735 additional armor to party members within 30 yards.  Players may only have one Aura on them per Paladin at any one time.",
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctityAura",
    label: "Sanctity Aura",
    iconPath: ZAMIMG_ICON("spell_holy_mindvision"),
    talent: true,
    meta: ["Instant", "Requires Paladin"],
    description:
      "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "resistanceAuras",
    label: "Resistance Auras",
    iconPath: ZAMIMG_ICON("spell_fire_sealoffire"),
    meta: ["Instant", "Requires Paladin", "Requires level 60"],
    description:
      "Gives 60 additional Fire resistance to all party members within 30 yards.  Players may only have one Aura on them per Paladin at any one time.",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "resistanceTotems",
    label: "Resistance Totems",
    iconPath: ZAMIMG_ICON("spell_nature_natureresistancetotem"),
    meta: ["245 Mana", "Instant", "Requires Shaman", "Requires level 60"],
    tools: "Air Totem",
    description:
      "Summons a Nature Resistance Totem with 5 health at the feet of the caster for 2 min that increases the nature resistance of party members within 20 yards by 60.",
    sourceSpecIds: ["elemental", "restorationShaman", "enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: ZAMIMG_ICON("spell_nature_earthbindtotem"),
    meta: ["275 Mana", "Instant", "Requires Shaman", "Requires level 60"],
    tools: "Earth Totem",
    description:
      "Summons a Strength of Earth Totem with 5 health at the feet of the caster.  The totem increases the strength of party members within 20 yards by 77.",
    extra: "Lasts 2 min.",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "graceOfAirTotem",
    label: "Grace of Air Totem",
    iconPath: ZAMIMG_ICON("spell_nature_invisibilitytotem"),
    meta: ["310 Mana", "Instant", "Requires Shaman", "Requires level 60"],
    tools: "Air Totem",
    description:
      "Summons a Grace of Air Totem with 5 health at the feet of the caster.  The totem increases the stealth detection radius of party members within 20 yards by 8.",
    extra: "Lasts 2 min.",
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "manaSpringtotem",
    label: "Mana Spring Totem",
    iconPath: ZAMIMG_ICON("spell_nature_manaregentotem"),
    meta: ["100 Mana", "Instant", "Requires Shaman", "Requires level 56"],
    tools: "Water Totem",
    description:
      "Summons a Mana Spring Totem with 5 health at the feet of the caster for 1 min that restores 10 mana every 2 seconds to group members within 20 yards.",
    sourceSpecIds: ["enhancement", "restorationShaman", "elemental"],
  },
  {
    id: "windfuryTotem",
    label: "Windfury Totem",
    iconPath: ZAMIMG_ICON("spell_nature_windfury"),
    meta: ["250 Mana", "Instant", "Requires Shaman", "Requires level 52"],
    tools: "Air Totem",
    description:
      "Summons a Windfury Totem with 5 health at the feet of the caster.  The totem enchants all party members main-hand weapons with wind, if they are within 20 yards.  Each hit has a 20% chance of granting the attacker 1 extra attack with 315 extra melee attack power.  Lasts 2 min.",
    sourceSpecIds: ["enhancement", "elemental"],
  },
  {
    id: "manaTideTotem",
    label: "Mana Tide Totem",
    iconPath: ZAMIMG_ICON("spell_frost_summonwaterelemental"),
    talent: true,
    meta: ["60 Mana", "Instant", "Requires Shaman", "Requires level 58"],
    tools: "Water Totem",
    rightCooldown: "5 min cooldown",
    description:
      "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 290 mana every 3 seconds to group members within 20 yards.",
    sourceSpecIds: ["restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: ZAMIMG_ICON("spell_shadow_bloodboil"),
    meta: ["20 yd range", "Instant", "Requires Warlock", "Requires level 50"],
    description: "Increases party members' Stamina by 42.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_battleshout"),
    meta: ["10 Rage", "Instant cast", "Requires Warrior", "Requires level 60"],
    description:
      "The warrior shouts, increasing the melee attack power of all party members within 20 yards by 232.  Lasts 2 min.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
];

const tbcPartyBuffs: PartyBuffDefinition[] = [
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: ZAMIMG_ICON("spell_nature_unyeildingstamina"),
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "moonkinAura",
    label: "Moonkin Aura",
    iconPath: ZAMIMG_ICON("spell_nature_moonglow"),
    sourceSpecIds: ["balance"],
  },
  {
    id: "treeOfLife",
    label: "Tree of Life",
    iconPath: ZAMIMG_ICON("ability_druid_treeoflife"),
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "aspectOfTheWild",
    label: "Aspect of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_protectionformnature"),
    sourceSpecIds: ["beastMastery", "marksmanship", "survival"],
  },
  {
    id: "trueshotAura",
    label: "Trueshot Aura",
    iconPath: ZAMIMG_ICON("ability_trueshot"),
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "ferociousInspiration",
    label: "Ferocious Inspiration",
    iconPath: ZAMIMG_ICON("ability_hunter_ferociousinspiration"),
    sourceSpecIds: ["beastMastery"],
  },
  {
    id: "devotionAura",
    label: "Devotion Aura",
    iconPath: ZAMIMG_ICON("spell_holy_devotionaura"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctityAura",
    label: "Sanctity Aura",
    iconPath: ZAMIMG_ICON("spell_holy_mindvision"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "resistanceAuras",
    label: "Resistance Auras",
    iconPath: ZAMIMG_ICON("spell_fire_sealoffire"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "vampiricEmbrace",
    label: "Vampiric Embrace",
    iconPath: ZAMIMG_ICON("spell_shadow_unsummonbuilding"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "vampiricTouch",
    label: "Vampiric Touch",
    iconPath: ZAMIMG_ICON("spell_holy_stoicism"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "totemOfWrath",
    label: "Totem of Wrath",
    iconPath: ZAMIMG_ICON("spell_fire_totemofwrath"),
    sourceSpecIds: ["elemental"],
  },
  {
    id: "wrathOfAirTotem",
    label: "Wrath of Air Totem",
    iconPath: ZAMIMG_ICON("spell_nature_slowingtotem"),
    sourceSpecIds: ["elemental", "restorationShaman"],
  },
  {
    id: "resistanceTotems",
    label: "Resistance Totems",
    iconPath: ZAMIMG_ICON("spell_nature_natureresistancetotem"),
    sourceSpecIds: ["elemental", "restorationShaman", "enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: ZAMIMG_ICON("spell_nature_earthbindtotem"),
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "graceOfAirTotem",
    label: "Grace of Air Totem",
    iconPath: ZAMIMG_ICON("spell_nature_invisibilitytotem"),
    sourceSpecIds: ["enhancement", "restorationShaman"],
  },
  {
    id: "manaSpringtotem",
    label: "Mana Spring Totem",
    iconPath: ZAMIMG_ICON("spell_nature_manaregentotem"),
    sourceSpecIds: ["enhancement", "restorationShaman", "elemental"],
  },
  {
    id: "windfuryTotem",
    label: "Windfury Totem",
    iconPath: ZAMIMG_ICON("spell_nature_windfury"),
    sourceSpecIds: ["enhancement", "elemental"],
  },
  {
    id: "manaTideTotem",
    label: "Mana Tide Totem",
    iconPath: ZAMIMG_ICON("spell_frost_summonwaterelemental"),
    sourceSpecIds: ["restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: ZAMIMG_ICON("spell_shadow_bloodboil"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_battleshout"),
    sourceSpecIds: ["arms", "fury"],
  },
  {
    id: "improvedBattleShout",
    label: "Improved Battle Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_battleshout"),
    sourceSpecIds: ["arms", "fury"],
  },
  {
    id: "commandingShout",
    label: "Commanding Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_rallyingcry"),
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
