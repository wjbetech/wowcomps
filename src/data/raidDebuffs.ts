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
    meta: ["10 Rage", "Instant cast", "Requires Warrior", "Requires level 70"],
    description: "Reduces the melee attack power of all enemies within 10 yards by 300 for 30 sec.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "feralAggression",
    label: "Feral Aggression",
    iconPath: ZAMIMG_ICON("ability_druid_demoralizingroar"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    meta: ["10 Rage", "Instant cast", "Requires Warrior", "Requires level 70"],
    description: "Reduces the melee attack power of all enemies within 10 yards by 300 for 30 sec.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "improvedDemoralizingShout",
    label: "Improved Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    talent: true,
    meta: ["Requires Warrior"],
    description: "Increases the attack power reduction of your Demoralizing Shout by 40%.",
    sourceSpecIds: ["arms", "protectionWarrior"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    meta: ["145 Mana", "Instant", "Requires Druid", "Requires level 66"],
    range: "30 yd range",
    description:
      "Decrease the armor of the target by 610 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "Your Faerie Fire spell also increases the chance the target will be hit by melee and ranged attacks by 3%.",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: ZAMIMG_ICON("spell_nature_insectswarm"),
    talent: true,
    meta: ["175 Mana", "Instant", "Requires Druid", "Requires level 70"],
    range: "30 yd range",
    description:
      "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 792 Nature damage over 12 sec.",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "mangle(Bear)",
    label: "Mangle (Bear)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle"),
    meta: [
      "20 Rage",
      "Instant Cast",
      "Requires Druid",
      "Requires level 68",
      "Requires Dire Bear Form",
    ],
    range: "Melee Range",
    rightCooldown: "6 sec cooldown",
    description:
      "Mangle the target for 115% normal damage plus 155 and causes the target to take 30% additional damage from Shred and bleed effects for 12 sec.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "mangle(Cat)",
    label: "Mangle (Cat)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle2"),
    meta: ["45 Energy", "Instant", "Requires Druid", "Requires level 68", "Requires Cat Form"],
    range: "Melee Range",
    description:
      "Mangle the target for 160% normal damage plus 264 and causes the target to take 30% additional damage from Shred and bleed effects for 12 sec.  Awards 1 combo point.",
    extra: "Awards 1 combo point.",
    sourceSpecIds: ["feralDps"],
  },
  {
    id: "exposeWeakness",
    label: "Expose Weakness",
    iconPath: ZAMIMG_ICON("ability_rogue_findweakness"),
    talent: true,
    meta: ["Requires Hunter"],
    description:
      "Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec.",
    sourceSpecIds: ["survival"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    talent: true,
    meta: ["Requires Mage"],
    description:
      "Your Scorch spells have a 100% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
    sourceSpecIds: ["fire"],
  },
  {
    id: "improvedSealOfTheCrusader",
    label: "Improved Seal of the Crusader",
    iconPath: ZAMIMG_ICON("spell_holy_holysmite"),
    talent: true,
    meta: ["Requires Paladin"],
    description:
      "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 3%.",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "improvedHuntersMark",
    label: "Improved Hunters Mark",
    iconPath: ZAMIMG_ICON("ability_hunter_snipershot"),
    talent: true,
    meta: ["Requires Hunter"],
    description:
      "Causes 100% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
    sourceSpecIds: ["survival"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: ZAMIMG_ICON("spell_shadow_misery"),
    talent: true,
    meta: ["Requires Priest"],
    description:
      "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also cause the target to take an additional 5% spell damage.",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "shadowWeaving",
    label: "Shadow Weaving",
    iconPath: ZAMIMG_ICON("spell_shadow_blackplague"),
    talent: true,
    meta: ["Requires Priest"],
    description:
      "Your Shadow damage spells have a 100% chance to cause your target to be vulnerable to Shadow damage.  This vulnerability increases the Shadow damage dealt to your target by 2% and lasts 15 sec.  Stacks up to 5 times.",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "improvedExposeArmor",
    label: "Improved Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    talent: true,
    meta: ["Requires Rogue"],
    description: "Increases the armor reduced by your Expose Armor ability by 50%.",
    sourceSpecIds: ["assassination", "combat"],
  },
  {
    id: "curseOfRecklessness",
    label: "Curse of Recklessness",
    iconPath: ZAMIMG_ICON("spell_shadow_unholystrength"),
    meta: ["160 Mana", "Instant", "Requires Warlock", "Requires level 69"],
    range: "30 yd range",
    description:
      "Curses the target with recklessness, increasing melee attack power by 135 but reducing armor by 800 for 2 min.  Cursed enemies will not flee and will ignore Fear and Horror effects.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: ZAMIMG_ICON("spell_shadow_chilltouch"),
    meta: ["260 Mana", "Instant", "Requires Warlock", "Requires level 69"],
    range: "30 yd range",
    description:
      "Curses the target for 5 min, reducing Arcane, Fire, Frost, and Shadow resistances by 88 and increasing Arcane, Fire,  Frost, and Shadow damage taken by 10%.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "malediction",
    label: "Malediction",
    iconPath: ZAMIMG_ICON("spell_shadow_curseofachimonde"),
    talent: true,
    meta: ["Requires Warlock"],
    description:
      "Increases the damage bonus effect of your Curse of the Elements spell by an additional 3%.",
    sourceSpecIds: ["affliction"],
  },
  {
    id: "shadowEmbrace",
    label: "Shadow Embrace",
    iconPath: ZAMIMG_ICON("spell_shadow_shadowembrace"),
    talent: true,
    meta: ["Requires Warlock"],
    description:
      "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 5%.",
    sourceSpecIds: ["affliction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodfrenzy"),
    talent: true,
    meta: ["Requires Warrior"],
    description:
      "Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by 4%.",
    sourceSpecIds: ["arms"],
  },
];

const wotlkRaidDebuffs: RaidDebuffDefinition[] = [
  {
    id: "ebonPlaguebringer",
    label: "Ebon Plaguebringer",
    iconPath: ZAMIMG_ICON("spell_deathknight_plaguestrike"),
    talent: true,
    meta: ["Requires Death Knight"],
    description:
      "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 13% in addition to increasing disease damage taken.  Improves your critical strike chance with weapons and spells by 3% at all times.",
    sourceSpecIds: ["unholy"],
  },
  {
    id: "improvedIcyTouch",
    label: "Improved Icy Touch",
    iconPath: ZAMIMG_ICON("spell_deathknight_icetouch"),
    talent: true,
    meta: ["20 yd range", "Requires Death Knight"],
    description:
      "Your Icy Touch does an additional 15% damage and your Frost Fever reduces melee and ranged attack speed by an additional 6%.",
    sourceSpecIds: ["frostDeathknight"],
  },
  {
    id: "demoralizingRoar",
    label: "Demoralizing Roar",
    iconPath: ZAMIMG_ICON("classic_ability_druid_demoralizingroar"),
    meta: [
      "10 Rage",
      "Instant cast",
      "Requires Druid",
      "Requires level 77",
      "Requires Bear Form, Dire Bear Form",
    ],
    description:
      "The druid roars, decreasing nearby enemies' melee attack power by 411.  Lasts 30 sec.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "earthAndMoon",
    label: "Earth and Moon",
    iconPath: ZAMIMG_ICON("ability_druid_earthandsky"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 13% for 12 sec.",
    extra: "Also increases your spell damage by 6%.",
    sourceSpecIds: ["balance"],
  },
  {
    id: "faerieFire",
    label: "Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    meta: ["8% of base mana", "Instant", "Requires Druid", "Requires level 18"],
    range: "30 yd range",
    description:
      "Decrease the armor of the target by 5% for 5 min.  While affected, the target cannot stealth or turn invisible.",
    sourceSpecIds: ["balance", "feralDps", "feralTank", "restorationDruid"],
  },
  {
    id: "improvedFaerieFire",
    label: "Improved Faerie Fire",
    iconPath: ZAMIMG_ICON("spell_nature_faeriefire"),
    talent: true,
    meta: ["Requires Druid"],
    description:
      "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 3%, and increases the critical strike chance of your damage spells by 3% on targets afflicted by Faerie Fire.",
    sourceSpecIds: ["balance"],
  },
  {
    id: "insectSwarm",
    label: "Insect Swarm",
    iconPath: ZAMIMG_ICON("spell_nature_insectswarm"),
    talent: true,
    meta: ["8% of base mana", "Instant", "Requires Druid", "Requires level 80"],
    range: "30 yd range",
    description:
      "The enemy target is swarmed by insects, decreasing their chance to hit with melee and ranged attacks by 3% and causing 1290 Nature damage over 12 sec.",
    sourceSpecIds: ["balance"],
  },
  {
    id: "mangleBear",
    label: "Mangle (Bear)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle"),
    meta: [
      "20 Rage",
      "Instant cast",
      "Requires Druid",
      "Requires level 50",
      "Requires Dire Bear Form",
    ],
    range: "Melee Range",
    rightCooldown: "6 sec cooldown",
    description:
      "Mangle the target for 115% normal damage plus 86 and causes the target to take 30% additional damage from bleed effects for 1 min.",
    sourceSpecIds: ["feralTank"],
  },
  {
    id: "mangleCat",
    label: "Mangle (Cat)",
    iconPath: ZAMIMG_ICON("ability_druid_mangle2"),
    meta: ["45 Energy", "Instant", "Requires Druid", "Requires level 80", "Requires Cat Form"],
    range: "Melee Range",
    description:
      "Mangle the target for 200% normal damage plus 566 and causes the target to take 30% additional damage from bleed effects for 1 min.  Awards 1 combo point.",
    sourceSpecIds: ["feralDps"],
  },
  {
    id: "improvedScorch",
    label: "Improved Scorch",
    iconPath: ZAMIMG_ICON("spell_fire_soulburn"),
    talent: true,
    meta: ["Requires Mage"],
    description:
      "Increases your chance to critically hit with Scorch, Fireball and Frostfire Bolt by an additional 3% and your damaging Scorch spells have a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5% and lasts 30 sec.",
    sourceSpecIds: ["fire"],
  },
  {
    id: "heartOfTheCrusader",
    label: "Heart of the Crusader",
    iconPath: ZAMIMG_ICON("spell_holy_holysmite"),
    talent: true,
    meta: ["Requires Paladin"],
    description:
      "In addition to the normal effect, your Judgement spells will also increase the critical strike chance of all attacks made against that target by an additional 3%.",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "judgementsOfTheJust",
    label: "Judgements of the Just",
    iconPath: ZAMIMG_ICON("spell_holy_fanaticism"),
    talent: true,
    meta: ["Requires Paladin"],
    description:
      "Reduces the cooldown of your Hammer of Justice by 10 sec, increases the duration of your Seal of Justice effect by 1 sec and your Judgement spells also reduce the melee attack speed of the target by 20%.",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "vindication",
    label: "Vindication",
    iconPath: ZAMIMG_ICON("spell_holy_vindication"),
    talent: true,
    meta: ["Requires Paladin"],
    description:
      "Gives the Paladin's damaging attacks a chance to reduce the target's attack power by 574 for 10 sec.",
    sourceSpecIds: ["retribution"],
  },
  {
    id: "misery",
    label: "Misery",
    iconPath: ZAMIMG_ICON("spell_shadow_misery"),
    talent: true,
    meta: ["Requires Priest"],
    description:
      "Your Shadow Word: Pain, Mind Flay and Vampiric Touch spells also increase the chance for harmful spells to hit by 3% lasting 24 sec, and increases the benefit from spell power gained by your Mind Blast, Mind Flay and Mind Sear spells by 15%.",
    sourceSpecIds: ["shadow"],
  },
  {
    id: "exposeArmor",
    label: "Expose Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_riposte"),
    meta: ["25 Energy", "Instant", "Requires Rogue", "Requires level 77", "Requires Melee Weapon"],
    range: "Melee Range",
    description:
      "Finishing move that exposes the target for 30 sec, reducing armor per combo point:",
    offsetDescription:
      "1 point: 785 armor\n2 points: 1570 armor\n3 points: 2355 armor\n4 points: 3140 armor\n5 points: 3925 armor",
    sourceSpecIds: ["assassination", "combat", "subtlety"],
  },
  {
    id: "masterPoisoner",
    label: "Master Poisoner",
    iconPath: ZAMIMG_ICON("ability_creature_poison_06"),
    talent: true,
    meta: ["Requires Rogue"],
    description:
      "Increases the critical hit chance of all attacks made against any target you have poisoned by 3%, reduces the duration of all Poison effects applied to you by 50%, and gives Envenom a 100% chance not to consume Deadly Poison.",
    sourceSpecIds: ["assassination"],
  },
  {
    id: "savageCombat",
    label: "Savage Combat",
    iconPath: ZAMIMG_ICON("ability_creature_disease_03"),
    talent: true,
    meta: ["Requires Rogue"],
    description:
      "Increases your total attack power by 4% and all physical damage caused to enemies you have poisoned is increased by 4%.",
    sourceSpecIds: ["combat"],
  },
  {
    id: "curseOfTheElements",
    label: "Curse of the Elements",
    iconPath: ZAMIMG_ICON("spell_shadow_chilltouch"),
    meta: ["10% of base mana", "Instant", "Requires Warlock", "Requires level 78"],
    range: "30 yd range",
    description:
      "Curses the target for 5 min, reducing Arcane, Fire, Frost, Nature, and Shadow resistances by 165 and increasing magic damage taken by 13%.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "curseOfWeakness",
    label: "Curse of Weakness",
    iconPath: ZAMIMG_ICON("spell_shadow_curseofmannoroth"),
    meta: ["10% of base mana", "Instant", "Requires Warlock", "Requires level 71"],
    range: "30 yd range",
    description:
      "Target's melee attack power is reduced by 478 and armor is reduced by 5% for 2 min.  Only one Curse per Warlock can be active on any one target.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "improvedShadowBolt",
    label: "Improved Shadow Bolt",
    iconPath: ZAMIMG_ICON("spell_shadow_shadowbolt"),
    talent: true,
    meta: ["Requires Warlock"],
    description:
      "Increases the damage done by your Shadow Bolt spell by 10%, and your Shadow Bolt has a 100% chance to cause your target to be vulnerable to spell damage, increasing spell critical strike chance against that target by 5%. Effect lasts 30 sec.",
    sourceSpecIds: ["affliction", "demonology", "destruction"],
  },
  {
    id: "bloodFrenzy",
    label: "Blood Frenzy",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodfrenzy"),
    talent: true,
    meta: ["Requires Warrior"],
    description:
      "Increases your melee attack speed by 10%.  In addition your Rend and Deep Wounds abilities also increase all physical damage caused to that target by 4%.",
    sourceSpecIds: ["arms"],
  },
  {
    id: "demoralizingShout",
    label: "Demoralizing Shout",
    iconPath: ZAMIMG_ICON("ability_warrior_warcry"),
    meta: ["10 Rage", "Instant cast", "Requires Warrior", "Requires level 79"],
    description: "Reduces the melee attack power of all enemies within 10 yards by 411 for 30 sec.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "improvedThunderClap",
    label: "Improved Thunder Clap",
    iconPath: ZAMIMG_ICON("ability_thunderclap"),
    talent: true,
    meta: ["Requires Warrior"],
    description:
      "Reduces the cost of your Thunder Clap ability by 4 rage points and increases the damage by 30% and the slowing effect by an additional 10%.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "sunderArmor",
    label: "Sunder Armor",
    iconPath: ZAMIMG_ICON("ability_warrior_sunder"),
    meta: [
      "15 Rage",
      "Instant cast",
      "Requires Warrior",
      "Requires level 10",
      "Requires Melee Weapon",
    ],
    range: "Melee Range",
    description:
      "Sunders the target's armor, reducing it by 4% per Sunder Armor and causes a high amount of threat.  Threat increased by attack power.  Can be applied up to 5 times.  Lasts 30 sec.",
    sourceSpecIds: ["arms", "fury", "protectionWarrior"],
  },
  {
    id: "trauma",
    label: "Trauma",
    iconPath: ZAMIMG_ICON("ability_warrior_bloodnova"),
    talent: true,
    meta: ["Requires Warrior"],
    description:
      "Your melee critical strikes increase the effectiveness of Bleed effects on the target by 30% for 1 min.",
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
