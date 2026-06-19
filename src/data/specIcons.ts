import type { ClassId, SpecId } from "../types/classesSpecs";

type SpecIconMap = Partial<Record<ClassId, Partial<Record<SpecId, string>>>>;

export const specIcons: SpecIconMap = {
  deathKnight: {
    blood: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_bloodpresence.jpg",
    frost: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_frostpresence.jpg",
    unholy: "https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_unholypresence.jpg",
  },
  druid: {
    balance: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
    feralDps: "https://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg",
    feralTank: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg",
    restorationDruid:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
  },
  hunter: {
    beastMastery: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_beasttaming.jpg",
    marksmanship: "https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg",
    survival: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_swiftstrike.jpg",
  },
  mage: {
    arcane: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg",
    fire: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt02.jpg",
    frost: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
  },
  paladin: {
    holyPaladin: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg",
    protectionPaladin: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotionaura.jpg",
    retribution: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg",
  },
  priest: {
    discipline: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_powerwordshield.jpg",
    holyPriest: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_guardianspirit.jpg",
    shadow: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowwordpain.jpg",
  },
  rogue: {
    assassination: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg",
    combat: "https://wow.zamimg.com/images/wow/icons/medium/ability_backstab.jpg",
    subtlety: "https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg",
  },
  shaman: {
    elemental: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightning.jpg",
    enhancement:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_shaman_improvedstormstrike.jpg",
    restorationShaman:
      "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_magicimmunity.jpg",
  },
  warlock: {
    affliction: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathcoil.jpg",
    demonology: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg",
    destruction: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_rainoffire.jpg",
  },
  warrior: {
    arms: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_savageblow.jpg",
    fury: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg",
    protectionWarrior:
      "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_defensivestance.jpg",
  },
};
