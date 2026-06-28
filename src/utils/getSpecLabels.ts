import { getClassCatalog } from "../data/expansionClasses";
import type { SpecId } from "../types/classesSpecs";

export default function getSpecLabels(specIds: SpecId[]): string[] {
  const catalog = getClassCatalog();
  return specIds.flatMap((specId) => {
    for (const cls of catalog) {
      const spec = cls.specs.find((s) => s.specId === specId);
      if (spec) return [spec.label];
    }
    return [];
  });
}
