import { getClassBreakdown } from "./classesHandler";
import { getCoverageSummary } from "./getCoverageSummary";
import { getRaidBuffMemberRows, getRaidBuffCoverageFromRows } from "./raidBuffHandler";
import { getRaidDebuffCoverage } from "./raidDebuffHandler";

// types
import type { RightSidebarData } from "../types/rightSection";
import type { RaidSlots } from "../types/raidGrid";
import type { Expansion, RaidSize } from "../types/expansions";

export function getRightSidebarData(
  raidSlots: RaidSlots,
  expansion: Expansion,
  raidSize: RaidSize,
): RightSidebarData {
  const classBreakdown = getClassBreakdown(raidSlots, expansion, raidSize);

  const memberRows = getRaidBuffMemberRows(raidSlots, expansion, raidSize);
  const raidBuffCoverage = getRaidBuffCoverageFromRows(memberRows, expansion);
  const raidDebuffCoverage = getRaidDebuffCoverage(raidSlots, expansion, raidSize);

  const buffSummary = getCoverageSummary(raidBuffCoverage);
  const debuffSummary = getCoverageSummary(raidDebuffCoverage);

  return {
    classBreakdown,
    raidBuffs: {
      coverage: raidBuffCoverage,
      memberRows,
      summary: buffSummary,
    },
    raidDebuffs: {
      coverage: raidDebuffCoverage,
      summary: debuffSummary,
    },
  };
}
