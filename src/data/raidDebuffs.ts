import type { Expansion } from "../types/expansions";
import type { RaidDebuffDefinition } from "../types/raidDebuffs";

const ZAMIMG_ICON = (icon: string) => `https://wow.zamimg.com/images/wow/icons/small/${icon}.jpg`;

const classicRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: ZAMIMG_ICON("classic_ability_druid_demoralizingroar"),
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: ZAMIMG_ICON("spell_frost_chillingblast"),
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: ZAMIMG_ICON("spell_shadow_blackplague"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: ZAMIMG_ICON("spell_shadow_unholystrength"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfShadow",
    label: "Curse of Shadow",
    iconPath: ZAMIMG_ICON("spell_shadow_antishadow"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "huntersMark",
    label: "Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_sunder"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
];

const tbcRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: ZAMIMG_ICON("classic_ability_druid_demoralizingroar"),
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: ZAMIMG_ICON("spell_nature_insectswarm"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "mangle(Bear)",
    label: "Mangle (Bear)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle"),
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "mangle(Cat)",
    label: "Mangle (Cat)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle2"),
    sourceSpecIds: ["feralDps"],
  },
  {
    id: "exposeWeakness",
    label: "Expose Weakness",
    iconPath: ZAMIMG_ICON("ability_rogue_findweakness"),
    sourceSpecIds: ["survival"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: ZAMIMG_ICON("spell_frost_frostward"),
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "improvedSealOfTheCrusader",
    label: "Improved Seal of the Crusader",
    iconPath: ZAMIMG_ICON("spell_holy_holysmite"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    sourceSpecIds: ["survival"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: ZAMIMG_ICON("spell_shadow_misery"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: ZAMIMG_ICON("spell_shadow_blackplague"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "improvedExposeArmor",
    label: "Improved Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    sourceSpecIds: ["assassination", "combat"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: ZAMIMG_ICON("spell_shadow_unholystrength"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: ZAMIMG_ICON("spell_shadow_chilltouch"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "improvedShadowBolt",
    label: "Improved Shadow Bolt",
    iconPath: ZAMIMG_ICON("spell_shadow_shadowbolt"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "malediction",
    label: "Malediction",
    iconPath: ZAMIMG_ICON("spell_shadow_curseofachimonde"),
    sourceSpecIds: ["affliction"],
  },
  {
    id: "shadowEmbrace",
    label: "Shadow Embrace",
    iconPath: ZAMIMG_ICON("spell_shadow_shadowembrace"),
    sourceSpecIds: ["affliction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodfrenzy"),
    sourceSpecIds: ["arms"],
  },
  {
    id: "improvedDemoralizingShout",
    label: "Improved Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "bloodlust",
    label: "Bloodlust",
    iconPath: ZAMIMG_ICON("spell_nature_bloodlust"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "heroism",
    label: "Heroism",
    iconPath: ZAMIMG_ICON("ability_shaman_heroism"),
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
];

const wotlkRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "ebonPlaguebringer",
    label: "Ebon Plaguebringer",
    iconPath: ZAMIMG_ICON("spell_deathknight_plaguestrike"),
    sourceSpecIds: ["unholy"],
  },
  {
    id: "improvedIcyTouch",
    label: "Improved Icy Touch",
    iconPath: ZAMIMG_ICON("spell_deathknight_icetouch"),
    sourceSpecIds: ["frostDeathknight"],
  },
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: ZAMIMG_ICON("classic_ability_druid_demoralizingroar"),
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "earthAndMoon",
    label: "Earth and Moon",
    iconPath: ZAMIMG_ICON("ability_druid_earthandsky"),
    sourceSpecIds: ["balance"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    sourceSpecIds: ["balance"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: ZAMIMG_ICON("spell_nature_insectswarm"),
    sourceSpecIds: ["balance"],
  },
  {
    id: "mangle",
    label: "Mangle",
    iconPath: ZAMIMG_ICON("ability_druid_mangle"),
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: ZAMIMG_ICON("spell_frost_frostward"),
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "heartOfTheCrusader",
    label: "Heart of the Crusader",
    iconPath: ZAMIMG_ICON("spell_holy_holysmite"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "judgementsOfTheJust",
    label: "Judgements of the Just",
    iconPath: ZAMIMG_ICON("spell_holy_fanaticism"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "vindication",
    label: "Vindication",
    iconPath: ZAMIMG_ICON("spell_holy_vindication"),
    sourceSpecIds: ["retribution"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: ZAMIMG_ICON("spell_shadow_misery"),
    sourceSpecIds: ["shadow"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "masterPoisoner",
    label: "Master Poisoner",
    iconPath: ZAMIMG_ICON("ability_creature_poison_06"),
    sourceSpecIds: ["assassination"],
  },
  {
    id: "savageCombat",
    label: "Savage Combat",
    iconPath: ZAMIMG_ICON("ability_creature_disease_03"),
    sourceSpecIds: ["combat"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: ZAMIMG_ICON("spell_shadow_chilltouch"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfWeakness",
    label: "Curse of Weakness",
    iconPath: ZAMIMG_ICON("spell_shadow_curseofmannoroth"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "improvedShadowBolt",
    label: "Improved Shadow Bolt",
    iconPath: ZAMIMG_ICON("spell_shadow_shadowbolt"),
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodfrenzy"),
    sourceSpecIds: ["arms"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "improvedThunderClap",
    label: "Improved Thunder Clap",
    iconPath: ZAMIMG_ICON("ability_thunderclap"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_sunder"),
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "trauma",
    label: "Trauma",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodnova"),
    sourceSpecIds: ["arms"],
  },
];

const raidDebuffsByExpansion: Record<Expansion, RaidDebuffDefinition[]> = {
  classic: classicRaidDebuffs,
  tbc: tbcRaidDebuffs,
  wotlk: wotlkRaidDebuffs,
  sod: classicRaidDebuffs,
  classicPlus: classicRaidDebuffs,
};

export function getRaidDebuffDefinitions(expansion: Expansion) {
  return raidDebuffsByExpansion[expansion] ?? [];
}
