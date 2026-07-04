import type { ClassBreakdownRow } from "../lib/classesHandler";
import type { Expansion, RaidSize } from "./expansions";
import type { RaidBuffCoverageRow } from "./raidBuffs";
import type { RaidDebuffCoverageRow } from "./raidDebuffs";
import type { RaidSlots } from "./raidGrid";
import type { CoverageSummaryState } from "./tooltips";

export type RightSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export type RightSidebarProps = {
  raidSlots: RaidSlots;
  selectedExpansion: Expansion;
  selectedRaidSize: RaidSize;
};

export type RightSidebarData = {
  classBreakdown: ClassBreakdownRow[];
  raidBuffs: {
    coverage: RaidBuffCoverageRow[];
    memberRows: RaidBuffCoverageRow[];
    summary: {
      state: CoverageSummaryState;
      covered: number;
      total: number;
    };
  };
  raidDebuffs: {
    coverage: RaidDebuffCoverageRow[];
    summary: {
      state: CoverageSummaryState;
      covered: number;
      total: number;
    };
  };
};
