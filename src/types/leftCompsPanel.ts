import type { Expansion, RaidSize } from "./expansions";
export type LeftCompsPanelProps = {
  raidName: string;
  onRenameRaid: (name: string) => void;
  selectedExpansion: Expansion;
  selectedRaidSize: RaidSize;
  loadedSavedCompId: string | null;
  onNew: () => void;
  onSave: () => void;
  onExport: () => void;
};
