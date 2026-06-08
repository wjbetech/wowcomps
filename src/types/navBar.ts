import type { Expansion, RaidSize } from "./expansions";

export type NavbarProps = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
  selectedRaidSize: RaidSize;
  onSelectRaidSize: (raidSize: RaidSize) => void;
};
