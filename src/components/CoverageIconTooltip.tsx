import type { WoWTooltip } from "../types/tooltips";

export default function CoverageIconTooltip({ content, children }: WoWTooltip) {
  return (
    <div className="group relative">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-1 hidden -translate-x-1/2 group-hover:flex group-hover:items-start group-hover:gap-1"
      >
        {content.iconPath && (
          <img
            src={content.iconPath}
            alt={content.title}
            className=" h-9 w-9 shrink-0 rounded-sm border border-gray-600"
          />
        )}
        <div className="min-w-0 bg-gray-950 border border-gray-600 rounded-sm py-1 px-2 w-48">
          <p className="text-[13px] font-bold text-gray-300">{content.title}</p>
          {content.lines.map((line, index) => (
            <p
              key={`${line.text}-${index}`}
              className={`text-xs ${
                line.tone === "green"
                  ? "text-[#1eff00]"
                  : line.tone === "gold"
                    ? "text-[#ffd100]"
                    : line.tone === "white"
                      ? "text-gray-300"
                      : "text-[#9d9d9d]"
              }`}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
