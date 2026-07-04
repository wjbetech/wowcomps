// core
import ClassBreakdownPanel from "./ClassBreakdownPanel";
import { SidebarSection } from "./RightSidebarSectionHeaders";
import RaidBuffPanel from "./RaidBuffPanel";
import RaidDebuffPanel from "./RaidDebuffPanel";

// lib
import { getCoverageCounter } from "../lib/getCoverageCounter";
import { getRightSidebarData } from "../lib/getRightSidebarData";

// types
import type { RightSidebarProps } from "../types/rightSection";

export default function RightSidebar({
  raidSlots,
  selectedExpansion,
  selectedRaidSize,
}: RightSidebarProps) {
  const { classBreakdown, raidBuffs, raidDebuffs } = getRightSidebarData(
    raidSlots,
    selectedExpansion,
    selectedRaidSize,
  );
  const buffCounter = getCoverageCounter(raidBuffs.summary.covered, raidBuffs.summary.total);
  const debuffCounter = getCoverageCounter(raidDebuffs.summary.covered, raidDebuffs.summary.total);

  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="space-y-4">
        <SidebarSection title="Class Breakdown" defaultOpen>
          <ClassBreakdownPanel breakdown={classBreakdown} />
        </SidebarSection>

        <SidebarSection title="Raid Buffs / Debuffs">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Buffs</span>
              <span style={{ color: buffCounter.color }}>{buffCounter.label}</span>
            </div>
            <RaidBuffPanel
              buffs={raidBuffs.coverage}
              selectedExpansion={selectedExpansion}
              memberRows={raidBuffs.memberRows}
            />
            <div className="flex justify-between">
              <span>Debuffs</span>
              <span
                style={{
                  color: debuffCounter.color,
                }}
              >
                {debuffCounter.label}
              </span>
            </div>
            <RaidDebuffPanel raidDebuffs={raidDebuffs.coverage} />
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
}
