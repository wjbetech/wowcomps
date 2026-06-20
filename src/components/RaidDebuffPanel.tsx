import type { RaidDebuffPanel } from "../types/raidDebuffs";

export default function RaidDebuffPanel({ raidDebuffs }: RaidDebuffPanel) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {raidDebuffs.map((debuff) => (
        <img
          key={debuff.id}
          src={debuff.iconPath}
          alt={debuff.label}
          title={debuff.label}
          className={`h-8 w-8 rounded-sm ${debuff.covered ? "opacity-100" : "opacity-50 grayscale"}`}
        ></img>
      ))}
    </div>
  );
}
