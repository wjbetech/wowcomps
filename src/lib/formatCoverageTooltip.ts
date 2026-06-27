import { getClassCatalog } from "../data/expansionClasses";
import type { SpecId } from "../types/classesSpecs";
import type { CoverageTooltip } from "../types/tooltips";

function specLabels(specIds: SpecId[]): string[] {
  const catalog = getClassCatalog();
  return specIds.flatMap((specId) => {
    for (const cls of catalog) {
      const spec = cls.specs.find((s) => s.specId === specId);
      if (spec) return [spec.label];
    }
    return [];
  });
}

export function formatCoverageTooltip(row: CoverageTooltip): string {
  const status = !row.covered
    ? "Missing"
    : row.tier === "base"
      ? "Covered (base) - improved version available!"
      : "Covered";

  const buffProviders = specLabels(row.sourceSpecIds).join(", ");
  const buffProviderLine = buffProviders.length > 0 ? `\nProvided by: ${buffProviders}` : "";

  return `${row.label}\n${status}${buffProviderLine}`;
}
