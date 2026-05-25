import { useDroppable } from "@dnd-kit/core";
import type { PlacedSpec, RaidSlots } from "../types/grid";
import classColors from "../data/classColors";

type RaidGridProps = {
  raidSlots: RaidSlots;
};

const GROUP_COUNT = 8;
const SLOTS_PER_GROUP = 5;

const groups = Array.from({ length: GROUP_COUNT }, (_, groupIndex) => ({
  id: groupIndex + 1,
  slots: Array.from({ length: SLOTS_PER_GROUP }, (_, slotIndex) => ({
    id: `${groupIndex + 1}-${slotIndex + 1}`,
    label: `Slot ${slotIndex + 1}`,
  })),
}));

export default function RaidGrid({ raidSlots }: RaidGridProps) {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="rounded-3xl">
        <div className="grid gap-4 xl:grid-cols-4">
          {groups.map((group) => (
            <article key={group.id} className="rounded-2xl">
              <header className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-center w-full uppercase tracking-[0.12em] text-stone-300/50">
                  Group {group.id}
                </h3>
              </header>

              <div className="space-y-2">
                {group.slots.map((slot) => (
                  <RaidSlot key={slot.id} slotId={slot.id} placedSpec={raidSlots[slot.id]} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RaidSlot({ slotId, placedSpec }: { slotId: string; placedSpec: PlacedSpec | null }) {
  const { isOver, setNodeRef } = useDroppable({
    id: slotId,
  });

  const slotColor = placedSpec ? classColors[placedSpec.classId] : undefined;

  const slotStyle = slotColor
    ? {
        background: `linear-gradient(
          180deg,
          rgb(from ${slotColor} r g b / 1),
          rgb(from ${slotColor} calc(r - 36) calc(g - 36) calc(b - 36) / 0.75)
        )`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={slotStyle}
      type="button"
      className={[
        "flex h-10 w-full items-center justify-between rounded-xl border px-4 text-left transition",
        placedSpec
          ? "border-black/20"
          : isOver
            ? "border-stone-400 bg-stone-800/90"
            : "border-dashed border-stone-700 bg-stone-900/70 hover:border-stone-500 hover:bg-stone-800/80",
      ].join(" ")}
    >
      {placedSpec ? (
        <div className="flex w-full items-center gap-2">
          {placedSpec.iconLink ? (
            <img
              src={placedSpec.iconLink}
              alt={placedSpec.label}
              className="h-6 w-6 rounded-sm object-cover"
            />
          ) : null}
          <span className={`text-sm ${placedSpec.classId === "priest" ? "text-stone-600" : ""}`}>
            {placedSpec.label}
          </span>
        </div>
      ) : (
        <span className="w-full text-center text-sm text-stone-400/50">-</span>
      )}
    </button>
  );
}
