// core
import { PencilIcon } from "lucide-react";
import { useDraggable, useDroppable } from "@dnd-kit/core";

// hooks
import useRaidSlotEdit from "../hooks/useRaidSlotEdit";
import { useRaidSlotDrag } from "../hooks/useRaidSlotDrag";

// types
import type { RaidSlotId, PlacedSpec } from "../types/raidGrid";

// utils
import { sanitizeRaidSlotName } from "../utils/raidSlotName";
import { handleRaidSlotKeyDown } from "../utils/raidSlotKeydown";
import { getRaidSlotClassNames, getRaidSlotDisplay } from "../utils/raidSlotDisplay";
import { handleRaidSlotClick } from "../utils/raidSlotClick";

export default function RaidSlot({
  slotId,
  placedSpec,
  onClearSlot,
  onRenameSlot,
  isDraggedSource,
}: {
  slotId: RaidSlotId;
  placedSpec: PlacedSpec | null;
  onClearSlot: (slotId: RaidSlotId) => void;
  onRenameSlot: (slotId: RaidSlotId, newName: string) => void;
  isDraggedSource: boolean;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: slotId,
  });

  const {
    isEditing,
    setIsEditing,
    draftName,
    setDraftName,
    isComposing,
    setIsComposing,
    inputRef,
    cancelEditRef,
    commitName,
  } = useRaidSlotEdit(placedSpec, slotId, onRenameSlot);

  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    isDragging,
  } = useDraggable({
    id: `raid-slot-${slotId}`,
    data: {
      sourceSlotId: slotId,
      placedSpec,
    },
    disabled: !placedSpec || isEditing,
  });

  const { suppressClickRef } = useRaidSlotDrag(isDragging);

  const { displayedSpec, specDisplay, slotStyle } = getRaidSlotDisplay({
    placedSpec,
    isDraggedSource,
  });

  return (
    <div
      ref={setNodeRef}
      style={slotStyle}
      onClick={() =>
        handleRaidSlotClick({
          displayedSpec,
          isEditing,
          inputRef,
          suppressClickRef,
          onClearSlot,
          slotId,
        })
      }
      className={getRaidSlotClassNames({ displayedSpec, isDraggedSource, isOver })}
    >
      {displayedSpec ? (
        <div
          ref={setDraggableNodeRef}
          {...attributes}
          {...listeners}
          className="flex w-full items-center gap-2"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2">
            {specDisplay?.iconLink ? (
              <img
                src={specDisplay.iconLink}
                alt={specDisplay.label}
                className="h-6 w-6 zoom-110 rounded-sm object-cover"
              />
            ) : null}
            {isEditing ? (
              <input
                ref={inputRef}
                value={draftName}
                maxLength={12}
                onBlur={commitName}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                onKeyDown={(event) =>
                  handleRaidSlotKeyDown({
                    event,
                    commitName,
                    cancelEditRef,
                    setIsEditing,
                    setDraftName,
                    savedPlayerName: placedSpec?.playerName || "",
                  })
                }
                onChange={(event) => {
                  const value = event.target.value;
                  if (isComposing) {
                    setDraftName(value);
                    return;
                  }
                  setDraftName(sanitizeRaidSlotName(value));
                }}
                onClick={(event) => event.stopPropagation()}
                className="inline-flex w-3/4 h-6 shrink-0 items-center justify-center rounded-md transition hover:bg-stone-700 focus:outline-none text-sm font-extrabold"
              />
            ) : (
              <span className="block truncate text-sm font-extrabold">
                {draftName || specDisplay?.label}
              </span>
            )}
          </div>
          <button
            type="button"
            title="Edit player name"
            onClick={(event) => {
              event.stopPropagation();
              setIsEditing(true);
            }}
            className="cursor-pointer inline-flex w-7 h-7 items-center justify-center rounded-md transition hover:bg-stone-700"
          >
            <PencilIcon className="h-4 w-4 text-[#18b86d]" />
          </button>
        </div>
      ) : (
        <span className="w-full text-center text-sm text-stone-400/50">-</span>
      )}
    </div>
  );
}
