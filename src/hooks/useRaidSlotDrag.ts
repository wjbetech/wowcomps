import { useEffect, useRef } from "react";

export function useRaidSlotDrag(isDragging: boolean) {
  const suppressClickRef = useRef(false);

  useEffect(() => {
    if (isDragging) {
      suppressClickRef.current = true;
    }
  }, [isDragging]);

  return {
    suppressClickRef,
  };
}
