import { describe, expect, it, vi } from "vite-plus/test";
import { handleRaidSlotKeyDown } from "../../src/utils/raidSlotKeydown";

describe("raidSlotKeydown", () => {
  it("cancels editing without committing on Escape key", () => {
    const commitName = vi.fn();
    const setIsEditing = vi.fn();
    const setDraftName = vi.fn();
    const cancelEditRef = { current: false };

    handleRaidSlotKeyDown({
      event: { key: "Escape", preventDefault: vi.fn() } as never,
      commitName,
      cancelEditRef,
      setIsEditing,
      setDraftName,
      savedPlayerName: "Valruna",
    });

    expect(cancelEditRef.current).toBe(true);
    expect(setIsEditing).toHaveBeenCalledWith(false);
    expect(setDraftName).toHaveBeenCalledWith("Valruna");
    expect(commitName).not.toHaveBeenCalled();
  });
});
