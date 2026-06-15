// core
import { SpecsPanelRows } from "./SpecsPanelRows";

// data
import { getExpansionClassGroups } from "../data/expansionClasses";

// libs
import { getSpecsPanelRows } from "../lib/specsPanelLayout";

// types
import type { SpecsPanelProps } from "../types/specsPanel";

export default function SpecsPanel({ selectedExpansion, fillNextSlot }: SpecsPanelProps) {
  const classGroups = getExpansionClassGroups(selectedExpansion);

  const wideRows = getSpecsPanelRows(classGroups, selectedExpansion, "wide");
  const mediumRows = getSpecsPanelRows(classGroups, selectedExpansion, "medium");

  return (
    <section className="w-full pb-6">
      <div className="hidden 2xl:flex 2xl:flex-col 2xl:gap-4">
        <SpecsPanelRows rows={wideRows} fillNextSlot={fillNextSlot} />
      </div>
      <div className="flex flex-col gap-4 2xl:hidden">
        <SpecsPanelRows rows={mediumRows} fillNextSlot={fillNextSlot} />
      </div>
    </section>
  );
}
