// data
import { getClassDisplay, getSpecDisplay } from "../data/expansionClasses";

// types
import type { RaidSlotDisplay } from "../types/raidGrid";

export function getRaidSlotDisplay({ placedSpec, isDraggedSource }: RaidSlotDisplay) {
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

  return {
    displayedSpec,
    specDisplay,
    slotColor,
    slotStyle,
  };
}
