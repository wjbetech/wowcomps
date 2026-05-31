import { describe, expect, it } from "vite-plus/test";

import {
  chunkByPattern,
  getSpecsPanelRowPattern,
  getSpecsPanelRows,
} from "../../src/lib/specsPanelLayout";

describe("specsPanelLayout", () => {
  it("uses the correct row pattern for Classic WoW", () => {
    expect(getSpecsPanelRowPattern("classic", "wide")).toEqual([5, 4]);
    expect(getSpecsPanelRowPattern("classic", "medium")).toEqual([3, 3, 3]);
  });

  it("uses the correct row pattern for WotLK", () => {
    expect(getSpecsPanelRowPattern("wotlk", "wide")).toEqual([5, 5]);
    expect(getSpecsPanelRowPattern("wotlk", "medium")).toEqual([3, 3, 3, 3]);
  });

  it("chunks items by pattern and keeps leftover items in an additional row", () => {
    expect(chunkByPattern([1, 2, 3, 4, 5], [2, 2])).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("builds rows from expansion tier", () => {
    expect(getSpecsPanelRows([1, 2, 3, 4, 5, 6, 7, 8, 9], "classic", "medium")).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
