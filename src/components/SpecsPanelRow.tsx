import type { ClassSpecCardProps } from "../types/specsPanel";
import { ClassSpecCard } from "./ClassSpecCard";

export function SpecsPanelRows({
  rows,
  fillNextSlot,
}: {
  rows: ClassSpecCardProps["group"][][];
  fillNextSlot: ClassSpecCardProps["fillNextSlot"];
}) {
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
