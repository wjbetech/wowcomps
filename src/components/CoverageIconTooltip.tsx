import type { CoverageTooltipIcon } from "../types/tooltips";

export default function CoverageIconTooltip({ tooltip, children }: CoverageTooltipIcon) {
  return (
    <div className="group relative">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden w-max max-w-48 -translate-x-1/2 rounded bg-neutral-900 px-2 py-1 text-xs text-white shadow group-hover:block whitespace-pre-line"
      >
        {tooltip}
      </div>
    </div>
  );
}
