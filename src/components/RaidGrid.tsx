// core
import { useState, useRef, useEffect } from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";

// data
import { getClassDisplay, getSpecDisplay } from "../data/expansionClasses";

// libs
import { getRaidGridModel } from "../lib/grid";

// types
import type { RaidSlotId, PlacedSpec } from "../types/raidGrid";
import type { RaidGridProps } from "../types/raidGrid";
import { PencilIcon, XIcon } from "lucide-react";

export default function RaidGrid({
  raidSlots,
  selectedRaidSize,
  onClearSlot,
  onRenameSlot,
  activeDraggedSlotId,
}: RaidGridProps) {
  const groups = getRaidGridModel(selectedRaidSize);

  return (
    <section className="w-full">
      <div className="rounded-3xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => {
            const filledGroupSlots = group.slots.filter((slot) => raidSlots[slot.id]);
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
                        placedSpec={isDraggedSource ? null : raidSlots[slot.id]}
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

function RaidSlot({
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

  const specDisplay = placedSpec ? getSpecDisplay(placedSpec.classId, placedSpec.specId) : null;

  const slotColor = placedSpec ? getClassDisplay(placedSpec.classId).color : undefined;

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
        if (!placedSpec) return;

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
        placedSpec
          ? "border-black/20"
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
                onKeyDown={(event) => event.key === "Enter" && commitName()}
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
