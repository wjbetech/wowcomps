import { expansionClasses } from "../data/expansionClasses";
import type { Expansion } from "../data/expansionData";
import classColors from "../data/classColors";

type SpecsPanelProps = {
  selectedExpansion: Expansion;
};

export default function SpecsPanel({ selectedExpansion }: SpecsPanelProps) {
  const classGroups = expansionClasses[selectedExpansion];

  return (
    <section className="mx-auto w-full max-w-5xl pb-6">
      <div className="flex flex-wrap gap-4">
        {classGroups.map((group) => (
          <article
            key={group.classId}
            className="min-w-45 rounded-xl p-2"
            style={{
              background: `linear-gradient(
                  180deg,
                  rgb(from ${classColors[group.classId]} r g b / 0.18),
                  rgb(from ${classColors[group.classId]} r g b / 0.06)
                )`,
            }}
          >
            <div className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-stone-300 mb-2">
              {group.label}
            </div>
            <div className="mb-1 flex flex-wrap justify-center gap-2">
              {group.specs.map((spec) => (
                <button
                  key={`${group.classId}-${spec.specId}`}
                  type="button"
                  className="group flex items-center justify-center rounded-lg transition"
                  title={spec.label}
                >
                  {spec.iconLink ? (
                    <img
                      src={spec.iconLink}
                      alt={spec.label}
                      className="h-8 w-8 rounded-sm object-cover"
                    />
                  ) : (
                    <span className="text-[10px] text-stone-500">?</span>
                  )}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
