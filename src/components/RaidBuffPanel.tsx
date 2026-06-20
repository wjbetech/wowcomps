import type { RaidBuffPanel } from "../types/raidBuffs";

export default function RaidBuffPanel({ buffs }: RaidBuffPanel) {
  return (
    <div className="flex flex-wrap gap-0.5">
      {buffs.map((buff) => (
        <div key={buff.id} className="relative h-8 w-8">
          <img
            src={buff.iconPath}
            alt={buff.label}
            title={buff.label}
            className={`h-8 w-8 rounded-sm ${
              buff.covered ? "opacity-100" : "opacity-50 grayscale"
            }`}
          />
          {buff.tier === "base" && (
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
