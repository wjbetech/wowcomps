import { expansionsData, type Expansion } from "../data/expansionData";
import expansionColors from "../lib/expansionColors";

type SubNavProps = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
};

export default function SubNav({ selectedExpansion, onSelectExpansion }: SubNavProps) {
  return (
    <header className="fixed inset-x-0 top-16 z-40 flex h-12 w-full items-center border-b border-stone-500 bg-stone-850/80 px-4 backdrop-blur">
      <div className="mx-auto hidden w-full max-w-6xl grid-cols-5 items-center gap-2 xl:grid">
        {expansionsData.map((expansion) => {
          const currentExp = expansion.id === selectedExpansion;
          const theme = expansionColors[expansion.id];

          return (
            <button
              key={expansion.id}
              type="button"
              onClick={() => {
                if (expansion.enabled) {
                  onSelectExpansion(expansion.id);
                }
              }}
              disabled={!expansion.enabled}
              className={[
                "min-w-0 rounded-md px-2 py-1 text-xs font-extrabold transition 2xl:px-3 2xl:text-sm",
                "truncate",
                theme.text,
                theme.hoverBg,
                currentExp ? theme.activeBg : "",
                !expansion.enabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
              ].join(" ")}
            >
              {expansion.label}
            </button>
          );
        })}
      </div>

      <label className="sr-only" htmlFor="expansion-select">
        Expansion
      </label>

      <select
        id="expansion-select"
        value={selectedExpansion}
        onChange={(event) => onSelectExpansion(event.target.value as Expansion)}
        className={[
          "mx-auto block w-full max-w-sm rounded-md border border-stone-600 bg-stone-900 px-3 py-1.5 text-sm font-semibold outline-none xl:hidden",
          expansionColors[selectedExpansion].text,
        ].join(" ")}
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
    </header>
  );
}
