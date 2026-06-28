// core
import UpgradeAvailableBadge from "./upgradeAvailableBadge.";

// libs
import { formatRaidCoverageTooltip } from "../lib/formatCoverageTooltip";

// types
import type { RaidBuffPanel } from "../types/raidBuffs";
import CoverageIconTooltip from "./CoverageIconTooltip";

export default function RaidBuffPanel({ buffs }: RaidBuffPanel) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {buffs.map((buff) => (
        <CoverageIconTooltip key={buff.id} content={formatRaidCoverageTooltip(buff)}>
          <div className="relative h-8 w-8">
            <img
              src={buff.iconPath}
              alt={buff.label}
              className={`h-8 w-8 rounded-sm ${buff.covered ? "opacity-100" : "opacity-50 grayscale"}`}
            />
            {buff.tier === "base" && <UpgradeAvailableBadge />}
          </div>
        </CoverageIconTooltip>
      ))}
    </div>
  );
}
