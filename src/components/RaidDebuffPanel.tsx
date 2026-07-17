import CoverageIconTooltip from "./CoverageIconTooltip";
import UpgradeAvailableBadge from "./UpgradeAvailableBadge";
import { getRaidDebuffDisplayItems } from "../lib/getRaidDebuffDisplayItems";
import type { RaidDebuffPanel } from "../types/raidDebuffs";
export default function RaidDebuffPanel({
  raidDebuffs,
  memberRows,
  selectedExpansion,
}: RaidDebuffPanel) {
  const items = getRaidDebuffDisplayItems(raidDebuffs, memberRows, selectedExpansion);
  return (
    <div className="flex flex-wrap gap-0.5">
      {items.map((item) => (
        <CoverageIconTooltip key={item.key} content={item.tooltip}>
          <div className="relative h-8 w-8">
            <img
              src={item.row.iconPath}
              alt={item.row.label}
              className={`h-8 w-8 rounded-sm ${item.row.covered ? "opacity-100" : "opacity-50 grayscale"}`}
            />
            {item.showUpgradeBadge && <UpgradeAvailableBadge />}
          </div>
        </CoverageIconTooltip>
      ))}
    </div>
  );
}
