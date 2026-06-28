import type { SlotClassNames } from "../types/raidGrid";

export function getRaidSlotClassNames({ displayedSpec, isDraggedSource, isOver }: SlotClassNames) {
  return [
    "flex h-10 w-full items-center justify-between rounded-xl border pl-3 pr-2 text-left transition",
    displayedSpec
      ? "border-black/20 cursor-grab"
      : isDraggedSource
        ? "border-dashed border-stone-500/60 bg-stone-900/40 opacity-60"
        : isOver
          ? "border-stone-400 bg-stone-800/90"
          : "border-dashed border-stone-700 bg-stone-900/70 hover:border-stone hover:bg-stone-800/80",
  ].join(" ");
}
