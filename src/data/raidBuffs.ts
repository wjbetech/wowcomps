import type { Expansion } from "../types/expansions";
import type { RaidBuffDefinition } from "../types/raidBuffs";

const ZAMIMG_ICON = (icon: string) => `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;

export const classicRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_giftofthewild"),
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "improvedMarkOfTheWild",
    label: "Improved Gift of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_regeneration"),
    sourceSpecIds: ["balance", "restorationDruid"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: ZAMIMG_ICON("spell_holy_arcaneintellect"),
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: ZAMIMG_ICON("spell_magic_greaterblessingofkings"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "greaterBlessingOfLight",
    label: "Greater Blessing of Light",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingoflight"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfMight",
    label: "Improved Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfWisdom",
    label: "Greater Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofwisdom"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfWisdom",
    label: "Improved Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_mindsooth"),
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfSalvation",
    label: "Greater Blessing of Salvation",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofsalvation"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofsanctuary"),
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "prayerOfSpirit",
    label: "Prayer of Spirit",
    iconPath: ZAMIMG_ICON("spell_holy_prayerofspirit"),
    sourceSpecIds: ["discipline"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: ZAMIMG_ICON("spell_holy_prayeroffortitude"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "improvedPrayerOfFortitude",
    label: "Improved Power Word: Fortitude",
    iconPath: ZAMIMG_ICON("spell_holy_wordfortitude"),
    sourceSpecIds: ["discipline", "holyPriest"],
  },
  {
    id: "prayerOfShadowProtection",
    label: "Prayer of Shadow Protection",
    iconPath: ZAMIMG_ICON("spell_holy_prayerofshadowprotection"),
    sourceSpecIds: ["shadow"],
  },
];

export const tbcRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_giftofthewild"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedMarkOfTheWild",
    label: "Improved Mark of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_regeneration"),
    sourceSpecIds: ["balance", "restorationDruid"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: ZAMIMG_ICON("spell_holy_arcaneintellect"),
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: ZAMIMG_ICON("spell_magic_greaterblessingofkings"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfLight",
    label: "Greater Blessing of Light",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingoflight"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfMight",
    label: "Improved Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfWisdom",
    label: "Greater Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofwisdom"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfWisdom",
    label: "Improved Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_mindsooth"),
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfSalvation",
    label: "Greater Blessing of Salvation",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofsalvation"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofsanctuary"),
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "divineSpirit",
    label: "Divine Spirit",
    iconPath: ZAMIMG_ICON("spell_holy_divinespirit"),
    sourceSpecIds: ["discipline"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: ZAMIMG_ICON("spell_holy_prayeroffortitude"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "improvedPrayerOfFortitude",
    label: "Improved Power Word: Fortitude",
    iconPath: ZAMIMG_ICON("spell_holy_wordfortitude"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "prayerOfShadowProtection",
    label: "Prayer of Shadow Protection",
    iconPath: ZAMIMG_ICON("spell_holy_prayerofshadowprotection"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
];

const wotlkRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "abominationsMight",
    label: "Abominations Might",
    iconPath: ZAMIMG_ICON("ability_warrior_intensifyrage"),
    sourceSpecIds: ["blood"],
  },
  {
    id: "hornOfWinter",
    label: "Horn of Winter",
    iconPath: ZAMIMG_ICON("inv_misc_horn_02"),
    sourceSpecIds: ["blood", "frostDeathknight", "unholy"],
  },
  {
    id: "improvedIcyTalons",
    label: "Improved Icy Talons",
    iconPath: ZAMIMG_ICON("spell_deathknight_icytalons"),
    sourceSpecIds: ["frostDeathknight"],
  },
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: ZAMIMG_ICON("spell_nature_giftofthewild"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedMoonkinForm",
    label: "Improved Moonkin Form",
    iconPath: ZAMIMG_ICON("ability_druid_improvedmoonkinform"),
    sourceSpecIds: ["balance"],
  },
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: ZAMIMG_ICON("spell_nature_unyeildingstamina"),
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "treeOfLife",
    label: "Tree of Life",
    iconPath: ZAMIMG_ICON("ability_druid_treeoflife"),
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "ferociousInspiration",
    label: "Ferocious Inspiration",
    iconPath: ZAMIMG_ICON("ability_hunter_ferociousinspiration"),
    sourceSpecIds: ["beastMastery"],
  },
  {
    id: "trueshotAura",
    label: "Trueshot Aura",
    iconPath: ZAMIMG_ICON("ability_trueshot"),
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: ZAMIMG_ICON("spell_holy_arcaneintellect"),
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "arcaneEmpowerment",
    label: "Arcane Empowerment",
    iconPath: ZAMIMG_ICON("spell_nature_starfall"),
    sourceSpecIds: ["arcane"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: ZAMIMG_ICON("spell_magic_greaterblessingofkings"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedBlessingOfMight",
    label: "Improved Blessing of Might",
    iconPath: ZAMIMG_ICON("spell_holy_fistofjustice"),
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofsanctuary"),
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "greaterBlessingOfWisdom",
    label: "Greater Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_greaterblessingofwisdom"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedBlessingOfWisdom",
    label: "Improved Blessing of Wisdom",
    iconPath: ZAMIMG_ICON("spell_holy_mindsooth"),
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "judgementsOfTheWise",
    label: "Judgements of the Wise",
    iconPath: ZAMIMG_ICON("ability_paladin_judgementofthewise"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "improvedDevotionAura",
    label: "Improved Devotion Aura",
    iconPath: ZAMIMG_ICON("spell_holy_devotionaura"),
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctifiedRetribution",
    label: "Sanctified Retribution",
    iconPath: ZAMIMG_ICON("spell_holy_divinepurpose"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "swiftRetribution",
    label: "Swift Retribution",
    iconPath: ZAMIMG_ICON("ability_paladin_sanctifiedwrath"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: ZAMIMG_ICON("spell_holy_prayeroffortitude"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "prayerOfSpirit",
    label: "Prayer of Spirit",
    iconPath: ZAMIMG_ICON("spell_holy_prayerofspirit"),
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "bloodlust",
    label: "Bloodlust",
    iconPath: ZAMIMG_ICON("spell_nature_bloodlust"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "elementalOath",
    label: "Elemental Oath",
    iconPath: ZAMIMG_ICON("spell_shaman_elementaloath"),
    sourceSpecIds: ["elemental"],
  },
  {
    id: "flametongueTotem",
    label: "Flametongue Totem",
    iconPath: ZAMIMG_ICON("spell_fire_searingtotem"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "improvedWindfuryTotem",
    label: "Improved Windfury Totem",
    iconPath: ZAMIMG_ICON("spell_nature_windfury"),
    sourceSpecIds: ["enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: ZAMIMG_ICON("spell_nature_earthbindtotem"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "totemOfWrath",
    label: "Totem of Wrath",
    iconPath: ZAMIMG_ICON("spell_fire_totemofwrath"),
    sourceSpecIds: ["elemental"],
  },
  {
    id: "unleashedRage",
    label: "Unleashed Rage",
    iconPath: ZAMIMG_ICON("spell_nature_unleashedrage"),
    sourceSpecIds: ["enhancement"],
  },
  {
    id: "wrathOfAirTotem",
    label: "Wrath of Air Totem",
    iconPath: ZAMIMG_ICON("spell_nature_slowingtotem"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: ZAMIMG_ICON("spell_shadow_bloodboil"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "demonicPact",
    label: "Demonic Pact",
    iconPath: ZAMIMG_ICON("spell_shadow_demonicpact"),
    sourceSpecIds: ["demonology"],
  },
  {
    id: "felIntelligence",
    label: "Fel Intelligence",
    iconPath: ZAMIMG_ICON("spell_shadow_brainwash"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_battleshout"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "commandingShout",
    label: "Commanding Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_rallyingcry"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "rampage",
    label: "Rampage",
    iconPath: ZAMIMG_ICON("ability_warrior_rampage"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "huntingParty",
    label: "Hunting Party",
    iconPath: ZAMIMG_ICON("ability_hunter_huntingparty"),
    sourceSpecIds: ["survival"],
  },
  {
    id: "revitalize",
    label: "Revitalize",
    iconPath: ZAMIMG_ICON("ability_druid_replenish"),
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "replenishment",
    label: "Replenishment",
    iconPath: ZAMIMG_ICON("spell_magic_managain"),
    sourceSpecIds: [],
  },
  {
    id: "enduringWinter",
    label: "Enduring Winter",
    iconPath: ZAMIMG_ICON("ability_mage_wintersgrasp"),
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "improvedSoulLeech",
    label: "Improved Soul Leech",
    iconPath: ZAMIMG_ICON("spell_shadow_soulleech_3"),
    sourceSpecIds: ["destruction"],
  },
];

const raidBuffsByExpansion: Record<Expansion, RaidBuffDefinition[]> = {
  classic: classicRaidBuffs,
  tbc: tbcRaidBuffs,
  wotlk: wotlkRaidBuffs,
  sod: classicRaidBuffs,
  classicPlus: classicRaidBuffs,
};

export function getRaidBuffDefinitions(expansion: Expansion): RaidBuffDefinition[] {
  return raidBuffsByExpansion[expansion] ?? [];
}
