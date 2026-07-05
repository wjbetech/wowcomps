import type { RaidBuffCoverageRow } from "../types/raidBuffs";

const TALENT_UPGRADES = {
  commandingPresence: ["battleShout", "commandingShout"],
} as const;

export function applyTalentUpgrades(rows: RaidBuffCoverageRow[]): RaidBuffCoverageRow[] {
  const hasTalent = rows.find((r) => r.id === "commandingPresence")?.covered ?? false;
  const targets = new Set<RaidBuffCoverageRow["id"]>(TALENT_UPGRADES.commandingPresence);

  return rows.map((row) => {
    if (!targets.has(row.id) || !row.covered) return row;
    return {
      ...row,
      tier: hasTalent ? "improved" : "base",
    };
  });
}
