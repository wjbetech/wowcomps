const GROUP_COUNT = 8;
const SLOTS_PER_GROUP = 5;

const groups = Array.from({ length: GROUP_COUNT }, (_, groupIndex) => ({
  id: groupIndex + 1,
  slots: Array.from({ length: SLOTS_PER_GROUP }, (_, slotIndex) => ({
    id: `${groupIndex + 1}-${slotIndex + 1}`,
    label: `Slot ${slotIndex + 1}`,
  })),
}));

export default function RaidGrid() {
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
                  <button
                    key={slot.id}
                    type="button"
                    className="flex h-10 w-full items-center justify-between rounded-xl border border-dashed border-stone-700 bg-stone-900/70 px-4 text-left transition hover:border-stone-500 hover:bg-stone-800/80"
                  >
                    <span className="text-sm w-full text-center text-stone-400/50">-</span>
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
