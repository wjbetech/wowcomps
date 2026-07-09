import type { Expansion } from "../types/expansions";
import type { RaidDebuffDefinition } from "../types/raidDebuffs";

const ZAMIMG_ICON = (icon: string) => `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`;

const classicRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: ZAMIMG_ICON("classic_ability_druid_demoralizingroar"),
    meta: [
      "10 Rage",
      "Instant cast",
      "Requires Druid",
      "Requires level 10",
      "Requires Bear Form, Dire Bear Form",
    ],
    description:
      "The druid roars, decreasing nearby enemies' melee attack power by 40. Lasts 30 sec.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    meta: ["115 Mana", "Instant", "Requires Druid", "Requires level 54"],
    range: "30 yd range",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    meta: ["25 Energy", "Instant", "Requires Rogue", "Requires level 56", "Requires Melee Weapon"],
    range: "Melee Range",
    description:
      "Finishing move that exposes the target for 30 sec, reducing armor per combo point:",
    offsetDescription:
      "1 point: 340 armor\n2 points: 680 armor\n3 points: 1020 armor\n4 points: 1360 armor\n5 points: 1700 armor",
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    talent: true,
    meta: ["Requires Hunter"],
    description: "Increases the Ranged Attack Power bonus of your Hunter's Mark spell by 15%.",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    talent: true,
    meta: ["Requires Mage"],
    description:
      "Your Scorch spells have a 100% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec. Stacks up to 5 times.",
    sourceSpecIds: ["fire"],
  },
  {
    id: "wintersChill",
    label: "Winters Chill",
    iconPath: ZAMIMG_ICON("spell_frost_chillingblast"),
    talent: true,
    meta: ["Requires Mage"],
    description:
      "Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.",
    sourceSpecIds: ["frostMage"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: ZAMIMG_ICON("spell_shadow_blackplague"),
    talent: true,
    meta: ["Requires Priest"],
    description:
      "Your Shadow damage spells have a 100% chance to cause your target to be vulnerable to Shadow damage.  This vulnerability increases the Shadow damage dealt to your target by 3% and lasts 15 sec.  Stacks up to 5 times.",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: ZAMIMG_ICON("spell_shadow_unholystrength"),
    meta: ["115 Mana", "Instant", "Requires Warlock", "Requires level 56"],
    range: "30 yd range",
    description:
      "Curses the target with recklessness, increasing melee attack power by 90 but reducing armor by 640 for 2 min.  Cursed enemies will not flee and will ignore Fear and Horror effects.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfShadow",
    label: "Curse of Shadow",
    iconPath: ZAMIMG_ICON("spell_shadow_curseofachimonde"),
    meta: ["200 Mana", "Instant", "Requires Warlock", "Requires level 56"],
    range: "30 yd range",
    description:
      "Curses the target for 5 min, reducing Shadow and Arcane resistances by 75 and increasing Shadow and Arcane damage taken by 10%.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "huntersMark",
    label: "Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    meta: ["60 Mana", "Instant", "Requires Hunter", "Requires level 58"],
    range: "100 yd range",
    description:
      "Places the Hunter's Mark on the target, increasing the Ranged Attack Power of all attackers against that target by 110.  In addition, the target of this ability can always be seen by the hunter whether it stealths or turns invisible.  The target also appears on the mini-map.  Lasts for 2 min.",
    sourceSpecIds: ["marksmanship"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_sunder"),
    meta: [
      "15 Rage",
      "Instant cast",
      "Requires Warrior",
      "Requires level 58",
      "Requires Melee Weapon",
    ],
    range: "Melee Range",
    description:
      "Sunders the target's armor, reducing it by 450 per Sunder Armor and causes a high amount of threat.  Can be applied up to 5 times.  Lasts 30 sec.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    meta: ["10 Rage", "Instant cast", "Requires Warrior", "Requires level 54"],
    description: "Reduces the melee attack power of all enemies within 10 yards by 146 for 30 sec.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "improvedDemoralizingShout",
    label: "Improved Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    talent: true,
    meta: ["Requires Warrior"],
    description: "Increases the melee attack power reduction of your Demoralizing Shout by 40%.",
    sourceSpecIds: ["protectionWarrior"],
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
