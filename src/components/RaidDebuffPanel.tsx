import { formatRaidCoverageTooltip } from "../lib/formatCoverageTooltip";
import type { RaidDebuffPanel } from "../types/raidDebuffs";
import CoverageIconTooltip from "./CoverageIconTooltip";
import UpgradeAvailableBadge from "./upgradeAvailableBadge.";

export default function RaidDebuffPanel({ raidDebuffs }: RaidDebuffPanel) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {raidDebuffs.map((debuff) => (
        <CoverageIconTooltip key={debuff.id} content={formatRaidCoverageTooltip(debuff)}>
          <div className="relative h-8 w-8">
            <img
              src={debuff.iconPath}
              alt={debuff.label}
              className={`h-8 w-8 rounded-sm ${debuff.covered ? "opacity-100" : "opacity-50 grayscale"}`}
            />
            {debuff.tier === "base" && <UpgradeAvailableBadge />}
          </div>
        </CoverageIconTooltip>
      ))}
    </div>
  );
}
