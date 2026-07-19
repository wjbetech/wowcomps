import { SidebarSection } from "./RightSidebarSectionHeaders";
import { getExpansionConfig } from "../data/expansionData";
import type { LeftCompsPanelProps } from "../types/leftCompsPanel";

export default function LeftCompsPanel({
  raidName,
  onRenameRaid,
  selectedExpansion,
  selectedRaidSize,
  loadedSavedCompId,
}: LeftCompsPanelProps) {
  const expansionLabel = getExpansionConfig(selectedExpansion)?.label ?? selectedExpansion;
  return (
    <aside className="lg:sticky lg:top-20 lg:self-start">
      <div className="space-y-4">
        <SidebarSection title="Raid Comp" defaultOpen>
          <div className="space-y-3">
            <label className="block space-y-1">
              <span className="text-xs font-medium uppercase tracking-wide text-stone-400">
                Comp name
              </span>
              <input
                type="text"
                value={raidName}
                maxLength={40}
                onChange={(event) => onRenameRaid(event.target.value)}
                className="w-full rounded-lg border border-stone-600 bg-stone-950 px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                placeholder="New Raid"
              />
            </label>
            <p className="text-xs text-stone-400">
              {expansionLabel} · {selectedRaidSize}-man
            </p>
            <p className="text-xs text-stone-500">
              {loadedSavedCompId ? "Editing saved comp" : "Unsaved draft"}
            </p>
          </div>
        </SidebarSection>
        <SidebarSection title="Templates">
          <select
            disabled
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-3 py-2 text-sm text-stone-500"
          >
            <option>Coming soon</option>
          </select>
        </SidebarSection>
        <SidebarSection title="Saved Comps">
          <select
            disabled
            className="w-full rounded-lg border border-stone-700 bg-stone-950 px-3 py-2 text-sm text-stone-500"
          >
            <option>Coming soon</option>
          </select>
        </SidebarSection>
      </div>
    </aside>
  );
}
