// libs
import { getRaidGridModel } from "../lib/grid";

// types
import type { RaidGridProps } from "../types/raidGrid";
import { XIcon } from "lucide-react";
import RaidSlot from "./RaidSlot";

export default function RaidGrid({
  raidSlots,
  selectedRaidSize,
  onClearSlot,
  onRenameSlot,
  activeDraggedSlotId,
  onClearGroup,
}: RaidGridProps) {
  const groups = getRaidGridModel(selectedRaidSize);

  return (
    <section className="w-full">
      <div className="rounded-3xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => {
            const filledGroupSlots = group.slots.filter((slot) => raidSlots[slot.id] !== null);
            return (
              <article key={group.id} className="rounded-2xl">
                <header className="mb-3 grid grid-cols-[1.5rem_1fr_1.5rem] items-center">
                  <span />
                  <h3 className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-stone-300/50">
                    Group {group.id}
                  </h3>
                  {filledGroupSlots.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => onClearGroup(group.slots.map((slot) => slot.id))}
                      className="inline-flex h-6 w-6 items-center justify-center justify-self-end text-red-700"
                    >
                      <XIcon />
                    </button>
                  ) : (
                    <span className="h-6 w-6 justify-self-end" />
                  )}
                </header>

                <div className="space-y-2">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
