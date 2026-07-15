// core
import { getClassBreakdown } from "./classesHandler";
import { getCoverageSummary } from "./getCoverageSummary";
import { getRaidBuffMemberRows, getRaidBuffCoverageFromRows } from "./raidBuffHandler";
import { getRaidDebuffMembersRows, getRaidDebuffCoverageFromRows } from "./raidDebuffHandler";

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

  const buffMemberRows = getRaidBuffMemberRows(raidSlots, expansion, raidSize);
  const raidBuffCoverage = getRaidBuffCoverageFromRows(buffMemberRows, expansion);

  const debuffMemberRows = getRaidDebuffMembersRows(raidSlots, expansion, raidSize);
  const raidDebuffCoverage = getRaidDebuffCoverageFromRows(debuffMemberRows, expansion);

  const buffSummary = getCoverageSummary(raidBuffCoverage);
  const debuffSummary = getCoverageSummary(raidDebuffCoverage);

  return {
    classBreakdown,
    raidBuffs: {
      coverage: raidBuffCoverage,
      memberRows: buffMemberRows,
      summary: buffSummary,
    },
    raidDebuffs: {
      coverage: raidDebuffCoverage,
      memberRows: debuffMemberRows,
      summary: debuffSummary,
    },
  };
}
