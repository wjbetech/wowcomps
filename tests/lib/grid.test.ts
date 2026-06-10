import { describe, expect, it } from "vite-plus/test";

// libs
import { createInitialRaidSlots, getRaidGridModel } from "../../src/lib/grid";

describe("grid", () => {
  it("builds a 10-player grid with 2 groups of 5 slots", () => {
    const result = getRaidGridModel(10);

    expect(result).toHaveLength(2);
    expect(result[0].slots).toHaveLength(5);
    expect(result[1].slots).toHaveLength(5);
  });
  it("builds a 20-player grid with 4 groups of 5 slots", () => {
    const result = getRaidGridModel(20);

    expect(result).toHaveLength(4);
    expect(result[0].slots).toHaveLength(5);
    expect(result[1].slots).toHaveLength(5);
    expect(result[2].slots).toHaveLength(5);
    expect(result[3].slots).toHaveLength(5);
  });
  it("builds a 25-player grid with 5 groups of 5 slots", () => {
    const result = getRaidGridModel(25);

    expect(result).toHaveLength(5);
    expect(result[0].slots).toHaveLength(5);
    expect(result[1].slots).toHaveLength(5);
    expect(result[2].slots).toHaveLength(5);
    expect(result[3].slots).toHaveLength(5);
    expect(result[4].slots).toHaveLength(5);
  });
  it("builds a 40-player grid with 8 groups of 5 slots", () => {
    const result = getRaidGridModel(40);

    expect(result).toHaveLength(8);
    expect(result[0].slots).toHaveLength(5);
    expect(result[1].slots).toHaveLength(5);
    expect(result[2].slots).toHaveLength(5);
    expect(result[3].slots).toHaveLength(5);
    expect(result[4].slots).toHaveLength(5);
    expect(result[5].slots).toHaveLength(5);
    expect(result[6].slots).toHaveLength(5);
    expect(result[7].slots).toHaveLength(5);
  });
  it("creates only the slot ids needed for a 10-player raid", () => {
    const result = createInitialRaidSlots(10);

    expect(result["1-1"]).toBeNull();
    expect(result["1-5"]).toBeNull();
    expect(result["2-5"]).toBeNull();
    expect("3-1" in result).toBe(false);
  });
  it("created 25 empty slot entries for a 25-player raid", () => {
    const result = createInitialRaidSlots(25);

    expect(Object.keys(result)).toHaveLength(25);
    expect(Object.values(result).every((slot) => slot === null)).toBe(true);
  });
  it("created 40 empty slot entries for a 40-player raid", () => {
    const result = createInitialRaidSlots(40);

    expect(Object.keys(result)).toHaveLength(40);
    expect(Object.values(result).every((slot) => slot === null)).toBe(true);
  });
});
