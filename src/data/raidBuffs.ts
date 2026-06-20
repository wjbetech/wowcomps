import type { Expansion } from "../types/expansions";
import type { RaidBuffDefinition } from "../types/raidBuffs";

export const classicRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_giftofwild.jpg",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "improvedMarkOfTheWild",
    label: "Improved Gift of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_giftofwild.jpg",
    sourceSpecIds: ["balance", "restorationDruid"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_arcane_arcanemastery.jpg",
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofkings.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "greaterBlessingOfLight",
    label: "Greater Blessing of Light",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingoflight.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofmight.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfMight",
    label: "Improved Blessing of Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofmight.jpg",
    sourceSpecIds: ["holyPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfWisdom",
    label: "Greater Blessing of Wisdom",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofwisdom.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfWisdom",
    label: "Improved Blessing of Wisdom",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofwisdom.jpg",
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfSalvation",
    label: "Greater Blessing of Salvation",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofsaluation.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofsancuary.jpg",
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "prayerOfSpirit",
    label: "Prayer of Spirit",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayerofspirit.jpg",
    sourceSpecIds: ["discipline"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayeroffortitude.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "improvedPrayerOfFortitude",
    label: "Improved Power Word: Fortitude",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayeroffortitude.jpg",
    sourceSpecIds: ["discipline", "holyPriest"],
  },
  {
    id: "prayerOfShadowProtection",
    label: "Prayer of Shadow Protection",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayerofshadowprotection.jpg",
    sourceSpecIds: ["shadow"],
  },
];

export const tbcRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_giftofwild.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedMarkOfTheWild",
    label: "Improved Mark of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_giftofwild.jpg",
    sourceSpecIds: ["balance", "restorationDruid"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_arcane_arcanemastery.jpg",
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofkings.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfLight",
    label: "Greater Blessing of Light",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingoflight.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofmight.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfMight",
    label: "Improved Blessing of Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofmight.jpg",
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfWisdom",
    label: "Greater Blessing of Wisdom",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofwisdom.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "improvedGreaterBlessingOfWisdom",
    label: "Improved Blessing of Wisdom",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofwisdom.jpg",
    sourceSpecIds: ["holyPaladin"],
  },
  {
    id: "greaterBlessingOfSalvation",
    label: "Greater Blessing of Salvation",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofsaluation.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofsancuary.jpg",
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "divineSpirit",
    label: "Divine Spirit",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_divinespirit.jpg",
    sourceSpecIds: ["discipline"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayeroffortitude.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "improvedPrayerOfFortitude",
    label: "Improved Power Word: Fortitude",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayeroffortitude.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "prayerOfShadowProtection",
    label: "Prayer of Shadow Protection",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayerofshadowprotection.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
];

const wotlkRaidBuffs: RaidBuffDefinition[] = [
  {
    id: "abominationsMight",
    label: "Abominations Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_unyeildingstamina.jpg",
    sourceSpecIds: ["blood"],
  },
  {
    id: "hornOfWinter",
    label: "Horn of Winter",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_hornofwinter.jpg",
    sourceSpecIds: ["blood", "frostDeathknight", "unholy"],
  },
  {
    id: "improvedIcyTalons",
    label: "Improved Icy Talons",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_hornofwinter.jpg",
    sourceSpecIds: ["frostDeathknight"],
  },
  {
    id: "giftOfTheWild",
    label: "Gift of the Wild",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_giftofwild.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedMoonkinForm",
    label: "Improved Moonkin Form",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_moonglow.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "leaderOfThePack",
    label: "Leader of the Pack",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_unyeildingstamina.jpg",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "treeOfLife",
    label: "Tree of Life",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_druid_treeoflife.jpg",
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "ferociousInspiration",
    label: "Ferocious Inspiration",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_ferociousinspiration.jpg",
    sourceSpecIds: ["beastMastery"],
  },
  {
    id: "trueshotAura",
    label: "Trueshot Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_trueshot.jpg",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "arcaneBrilliance",
    label: "Arcane Brilliance",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_arcane_arcanemastery.jpg",
    sourceSpecIds: ["arcane", "fire", "frostMage"],
  },
  {
    id: "arcaneEmpowerment",
    label: "Arcane Empowerment",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_arcane_arcanemastery.jpg",
    sourceSpecIds: ["arcane"],
  },
  {
    id: "greaterBlessingOfKings",
    label: "Greater Blessing of Kings",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofkings.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfMight",
    label: "Greater Blessing of Might",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofmight.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin", "retribution"],
  },
  {
    id: "greaterBlessingOfSanctuary",
    label: "Greater Blessing of Sanctuary",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_holy_greaterblessingofsancuary.jpg",
    sourceSpecIds: ["protectionPaladin"],
  },
  {
    id: "judgementsOfTheWise",
    label: "Judgements of the Wise",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_judgements.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "improvedDevotionAura",
    label: "Improved Devotion Aura",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_devotionaura.jpg",
    sourceSpecIds: ["holyPaladin", "protectionPaladin"],
  },
  {
    id: "sanctifiedRetribution",
    label: "Sanctified Retribution",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_sanctifiedretribution.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "swiftRetribution",
    label: "Swift Retribution",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_swiftretribution.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "prayerOfFortitude",
    label: "Prayer of Fortitude",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayeroffortitude.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "prayerOfSpirit",
    label: "Prayer of Spirit",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_prayerofspirit.jpg",
    sourceSpecIds: ["discipline", "holyPriest", "shadow"],
  },
  {
    id: "bloodlust",
    label: "Bloodlust",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_holy_bloodlust.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "elementalOath",
    label: "Elemental Oath",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_elementaloath.jpg",
    sourceSpecIds: ["elemental"],
  },
  {
    id: "flametongueTotem",
    label: "Flametongue Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_fire_flametonguetotem.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "improvedWindfuryTotem",
    label: "Improved Windfury Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_windfury.jpg",
    sourceSpecIds: ["enhancement"],
  },
  {
    id: "strengthOfEarthTotem",
    label: "Strength of Earth Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_earthbindtotem.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "totemOfWrath",
    label: "Totem of Wrath",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_fire_totemofwrath.jpg",
    sourceSpecIds: ["elemental"],
  },
  {
    id: "unleashedRage",
    label: "Unleashed Rage",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_unleashedrage.jpg",
    sourceSpecIds: ["enhancement"],
  },
  {
    id: "wrathOfAirTotem",
    label: "Wrath of Air Totem",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_slowingtotem.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "bloodPact",
    label: "Blood Pact",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_bloodboil.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "demonicPact",
    label: "Demonic Pact",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_demonicfortitude.jpg",
    sourceSpecIds: ["demonology"],
  },
  {
    id: "felIntelligence",
    label: "Fel Intelligence",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_felintelligence.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "battleShout",
    label: "Battle Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_battleshout.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "commandingShout",
    label: "Commanding Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_rallyingcry.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "rampage",
    label: "Rampage",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_warrior_rampage.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "huntingParty",
    label: "Hunting Party",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/ability_hunter_huntingparty.jpg",
    sourceSpecIds: ["survival"],
  },
  {
    id: "revitalize",
    label: "Revitalize",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_revitalize.jpg",
    sourceSpecIds: ["restorationDruid"],
  },
  {
    id: "enduringWinter",
    label: "Enduring Winter",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_frost_enduringwinter.jpg",
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "improvedSoulLeech",
    label: "Improved Soul Leech",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_shadow_soulleech.jpg",
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
