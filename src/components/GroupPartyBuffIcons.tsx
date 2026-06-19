import { getPaladinAuraFamily } from "../data/partyBuffs";
import type { DiagonalBuffVariant } from "../types/buffs";
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
        <SplitDiagonalBuffIcon
          bottomLeft={{
            iconPath: family.devotionAura.iconPath,
            label: family.devotionAura.label,
            active: devotion?.covered,
          }}
          topRight={{
            iconPath: family.resistanceAuras.iconPath,
            label: family.resistanceAuras.label,
            active: resistance?.covered,
          }}
        />
      )}
      {singleBuffs.map((buff) => (
        <img
          key={buff.buffId}
          src={buff.iconPath}
          alt={buff.label}
          title={buff.label}
          className="h-6 w-6 rounded-sm object-cover border-2 border-green-600 "
        />
      ))}
    </div>
  );
}
