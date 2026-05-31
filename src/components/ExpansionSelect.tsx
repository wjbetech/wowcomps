// data
import { expansionsData } from "../data/expansionData";

// libs
import expansionColors from "../lib/expansionColors";

// types
import type { Expansion } from "../types/expansions";
import type { ExpansionSelectProps } from "../types/expansions";

export default function ExpansionSelect({
  selectedExpansion,
  onSelectExpansion,
}: ExpansionSelectProps) {
  const selectedTheme = expansionColors[selectedExpansion];

  return (
    <>
      <label className="sr-only" htmlFor="expansion-select">
        Expansion
      </label>

      <select
        id="expansion-select"
        value={selectedExpansion}
        onChange={(event) => onSelectExpansion(event.target.value as Expansion)}
        className={[
          "ml-4 w-56 rounded-md border px-3 py-1.5 text-sm font-extrabold outline-none",
          selectedTheme.text,
        ].join(" ")}
        style={{
          background: getExpansionSelectBackground(selectedTheme.glow),
          borderColor: `rgb(${selectedTheme.glow} / 0.45)`,
        }}
      >
        {expansionsData.map((expansion) => {
          const theme = expansionColors[expansion.id];

          return (
            <option
              key={expansion.id}
              value={expansion.id}
              disabled={!expansion.enabled}
              className={[
                "bg-stone-900",
                theme.text,
                theme.activeBg,
                !expansion.enabled ? "text-stone-500" : "",
              ].join(" ")}
            >
              {expansion.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

function getExpansionSelectBackground(rgb: string) {
  return `linear-gradient(135deg, rgb(${rgb} / 0.2), rgb(28 25 23) 60%, rgb(${rgb} / 0.1))`;
}
