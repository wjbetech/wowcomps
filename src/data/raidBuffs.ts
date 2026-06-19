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
    sourceSpecIds: ["arcane", "fire", "frost"],
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
    sourceSpecIds: ["arcane", "fire", "frost"],
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
