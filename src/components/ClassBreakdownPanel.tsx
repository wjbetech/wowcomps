import type { ClassBreakdownPanel } from "../lib/classesHandler";

export default function ClassBreakdownPanel({ breakdown }: ClassBreakdownPanel) {
  return (
    <div className="space-y-2">
      {breakdown.map((entry) => (
        <div key={entry.classId} className="flex justify-between">
          <span style={{ color: entry.color }}>{entry.label}</span>
          <span className="text-stone-400">{entry.count}</span>
        </div>
      ))}
    </div>
  );
}
