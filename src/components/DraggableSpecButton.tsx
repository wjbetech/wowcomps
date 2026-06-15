// core
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

// types
import type { DraggableSpecButtonProps } from "../types/specsPanel";

// utils
import { createPlacedSpec } from "../utils/placedSpec";

export function DraggableSpecButton({
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
      playerName: "",
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.65 : 1,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      type="button"
      onClick={() => fillNextSlot(createPlacedSpec(classId, specId))}
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
