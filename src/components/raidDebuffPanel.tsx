import type { RaidDebuffPanel } from "../types/raidDebuffs";

export default function RaidDebuffPanel({ raidDebuffs }: RaidDebuffPanel) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {raidDebuffs.map((debuff) => (
        <img
          key={debuff.id}
          src={debuff.iconPath}
          alt={debuff.label}
          title={debuff.label}
          className="h-6 w-6 rounded-sm object-cover border-2 border-red-600"
        />
      ))}
    </div>
  );
}
