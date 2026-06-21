import type { RaidDebuffPanel } from "../types/raidDebuffs";

export default function RaidDebuffPanel({ raidDebuffs }: RaidDebuffPanel) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {raidDebuffs.map((debuff) => (
        <div key={debuff.id} className="relative h-8 w-8">
          <img
            src={debuff.iconPath}
            alt={debuff.label}
            title={debuff.label}
            className={`h-8 w-8 rounded-sm ${debuff.covered ? "opacity-100" : "opacity-50 grayscale"}`}
          />
          {debuff.tier === "base" && (
            <span
              className="absolute -right-0.5 -top-0.5 text-xl font-extrabold leading-none text-green-600"
              aria-label="Improved version available"
            >
              ↑
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
