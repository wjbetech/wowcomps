import { describe, expect, it } from "vite-plus/test";
import { createInitialRaidSlots } from "../../src/lib/grid";
import { getPartyBuffCoverage } from "../../src/lib/partyBuffHandler";

describe("getPartyBuffCoverage", () => {
  it("returns per-group buff coverage for tbc", () => {
    const raidSlots = createInitialRaidSlots(25);
    raidSlots["1-1"] = { specId: "balance", classId: "druid" };
    raidSlots["2-1"] = { specId: "fire", classId: "mage" };

    const groups = getPartyBuffCoverage(raidSlots, "tbc", 25);
    const group1 = groups.find((group) => group.groupId === 1);
    const group2 = groups.find((group) => group.groupId === 2);

    expect(group1?.buffs.find((buff) => buff.buffId === "moonkinAura")?.covered).toBe(true);
    expect(group2?.buffs.find((buff) => buff.buffId === "moonkinAura")?.covered).toBe(false);
  });

  it("returns an empty list when the expansion has no party buffs", () => {
    const raidSlots = createInitialRaidSlots(25);

    expect(getPartyBuffCoverage(raidSlots, "wotlk", 25)).toEqual([]);
  });
});
