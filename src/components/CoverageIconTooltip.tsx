import { parseOffsetLines } from "../lib/parseOffsetLines";
import type { WoWTooltip } from "../types/tooltips";

export default function CoverageIconTooltip({ content, children }: WoWTooltip) {
  return (
    <div className="group relative">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full right-0 z-50 mb-1 hidden group-hover:flex group-hover:items-start group-hover:gap-1"
      >
        {content.iconPath && (
          <img
            src={content.iconPath}
            alt={content.title}
            className="h-9 w-9 shrink-0 rounded-sm border border-gray-600"
          />
        )}
        <div className="min-w-0 bg-gray-950 border border-gray-600 rounded-sm py-1 px-2 w-64">
          <p className="text-[13px] font-bold text-white">{content.title}</p>
          {content.talent && <p className="text-xs text-[#9d9d9d]">Talent</p>}
          {(content.cost || content.range) && (
            <div className="flex justify-between gap-2 text-xs text-white">
              <span>{content.cost}</span>
              <span className="text-right">{content.range}</span>
            </div>
          )}
          {(content.cast || content.rightCooldown) && (
            <div className="flex justify-between gap-2 text-xs text-white">
              <span>{content.cast}</span>
              <span className="text-right">{content.rightCooldown}</span>
            </div>
          )}
          {content.requires?.map((line) => (
            <p key={line} className="text-xs leading-snug text-white">
              {line}
            </p>
          ))}
          {content.description && (
            <p className="mt-1 whitespace-pre-line text-xs leading-snug text-[#ffd100]">
              {content.description}
            </p>
          )}
          {content.offsetDescription && (
            <div className="mt-0.5 pl-2 grid grid-cols-[1.5ch_max-content_max-content_1fr] text-xs leading-snug text-[#ffd100]">
              {parseOffsetLines(content.offsetDescription).map(({ count, unit, value }) => (
                <div key={`${count}-${unit}`} className="contents">
                  <span className="text-right tabular-nums mr-1">{count}</span>
                  <span>{unit}</span>
                  <span className="mr-1">:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
