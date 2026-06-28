// core
import ClassBreakdownPanel from "./ClassBreakdownPanel";
import { SidebarSection } from "./RightSidebarSectionHeaders";
import RaidBuffPanel from "./RaidBuffPanel";
import RaidDebuffPanel from "./RaidDebuffPanel";

// lib
import { getClassBreakdown } from "../lib/classesHandler";
import { getRaidBuffCoverage } from "../lib/raidBuffHandler";
import { getRaidDebuffCoverage } from "../lib/raidDebuffHandler";
import { getCoverageSummary } from "../lib/getCoverageSummary";
import { getCoverageProgressColor } from "../lib/getCoverageProgressColor";

// types
import type { RightSidebarProps } from "../types/rightSection";

export default function RightSidebar({
  raidSlots,
  selectedExpansion,
  selectedRaidSize,
}: RightSidebarProps) {
  const classBreakdown = getClassBreakdown(raidSlots, selectedExpansion, selectedRaidSize);
  const raidBuffCoverage = getRaidBuffCoverage(raidSlots, selectedExpansion, selectedRaidSize);
  const raidDebuffCoverage = getRaidDebuffCoverage(raidSlots, selectedExpansion, selectedRaidSize);
  const buffSummary = getCoverageSummary(raidBuffCoverage);
  const debuffSummary = getCoverageSummary(raidDebuffCoverage);

  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="space-y-4">
        <SidebarSection title="Class Breakdown" defaultOpen>
          <ClassBreakdownPanel breakdown={classBreakdown} />
        </SidebarSection>

        <SidebarSection title="Raid Buffs / Debuffs">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span
                style={{ color: getCoverageProgressColor(buffSummary.covered, buffSummary.total) }}
              >
                {buffSummary.covered} / {buffSummary.total}
              </span>
            </div>
            <RaidBuffPanel buffs={raidBuffCoverage} />
            <div className="flex justify-between">
              <span
                style={{
                  color: getCoverageProgressColor(debuffSummary.covered, debuffSummary.total),
                }}
              >
                {debuffSummary.covered} / {debuffSummary.total}
              </span>
            </div>
            <RaidDebuffPanel raidDebuffs={raidDebuffCoverage} />
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
}
