import type { CoverageTooltip, WoWTooltipContent } from "../types/tooltips";

import getSpecLabels from "../utils/getSpecLabels";

function splitMeta(meta: string[] | undefined) {
  const lines = meta ?? [];
  const costLine = (s: string) =>
    /\b(Mana|Rage|Energy|Focus|Runic Power|$ of base mana)\b/i.test(s);
  const castLine = (s: string) => /^(Instant|Instant cast|\d+\s*sec)/i.test(s);

  let cost: string | undefined;
  let cast: string | undefined;
  const requires: string[] = [];

  for (const line of lines) {
    if (!cost && costLine(line)) cost = line;
    else if (!cast && castLine(line)) cast = line;
    else requires.push(line);
  }

  return { cost, cast, requires };
}

// Raid buff/debuff — already has tier
export function formatRaidCoverageTooltip(row: CoverageTooltip): WoWTooltipContent {
  const { cost, cast, requires } = splitMeta(row.meta);

  const status = !row.covered
    ? "Missing"
    : row.tier === "base"
      ? "Covered (base) — improved available"
      : "Covered";
  const providers = getSpecLabels(row.sourceSpecIds);
  return {
    iconPath: row.iconPath,
    title: row.label,
    talentLabel: row.talentLabel,
    talent: row.talent,
    cost,
    cast,
    requires,
    range: row.range,
    rightCooldown: row.rightCooldown,
    description: row.description,
    offsetDescription: row.offsetDescription,
    footerLines: [
      status,
      ...(providers.length > 0 ? [`Provided by: ${providers.join(", ")}`] : []),
    ],
  };
}

// Party buffs — no tier, always covered when shown
export function formatPartyBuffTooltip(
  row: Pick<
    CoverageTooltip,
    | "label"
    | "sourceSpecIds"
    | "iconPath"
    | "meta"
    | "description"
    | "range"
    | "rightCooldown"
    | "talent"
    | "tools"
    | "extra"
  >,
): WoWTooltipContent {
  const { cost, cast, requires } = splitMeta(row.meta);
  const providers = getSpecLabels(row.sourceSpecIds);
  const description =
    row.description && row.extra
      ? `${row.description}\n\n${row.extra}`
      : (row.description ?? row.extra);
  return {
    iconPath: row.iconPath,
    title: row.label,
    talent: row.talent,
    cost,
    cast,
    requires,
    tools: row.tools,
    meta: row.meta,
    range: row.range,
    rightCooldown: row.rightCooldown,
    description,
    footerLines: providers.length ? [`Provided by: ${providers.join(", ")}`] : ["Active in party"],
  };
}

export function formatBloodlustHeroismTooltip(
  consolidated: CoverageTooltip,
  bloodlust?: Pick<
    CoverageTooltip,
    "iconPath" | "meta" | "description" | "range" | "rightCooldown"
  >,
  heroism?: Pick<CoverageTooltip, "meta" | "description">,
): WoWTooltipContent {
  const lust = splitMeta(bloodlust?.meta);
  const hero = splitMeta(heroism?.meta);
  return {
    iconPath: bloodlust?.iconPath,
    title: "Bloodlust / Heroism",
    cost: lust.cost ?? hero.cost,
    cast: lust.cast ?? hero.cast,
    requires: [...new Set([...lust.requires, ...hero.requires])],
    range: bloodlust?.range,
    rightCooldown: bloodlust?.rightCooldown,
    // one shared body for now:
    description: bloodlust?.description ?? heroism?.description,
    footerLines: formatRaidCoverageTooltip(consolidated).footerLines,
  };
}

export function formatBaseAndTalentTooltip(
  consolidated: CoverageTooltip,
  base: Pick<
    CoverageTooltip,
    "label" | "iconPath" | "meta" | "description" | "range" | "rightCooldown"
  >,
  talent?: Pick<CoverageTooltip, "label" | "meta" | "description">,
): WoWTooltipContent {
  const { cost, cast, requires } = splitMeta([...(base.meta ?? []), ...(talent?.meta ?? [])]);

  return {
    iconPath: base.iconPath,
    title: base.label,
    talentLabel: talent?.label,
    cost,
    cast,
    requires,
    range: base.range,
    rightCooldown: base.rightCooldown,
    description: base.description,
    talentDescription: talent?.description,
    footerLines: formatRaidCoverageTooltip(consolidated).footerLines,
  };
}

export function formatPaladinAuraTooltip(
  devotion?: Parameters<typeof formatPartyBuffTooltip>[0],
  resistance?: Parameters<typeof formatPartyBuffTooltip>[0],
  splitIcon?: WoWTooltipContent["splitIcon"],
): WoWTooltipContent {
  const sections = [devotion, resistance]
    .filter((row): row is NonNullable<typeof row> => !!row)
    .map((row) => {
      const part = formatPartyBuffTooltip(row);
      return {
        title: part.title,
        talent: part.talent,
        cost: part.cost,
        cast: part.cast,
        range: part.range,
        rightCooldown: part.rightCooldown,
        requires: part.requires,
        tools: part.tools,
        description: part.description,
        footerLines: part.footerLines,
      };
    });
  return {
    splitIcon,
    hideTitle: true,
    title: sections[0]?.title ?? "",
    sections,
  };
}
