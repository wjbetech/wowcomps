import { describe, expect, it } from "vite-plus/test";

// libs
import { createInitialRaidSlots } from "../../src/lib/grid";
import {
  clearRaid,
  clearSlot,
  placeSpec,
  resolveExpansionRaidSize,
  fillNextEmptySlot,
  resolveExpansionChange,
} from "../../src/lib/raidComposition";

describe("raidComposition", () => {
  (it("fills the next empty slot", () => {
    const slots = createInitialRaidSlots();
    const result = fillNextEmptySlot(slots, { classId: "mage", specId: "fire" });

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire" });
  }),
    it("places a spec into a specific slot", () => {
      const slots = createInitialRaidSlots();
      const result = placeSpec(slots, "2-3", { classId: "druid", specId: "balance" });

      expect(result["2-3"]).toEqual({ classId: "druid", specId: "balance" });
      expect(result["1-1"]).toBeNull();
    }),
    it("fills the first empty slot after an occupied slot", () => {
      const slots = createInitialRaidSlots();
      slots["1-1"] = { classId: "priest", specId: "shadow" };

      const result = fillNextEmptySlot(slots, { classId: "warrior", specId: "fury" });

      expect(result["1-2"]).toEqual({ classId: "warrior", specId: "fury" });
    }),
    it("does not change any slots when the raid is already full", () => {
      const slots = createInitialRaidSlots();

      for (const slotId of Object.keys(slots) as (keyof typeof slots)[]) {
        slots[slotId] = { classId: "mage", specId: "fire" };
      }

      const result = fillNextEmptySlot(slots, { classId: "warrior", specId: "fury" });

      expect(result).toEqual(slots);
    }),
    it("clears one slot when clearSlot() is called", () => {
      const slots = createInitialRaidSlots();
      slots["1-1"] = { classId: "mage", specId: "fire" };
      slots["1-2"] = { classId: "priest", specId: "shadow" };
      slots["1-3"] = { classId: "warrior", specId: "fury" };
      slots["1-4"] = { classId: "hunter", specId: "beastMastery" };

      const result = clearSlot(slots, "1-2");

      expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire" });
      expect(result["1-2"]).toBeNull();
      expect(result["1-3"]).toEqual({ classId: "warrior", specId: "fury" });
      expect(result["1-4"]).toEqual({ classId: "hunter", specId: "beastMastery" });
    }),
    it("clears the entire raid when clearRaid() is called", () => {
      const slots = createInitialRaidSlots();

      for (const slotId of Object.keys(slots) as (keyof typeof slots)[]) {
        slots[slotId] = { classId: "mage", specId: "fire" };
      }

      const result = clearRaid(slots);

      expect(result).toEqual(createInitialRaidSlots());
    }),
    it("keeps the current raid size if next expansion supports it", () => {
      const result = resolveExpansionRaidSize(20, {
        id: "classic",
        label: "Classic",
        enabled: true,
        raidSizes: [10, 20, 40],
      });

      expect(result).toEqual(20);
    }),
    it("returns the correct next expansion and falls back to largest raid size if not supported", () => {
      const result = resolveExpansionChange(20, "wotlk", {
        id: "wotlk",
        label: "Wrath of the Lich King",
        enabled: true,
        raidSizes: [10, 25, 40],
      });

      expect(result.selectedExpansion).toEqual("wotlk");
      expect(result.selectedRaidSize).toEqual(40);
    }));
});
