// data
import { expansionClasses } from "../data/expansionClasses";
import type { Expansion } from "../data/expansionData";
import classColors from "../data/classColors";

// types
import type { PlacedSpec } from "../types/grid";

// dnd-kit
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type SpecsPanelProps = {
  selectedExpansion: Expansion;
  fillNextSlot: (spec: PlacedSpec) => void;
};

type DraggableSpecButtonProps = {
  classId: string;
  specId: string;
  label: string;
  iconLink?: string;
  fillNextSlot: (spec: PlacedSpec) => void;
};

function DraggableSpecButton({
  classId,
  specId,
  label,
  iconLink,
  fillNextSlot,
}: DraggableSpecButtonProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `spec:${classId}:${specId}`,
    data: {
      classId,
      specId,
      label,
      iconLink,
      fillNextSlot,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.65 : 1,
  };

  const placedSpec: PlacedSpec = {
    classId,
    specId,
    label,
    iconLink,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      type="button"
      onClick={() => fillNextSlot(placedSpec)}
      className="group flex items-center justify-center rounded-lg transition"
      title={label}
    >
      {iconLink ? (
        <img src={iconLink} alt={label} className="h-8 w-8 rounded-sm object-cover" />
      ) : (
        <span className="text-[10px] text-stone-500">?</span>
      )}
    </button>
  );
}

export default function SpecsPanel({ selectedExpansion, fillNextSlot }: SpecsPanelProps) {
  const classGroups = expansionClasses[selectedExpansion];

  return (
    <section className="mx-auto w-full max-w-5xl pb-6">
      <div className="flex flex-wrap gap-4">
        {classGroups.map((group) => (
          <article
            key={group.classId}
            className="min-w-45 rounded-xl p-2"
            style={{
              background: `linear-gradient(
                  180deg,
                  rgb(from ${classColors[group.classId]} r g b / 0.18),
                  rgb(from ${classColors[group.classId]} r g b / 0.06)
                )`,
            }}
          >
            <div className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 mb-2">
              {group.label}
            </div>
            <div className="mb-1 flex flex-wrap justify-center gap-2">
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
        ))}
      </div>
    </section>
  );
}
