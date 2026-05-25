import { expansionsData, type Expansion } from "../data/expansionData";
import expansionColors from "../lib/expansionColors";

type SubNavProps = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
};

export default function SubNav({ selectedExpansion, onSelectExpansion }: SubNavProps) {
  return (
    <header className="fixed inset-x-0 top-16 z-40 grid h-12 w-full grid-cols-5 items-center border-b border-stone-500 bg-stone-850/80 py-2 text-center backdrop-blur">
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
              "mx-12 rounded-md px-3 py-1 text-sm font-extrabold transition",
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
    </header>
  );
}
