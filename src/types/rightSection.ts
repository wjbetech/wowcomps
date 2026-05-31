import type { Expansion } from "./expansions";
import type { RaidSlots } from "./raidGrid";

export type RightSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export type RightSidebarProps = {
  raidSlots: RaidSlots;
  selectedExpansion: Expansion;
};
