// core
import { useEffect, useRef, useState } from "react";

// types
import type { PlacedSpec, RaidSlotId } from "../types/raidGrid";

export default function useRaidSlotEdit(
  placedSpec: PlacedSpec | null,
  slotId: RaidSlotId,
  onRenameSlot: (slotId: RaidSlotId, newName: string) => void,
) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(placedSpec?.playerName || "");
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cancelEditRef = useRef(false);

  useEffect(() => {
    if (!isEditing) return;
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [isEditing]);

  useEffect(() => {
    setDraftName(placedSpec?.playerName || "");
  }, [placedSpec?.playerName, placedSpec?.classId, placedSpec?.specId]);

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

  return {
    isEditing,
    setIsEditing,
    draftName,
    setDraftName,
    isComposing,
    setIsComposing,
    inputRef,
    cancelEditRef,
    commitName,
  };
}
