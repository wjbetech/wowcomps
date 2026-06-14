import { useEffect, useRef, useState } from "react";
import type { RaidSlotId, PlacedSpec } from "../types/raidGrid";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { getClassDisplay, getSpecDisplay } from "../data/expansionClasses";
import { PencilIcon } from "lucide-react";

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
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(placedSpec?.playerName || "");
  const [isComposing, setIsComposing] = useState(false);

  const { isOver, setNodeRef } = useDroppable({
    id: slotId,
  });

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

  const displayedSpec = isDraggedSource ? null : placedSpec;

  const specDisplay = displayedSpec
    ? getSpecDisplay(displayedSpec.classId, displayedSpec.specId)
    : null;

  const slotColor = displayedSpec ? getClassDisplay(displayedSpec.classId).color : undefined;

  const slotStyle = slotColor
    ? {
        background: `linear-gradient(
          180deg,
          rgb(23 20 23  / 1),
          rgb(50 50 50 / 0.75)
        )`,
        borderColor: slotColor,
        color: slotColor,
      }
    : undefined;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const suppressClickRef = useRef(false);
  const cancelEditRef = useRef(false);

  useEffect(() => {
    if (!isEditing) return;
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [isEditing]);

  useEffect(() => {
    setDraftName(placedSpec?.playerName || "");
  }, [placedSpec?.playerName, placedSpec?.classId, placedSpec?.specId]);

  useEffect(() => {
    if (isDragging) {
      suppressClickRef.current = true;
    }
  }, [isDragging]);

  function commitName() {
    if (cancelEditRef.current) {
      cancelEditRef.current = false;
      return;
    }

    const nextName = draftName
      .replace(/[^\p{L}\p{N} ]+/gu, "")
      .trim()
      .slice(0, 12);
    onRenameSlot(slotId, nextName);
    setIsEditing(false);
  }

  return (
    <div
      ref={setNodeRef}
      style={slotStyle}
      onClick={() => {
        if (!displayedSpec) return;

        if (isEditing) {
          inputRef.current?.focus();
          return;
        }

        if (suppressClickRef.current) {
          suppressClickRef.current = false;
          return;
        }

        onClearSlot(slotId);
      }}
      className={[
        "flex h-10 w-full items-center justify-between rounded-xl border pl-3 pr-2 text-left transition",
        displayedSpec
          ? "border-black/20 cursor-grab"
          : isDraggedSource
            ? "border-dashed border-stone-500/60 bg-stone-900/40 opacity-60"
            : isOver
              ? "border-stone-400 bg-stone-800/90"
              : "border-dashed border-stone-700 bg-stone-900/70 hover:border-stone hover:bg-stone-800/80",
      ].join(" ")}
    >
      {placedSpec ? (
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
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    commitName();
                    return;
                  } else if (event.key === "Escape") {
                    event.preventDefault();
                    cancelEditRef.current = true;
                    setIsEditing(false);
                    setDraftName(placedSpec?.playerName || "");
                    return;
                  }
                }}
                onChange={(event) => {
                  const value = event.target.value;
                  if (isComposing) {
                    setDraftName(value);
                    return;
                  }
                  setDraftName(value.replace(/[^\p{L}\p{N} ]+/gu, "").slice(0, 12));
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
