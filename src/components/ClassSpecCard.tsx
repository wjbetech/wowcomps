// core
import { DraggableSpecButton } from "./DraggableSpecButton";

// types
import type { ClassSpecCardProps } from "../types/specsPanel";

export function ClassSpecCard({ group, fillNextSlot }: ClassSpecCardProps) {
  return (
    <article
      className="min-w-0 flex-1 rounded-xl p-2"
      style={{
        background: `linear-gradient(
          180deg,
          rgb(from ${group.color} r g b / 0.18),
          rgb(from ${group.color} r g b / 0.06)
        )`,
      }}
    >
      <div className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-stone-300">
        {group.label}
      </div>

      <div className="mb-1 flex flex-nowrap justify-center gap-2">
        {group.specs.map((spec) => (
          <DraggableSpecButton
            key={`${group.classId}-${spec.specId}`}
            classId={group.classId}
            specId={spec.specId}
            label={spec.label}
            iconLink={spec.iconLink}
            fillNextSlot={fillNextSlot}
          />
        ))}
      </div>
    </article>
  );
}
