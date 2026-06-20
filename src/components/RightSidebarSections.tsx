// core
import ClassBreakdownPanel from "./ClassBreakdownPanel";
import { SidebarSection } from "./RightSidebarSectionHeaders";

// lib
import { getClassBreakdown } from "../lib/classesHandler";
import { getRaidBuffCoverage } from "../lib/raidBuffHandler";
import { getRaidDebuffCoverage } from "../lib/raidDebuffHandler";

// types
import type { RightSidebarProps } from "../types/rightSection";
import RaidBuffPanel from "./RaidBuffPanel";
import RaidDebuffPanel from "./RaidDebuffPanel";

export default function RightSidebar({
  raidSlots,
  selectedExpansion,
  selectedRaidSize,
}: RightSidebarProps) {
  const classBreakdown = getClassBreakdown(raidSlots, selectedExpansion, selectedRaidSize);
  const raidBuffCoverage = getRaidBuffCoverage(raidSlots, selectedExpansion, selectedRaidSize);
  const raidDebuffCoverage = getRaidDebuffCoverage(raidSlots, selectedExpansion, selectedRaidSize);
  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="space-y-4">
        <SidebarSection title="Class Breakdown" defaultOpen>
          <ClassBreakdownPanel breakdown={classBreakdown} />
        </SidebarSection>

        <SidebarSection title="Raid Buffs / Debuffs">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Raid Buffs</span>
              <span className="text-stone-400">{raidBuffCoverage.length}</span>
            </div>
            <RaidBuffPanel buffs={raidBuffCoverage} />
            <div className="flex justify-between">
              <span>Raid Debuffs</span>
              <span className="text-stone-400">{raidDebuffCoverage.length}</span>
            </div>
            <RaidDebuffPanel raidDebuffs={raidDebuffCoverage} />
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
}
