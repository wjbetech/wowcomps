import { expansionsData, type Expansion } from "../data/expansionData";
import expansionColors from "../lib/expansionColors";

type SubNavProps = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
};

export default function SubNav({ selectedExpansion, onSelectExpansion }: SubNavProps) {
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
