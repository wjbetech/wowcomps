import type { KeyboardEvents } from "../types/keyboardEvents";

export function handleRaidSlotKeyDown({
  event,
  commitName,
  cancelEditRef,
  setIsEditing,
  setDraftName,
  savedPlayerName,
}: KeyboardEvents) {
  if (event.key === "Enter") {
    event.preventDefault();
    commitName();
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    cancelEditRef.current = true;
    setIsEditing(false);
    setDraftName(savedPlayerName);
    return;
  }
}
