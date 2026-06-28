import type { RaidSlotClick } from "../types/raidGrid";

export function handleRaidSlotClick({
  displayedSpec,
  isEditing,
  inputRef,
  suppressClickRef,
  onClearSlot,
  slotId,
}: RaidSlotClick) {
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
}
