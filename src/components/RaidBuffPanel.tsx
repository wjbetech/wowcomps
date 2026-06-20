import type { RaidBuffPanel } from "../types/raidBuffs";

export default function RaidBuffPanel({ buffs }: RaidBuffPanel) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {buffs.map((buff) => (
        <img
          key={buff.id}
          src={buff.iconPath}
          alt={buff.label}
          title={buff.label}
          className="h-6 w-6 rounded-sm object-cover border-2 border-green-600"
        />
      ))}
    </div>
  );
}
