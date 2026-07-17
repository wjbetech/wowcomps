import { getPaladinAuraFamily, getShamanAirTotemFamily } from "../data/partyBuffs";
import { formatPaladinAuraTooltip, formatPartyBuffTooltip } from "../lib/formatCoverageTooltip";
import type { DiagonalBuffVariant } from "../types/buffs";
import CoverageIconTooltip from "./CoverageIconTooltip";
import SplitDiagonalBuffIcon from "./SplitDiagonalBuffIcon";

export default function GroupPartyBuffIcons({ buffs, expansion }: DiagonalBuffVariant) {
  // paladin variables
  const family = getPaladinAuraFamily(expansion);
  const devotion = buffs.find((b) => b.buffId === "devotionAura");
  const resistance = buffs.find((b) => b.buffId === "resistanceAuras");
  const showPaladinSplit = Boolean(family && (devotion?.covered || resistance?.covered));

  // shaman variables
  const airTotemFamily = getShamanAirTotemFamily(expansion);
  const graceOfAir = buffs.find((b) => b.buffId === "graceOfAirTotem");
  const windfury = buffs.find((b) => b.buffId === "windfuryTotem");
  const showShamanAirSplit = Boolean(airTotemFamily && (graceOfAir?.covered || windfury?.covered));

  const singleBuffs = buffs.filter(
    (b) =>
      b.covered &&
      b.buffId !== "devotionAura" &&
      b.buffId !== "resistanceAuras" &&
      b.buffId !== "graceOfAirTotem" &&
      b.buffId !== "windfuryTotem",
  );

  return (
    <div className="mt-2 flex flex-wrap gap-1">
      {showPaladinSplit && family && (
        <CoverageIconTooltip
          key="paladin-auras"
          content={formatPaladinAuraTooltip(
            devotion?.covered ? devotion : undefined,
            resistance?.covered ? resistance : undefined,
            {
              topLeft: {
                iconPath: family.devotionAura.iconPath,
                label: family.devotionAura.label,
                active: devotion?.covered,
              },
              bottomRight: {
                iconPath: family.resistanceAuras.iconPath,
                label: family.resistanceAuras.label,
                active: resistance?.covered,
              },
            },
          )}
        >
          <SplitDiagonalBuffIcon
            triangleClassName="border-2 border-green-600"
            topLeft={{
              iconPath: family.devotionAura.iconPath,
              label: family.devotionAura.label,
              active: devotion?.covered,
            }}
            bottomRight={{
              iconPath: family.resistanceAuras.iconPath,
              label: family.resistanceAuras.label,
              active: resistance?.covered,
            }}
          />
        </CoverageIconTooltip>
      )}
      {showShamanAirSplit && airTotemFamily && (
        <CoverageIconTooltip
          key="shaman-air-totems"
          content={formatPaladinAuraTooltip(
            graceOfAir?.covered ? graceOfAir : undefined,
            windfury?.covered ? windfury : undefined,
            {
              topLeft: {
                iconPath: airTotemFamily.graceOfAirTotem.iconPath,
                label: airTotemFamily.graceOfAirTotem.label,
                active: graceOfAir?.covered,
              },
              bottomRight: {
                iconPath: airTotemFamily.windfuryTotem.iconPath,
                label: airTotemFamily.windfuryTotem.label,
                active: windfury?.covered,
              },
            },
          )}
        >
          <SplitDiagonalBuffIcon
            triangleClassName="border-2 border-green-600"
            topLeft={{
              iconPath: airTotemFamily.graceOfAirTotem.iconPath,
              label: airTotemFamily.graceOfAirTotem.label,
              active: graceOfAir?.covered,
            }}
            bottomRight={{
              iconPath: airTotemFamily.windfuryTotem.iconPath,
              label: airTotemFamily.windfuryTotem.label,
              active: windfury?.covered,
            }}
          />
        </CoverageIconTooltip>
      )}
      {singleBuffs.map((buff) => (
        <CoverageIconTooltip key={buff.buffId} content={formatPartyBuffTooltip(buff)}>
          <img
            src={buff.iconPath}
            alt={buff.label}
            className="h-6 w-6 rounded-sm object-cover border-2 border-green-600"
          />
        </CoverageIconTooltip>
      ))}
    </div>
  );
}
