// core
import { XIcon } from "lucide-react";
import GroupPartyBuffIcons from "./GroupPartyBuffIcons";

// components
import RaidSlot from "./RaidSlot";

// libs
import { getRaidGridModel } from "../lib/grid";
import { getPartyBuffCoverage } from "../lib/partyBuffHandler";

// types
import type { RaidGridProps } from "../types/raidGrid";

// utils
import { getGroupSlotIds } from "../utils/getGroupSlotIds";

export default function RaidGrid({
  raidSlots,
  selectedRaidSize,
  onClearSlot,
  onRenameSlot,
  activeDraggedSlotId,
  onClearGroup,
  selectedExpansion,
}: RaidGridProps) {
  const groups = getRaidGridModel(selectedRaidSize);
  const partyBuffCoverage = getPartyBuffCoverage(raidSlots, selectedExpansion, selectedRaidSize);

  return (
    <section className="w-full">
      <div className="rounded-3xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => {
            const filledGroupSlots = group.slots.filter((slot) => raidSlots[slot.id] !== null);
            const groupCoverage = partyBuffCoverage.find((entry) => entry.groupId === group.id);
            const coveredBuffs = groupCoverage?.buffs.filter((buff) => buff.covered) ?? [];
            return (
              <article key={group.id} className="rounded-2xl">
                <header className="mb-2 grid grid-cols-[1.5rem_1fr_1.5rem] items-center">
                  <span />
                  <h3 className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-stone-300/50">
                    Group {group.id}
                  </h3>
                  {filledGroupSlots.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => onClearGroup(getGroupSlotIds(group))}
                      className="inline-flex h-6 w-6 items-center justify-center justify-self-end text-red-700 cursor-pointer"
                    >
                      <XIcon />
                    </button>
                  ) : (
                    <span className="h-6 w-6 justify-self-end" />
                  )}
                </header>

                <div className="space-y-1">
                  {group.slots.map((slot) => {
                    const isDraggedSource = activeDraggedSlotId === slot.id;
                    return (
                      <RaidSlot
                        key={slot.id}
                        slotId={slot.id}
                        onClearSlot={onClearSlot}
                        onRenameSlot={onRenameSlot}
                        placedSpec={raidSlots[slot.id]}
                        isDraggedSource={isDraggedSource}
                      />
                    );
                  })}
                </div>
                <GroupPartyBuffIcons buffs={coveredBuffs} expansion={selectedExpansion} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
