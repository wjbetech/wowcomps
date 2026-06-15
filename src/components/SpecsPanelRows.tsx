// core
import { ClassSpecCard } from "./ClassSpecCard";

// types
import type { SpecsPanelRowsProps } from "../types/specsPanel";

export function SpecsPanelRows({ rows, fillNextSlot }: SpecsPanelRowsProps) {
  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-4">
          {row.map((group) => (
            <ClassSpecCard key={group.classId} group={group} fillNextSlot={fillNextSlot} />
          ))}
        </div>
      ))}
    </>
  );
}
