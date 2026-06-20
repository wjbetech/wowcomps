import type { Expansion } from "../types/expansions";
import type { RaidDebuffDefinition } from "../types/raidDebuffs";

const classicRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_demoralizingroar.jpg",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_faeriefire.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_exposearmor.jpg",
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedhuntersmark.jpg",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedscorch.jpg",
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_winterschill.jpg",
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_shadowweaving.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseofrecklessness.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfShadow",
    label: "Curse of Shadow",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseofshadow.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "huntersMark",
    label: "Hunters Mark",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_huntersmark.jpg",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_sunderarmor.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_demoralizingroar.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
];

const tbcRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_demoralizingroar.jpg",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_faeriefire.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_faeriefire.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_insectswarm.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "mangle(Bear)",
    label: "Mangle (Bear)",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_mangle.jpg",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "mangle(Cat)",
    label: "Mangle (Cat)",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_mangle.jpg",
    sourceSpecIds: ["feralDps"],
  },
  {
    id: "exposeWeakness",
    label: "Expose Weakness",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_exposeweakness.jpg",
    sourceSpecIds: ["survival"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedscorch.jpg",
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_winterschill.jpg",
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "improvedSealOfTheCrusader",
    label: "Improved Seal of the Crusader",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedsealofthecrusader.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedhuntersmark.jpg",
    sourceSpecIds: ["survival"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_misery.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_shadowweaving.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "improvedExposeArmor",
    label: "Improved Expose Armor",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedexposearmor.jpg",
    sourceSpecIds: ["assassination", "combat"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseofrecklessness.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseoftheelements.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "improvedShadowBolt",
    label: "Improved Shadow Bolt",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedshadowbolt.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "malediction",
    label: "Malediction",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_malediction.jpg",
    sourceSpecIds: ["affliction"],
  },
  {
    id: "shadowEmbrace",
    label: "Shadow Embrace",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_shadowembrace.jpg",
    sourceSpecIds: ["affliction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_bloodfrenzy.jpg",
    sourceSpecIds: ["arms"],
  },
  {
    id: "improvedDemoralizingShout",
    label: "Improved Demoralizing Shout",
    iconPath:
      "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improveddemoralizingroar.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "bloodlust",
    label: "Bloodlust",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_bloodlust.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
  {
    id: "heroism",
    label: "Heroism",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_heroism.jpg",
    sourceSpecIds: ["elemental", "enhancement", "restorationShaman"],
  },
];

const wotlkRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "ebonPlaguebringer",
    label: "Ebon Plaguebringer",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_ebonplaguebringer.jpg",
    sourceSpecIds: ["unholy"],
  },
  {
    id: "improvedIcyTouch",
    label: "Improved Icy Touch",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedicytouch.jpg",
    sourceSpecIds: ["frostDeathknight"],
  },
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_demoralizingroar.jpg",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "earthAndMoon",
    label: "Earth and Moon",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_earthandmoon.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_faeriefire.jpg",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_faeriefire.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_insectswarm.jpg",
    sourceSpecIds: ["balance"],
  },
  {
    id: "mangle",
    label: "Mangle",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_mangle.jpg",
    sourceSpecIds: ["feralDps", "feralTank"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedscorch.jpg",
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_winterschill.jpg",
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "heartOfTheCrusader",
    label: "Heart of the Crusader",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_heartofthecrusader.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "judgementsOfTheJust",
    label: "Judgements of the Just",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_judgementsofthejust.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "vindication",
    label: "Vindication",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_vindication.jpg",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_misery.jpg",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_exposearmor.jpg",
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "masterPoisoner",
    label: "Master Poisoner",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_masterpoisoner.jpg",
    sourceSpecIds: ["assassination"],
  },
  {
    id: "savageCombat",
    label: "Savage Combat",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_savagecombat.jpg",
    sourceSpecIds: ["combat"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseoftheelements.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfWeakness",
    label: "Curse of Weakness",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_curseofweakness.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "improvedShadowBolt",
    label: "Improved Shadow Bolt",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedshadowbolt.jpg",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_bloodfrenzy.jpg",
    sourceSpecIds: ["arms"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_demoralizingroar.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "improvedThunderClap",
    label: "Improved Thunder Clap",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_improvedthunderclap.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_sunderarmor.jpg",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "trauma",
    label: "Trauma",
    iconPath: "https://wow.zamimg.com/images/wow/icons/small/spell_nature_trauma.jpg",
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
