// core
import CoverageIconTooltip from "./CoverageIconTooltip";
import SplitDiagonalBuffIcon from "./SplitDiagonalBuffIcon";
import UpgradeAvailableBadge from "./upgradeAvailableBadge.";

// lib
import { getRaidBuffDisplayItems } from "../lib/getRaidBuffDisplayItems";

// types
import type { RaidBuffPanel } from "../types/raidBuffs";

export default function RaidBuffPanel({ buffs, memberRows, selectedExpansion }: RaidBuffPanel) {
  const items = getRaidBuffDisplayItems(buffs, memberRows, selectedExpansion);

  return (
    <div className="flex flex-wrap gap-0.5">
      {items.map((item) =>
        item.kind === "bloodlustHeroism" ? (
          <CoverageIconTooltip key={item.key} content={item.tooltip}>
            <div
              className={`relative h-8 w-8 ${item.row.covered ? "opacity-100" : "opacity-50 grayscale"}`}
            >
              <div className="h-8 w-8 [&>div]:h-full [&>div]:w-full">
                <SplitDiagonalBuffIcon
                  triangleClassName="border-0"
                  topLeft={{
                    iconPath: item.bottomLeft.iconPath,
                    label: item.bottomLeft.label,
                    active: true,
                  }}
                  bottomRight={{
                    iconPath: item.topRight.iconPath,
                    label: item.topRight.label,
                    active: true,
                  }}
                />
              </div>
            </div>
          </CoverageIconTooltip>
        ) : (
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
        ),
      )}
    </div>
  );
}
