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
  renameSlot,
  reconcileRaidSlots,
  stripInvalidClassSpecs,
  moveRaidSlot,
} from "../../src/lib/raidComposition";

import { writeWorkingRaidSlots, readWorkingRaidSlots } from "../../src/lib/raidStorage";

describe("raidComposition", () => {
  it("fills the next empty slot", () => {
    const slots = createInitialRaidSlots(40);
    const result = fillNextEmptySlot(slots, { classId: "mage", specId: "fire", playerName: "" });

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
  });
  it("places a spec into a specific slot", () => {
    const slots = createInitialRaidSlots(40);
    const result = placeSpec(slots, "2-3", {
      classId: "druid",
      specId: "balance",
      playerName: "",
    });

    expect(result["2-3"]).toEqual({ classId: "druid", specId: "balance", playerName: "" });
    expect(result["1-1"]).toBeNull();
  });
  it("fills the first empty slot after an occupied slot", () => {
    const slots = createInitialRaidSlots(40);
    slots["1-1"] = { classId: "priest", specId: "shadow", playerName: "" };

    const result = fillNextEmptySlot(slots, {
      classId: "warrior",
      specId: "fury",
      playerName: "",
    });

    expect(result["1-2"]).toEqual({ classId: "warrior", specId: "fury", playerName: "" });
  });
  it("renames a slot when renameSlot() is called", () => {
    const slots = createInitialRaidSlots(40);
    slots["1-1"] = { classId: "priest", specId: "shadow", playerName: "" };

    const result = renameSlot(slots, "1-1", "Valruna");

    expect(result["1-1"]).toEqual({ classId: "priest", specId: "shadow", playerName: "Valruna" });
  });
  it("does not change any slots when the raid is already full", () => {
    const slots = createInitialRaidSlots(40);

    for (const slotId of Object.keys(slots) as (keyof typeof slots)[]) {
      slots[slotId] = { classId: "mage", specId: "fire", playerName: "" };
    }

    const result = fillNextEmptySlot(slots, {
      classId: "warrior",
      specId: "fury",
      playerName: "",
    });

    expect(result).toEqual(slots);
  });
  it("clears one slot when clearSlot() is called", () => {
    const slots = createInitialRaidSlots(40);
    slots["1-1"] = { classId: "mage", specId: "fire", playerName: "" };
    slots["1-2"] = { classId: "priest", specId: "shadow", playerName: "" };
    slots["1-3"] = { classId: "warrior", specId: "fury", playerName: "" };
    slots["1-4"] = { classId: "hunter", specId: "beastMastery", playerName: "" };

    const result = clearSlot(slots, "1-2");

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
    expect(result["1-2"]).toBeNull();
    expect(result["1-3"]).toEqual({ classId: "warrior", specId: "fury", playerName: "" });
    expect(result["1-4"]).toEqual({ classId: "hunter", specId: "beastMastery", playerName: "" });
  });
  it("clears the entire raid when clearRaid() is called", () => {
    const slots = createInitialRaidSlots(40);

    for (const slotId of Object.keys(slots) as (keyof typeof slots)[]) {
      slots[slotId] = { classId: "mage", specId: "fire", playerName: "" };
    }

    const result = clearRaid(slots);

    expect(result).toEqual(createInitialRaidSlots(40));
  });
  it("keeps the current raid size if next expansion supports it", () => {
    const result = resolveExpansionRaidSize(20, {
      id: "classic",
      label: "Classic",
      enabled: true,
      raidSizes: [10, 20, 40],
    });

    expect(result).toEqual(20);
  });
  it("returns the correct next expansion and falls back to largest raid size if not supported", () => {
    const result = resolveExpansionChange(20, "wotlk", {
      id: "wotlk",
      label: "Wrath of the Lich King",
      enabled: true,
      raidSizes: [10, 25, 40],
    });

    expect(result.selectedExpansion).toEqual("wotlk");
    expect(result.selectedRaidSize).toEqual(40);
  });
  it("keeps overlapping slots when rendering a smaller raid size", () => {
    const slots = createInitialRaidSlots(40);

    slots["1-1"] = { classId: "mage", specId: "fire", playerName: "" };
    slots["6-1"] = { classId: "priest", specId: "shadow", playerName: "" };

    const result = reconcileRaidSlots(slots, 20);

    expect(result["1-1"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
    expect("6-1" in result).toBe(false);
  });

  it("clears specs whose class is invalid for the target expansion", () => {
    const slots = createInitialRaidSlots(25);

    slots["1-1"] = { classId: "deathKnight", specId: "frost", playerName: "" };
    slots["1-2"] = { classId: "mage", specId: "fire", playerName: "" };

    const classicClassIds = new Set([
      "druid",
      "hunter",
      "mage",
      "paladin",
      "priest",
      "rogue",
      "shaman",
      "warlock",
      "warrior",
    ] as const);

    const result = stripInvalidClassSpecs(slots, classicClassIds);

    expect(result["1-1"]).toBeNull();
    expect(result["1-2"]).toEqual({ classId: "mage", specId: "fire", playerName: "" });
  });
  it("moves a filled slot to another slot when dragged", () => {
    const slots = createInitialRaidSlots(40);
    slots["1-1"] = { classId: "mage", specId: "fire", playerName: "Valruna" };

    const result = moveRaidSlot(slots, "1-1", "1-2");

    expect(result["1-1"]).toBeNull();
    expect(result["1-2"]).toEqual({ classId: "mage", specId: "fire", playerName: "Valruna" });
  });
  it("persists renamed playerName after write and commit of new name", () => {
    const slots = createInitialRaidSlots(40);
    slots["1-1"] = { classId: "mage", specId: "fire", playerName: "Valruna" };
    const renamed = renameSlot(slots, "1-1", "Valruna2");

    writeWorkingRaidSlots(40, renamed);
    const result = readWorkingRaidSlots(40);

    expect(result.raidSlots["1-1"]).toEqual({
      classId: "mage",
      specId: "fire",
      playerName: "Valruna2",
    });
  });
});
