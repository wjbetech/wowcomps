import { createInitialRaidSlots } from "../../src/lib/grid";
import { getRaidDebuffCoverage } from "../../src/lib/raidDebuffHandler";

export const AP_REDUCTION_IDS = new Set([
  "demoralizingShout",
  "demoralizingRoar",
  "improvedDemoralizingShout",
  "improvedDemoralizingRoar",
]);

export function getClassicApReduction(
  specId: "protectionWarrior" | "feralTank" | "arms" | "fury",
  classId: "warrior" | "druid",
) {
  const raidSlots = createInitialRaidSlots(40);

  raidSlots["1-1"] = { specId, classId };
  const row = getRaidDebuffCoverage(raidSlots, "classic", 40).find((entry) =>
    AP_REDUCTION_IDS.has(entry.id),
  );

  return row?.tier;
}
