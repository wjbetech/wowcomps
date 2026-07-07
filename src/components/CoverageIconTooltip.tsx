import type { WoWTooltip } from "../types/tooltips";

export default function CoverageIconTooltip({ content, children }: WoWTooltip) {
  const hasMeta = (content.meta?.length ?? 0) > 0;
  const hasDescription = Boolean(content.description?.trim());
  const hasFooter = (content.footerLines?.length ?? 0) > 0;
  const showFooterSeparator = hasMeta || hasDescription;

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
            className="h-9 w-9 shrink-0 rounded-sm border border-gray-600"
          />
        )}
        <div className="min-w-0 bg-gray-950 border border-gray-600 rounded-sm py-1 px-2 w-48">
          <p className="text-[13px] font-bold text-gray-300">{content.title}</p>

          {content.meta?.map((line) => (
            <p key={line} className="text-xs leading-snug text-white">
              {line}
            </p>
          ))}

          {content.description && (
            <p
              className={`whitespace-pre-line text-xs leading-snug text-[#ffd100] ${hasMeta ? "mt-1" : ""}`}
            >
              {content.description}
            </p>
          )}

          {hasFooter && (
            <div className={showFooterSeparator ? "mt-1" : ""}>
              {content.footerLines?.map((line, index) => (
                <p key={`${line}-${index}`} className="text-xs leading-snug text-[#9d9d9d]">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
