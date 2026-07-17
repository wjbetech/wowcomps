import { getPaladinAuraFamily } from "../data/partyBuffs";
import { formatPaladinAuraTooltip, formatPartyBuffTooltip } from "../lib/formatCoverageTooltip";
import type { DiagonalBuffVariant } from "../types/buffs";
import CoverageIconTooltip from "./CoverageIconTooltip";
import SplitDiagonalBuffIcon from "./SplitDiagonalBuffIcon";

export default function GroupPartyBuffIcons({ buffs, expansion }: DiagonalBuffVariant) {
  const family = getPaladinAuraFamily(expansion);
  const devotion = buffs.find((b) => b.buffId === "devotionAura");
  const resistance = buffs.find((b) => b.buffId === "resistanceAuras");
  const showPaladinSplit = Boolean(family && (devotion?.covered || resistance?.covered));
  const singleBuffs = buffs.filter(
    (b) => b.covered && b.buffId !== "devotionAura" && b.buffId !== "resistanceAuras",
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
