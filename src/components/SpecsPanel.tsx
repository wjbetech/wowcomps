// data
import { expansionClasses } from "../data/expansionClasses";
import type { Expansion } from "../types/expansions";
import classColors from "../data/classColors";

// libs
import { getSpecsPanelRows } from "../lib/specsPanelLayout";

// types
import type { PlacedSpec } from "../types/raidGris";

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

type ClassSpecCardProps = {
  group: (typeof expansionClasses)[Expansion][number];
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
      className="group flex items-center justify-center rounded-lg transition cursor-grab"
      title={label}
    >
      {iconLink ? (
        <img
          src={iconLink}
          alt={label}
          className="h-6 w-6 rounded-sm object-cover lg:h-7 lg:w-7 2xl:h-8 2xl:w-8"
        />
      ) : (
        <span className="text-[10px] text-stone-500">?</span>
      )}
    </button>
  );
}

function ClassSpecCard({ group, fillNextSlot }: ClassSpecCardProps) {
  return (
    <article
      className="min-w-0 flex-1 rounded-xl p-2"
      style={{
        background: `linear-gradient(
          180deg,
          rgb(from ${classColors[group.classId]} r g b / 0.18),
          rgb(from ${classColors[group.classId]} r g b / 0.06)
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

export default function SpecsPanel({ selectedExpansion, fillNextSlot }: SpecsPanelProps) {
  const classGroups = expansionClasses[selectedExpansion];

  const wideRows = getSpecsPanelRows(classGroups, selectedExpansion, "wide");
  const mediumRows = getSpecsPanelRows(classGroups, selectedExpansion, "medium");

  return (
    <section className="w-full pb-6">
      <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-4">
        {wideRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4">
            {row.map((group) => (
              <ClassSpecCard key={group.classId} group={group} fillNextSlot={fillNextSlot} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 2xl:hidden">
        {mediumRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4">
            {row.map((group) => (
              <ClassSpecCard key={group.classId} group={group} fillNextSlot={fillNextSlot} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
