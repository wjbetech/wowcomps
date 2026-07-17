import { parseOffsetLines } from "../lib/parseOffsetLines";
import type { WoWTooltip, WoWTooltipContent, WoWTooltipSection } from "../types/tooltips";
import SplitDiagonalBuffIcon from "./SplitDiagonalBuffIcon";

function TooltipSectionFields({ section }: { section: WoWTooltipSection }) {
  return (
    <>
      {section.talent && <p className="text-xs text-[#9d9d9d]">Talent</p>}
      {(section.cost || section.range) && (
        <div className="flex justify-between gap-2 text-xs text-white">
          <span>{section.cost}</span>
          <span className="text-right">{section.range}</span>
        </div>
      )}
      {(section.cast || section.rightCooldown) && (
        <div className="flex justify-between gap-2 text-xs text-white">
          <span>{section.cast}</span>
          <span className="text-right">{section.rightCooldown}</span>
        </div>
      )}
      {section.requires?.map((line) => (
        <p key={line} className="text-xs leading-snug text-white">
          {line}
        </p>
      ))}
      {section.tools && (
        <div className="text-xs leading-snug text-white">
          <p>Tools:</p>
          <p className="pl-2">{section.tools}</p>
        </div>
      )}
      {section.description && (
        <p className="mt-1 whitespace-pre-line text-xs leading-snug text-[#ffd100]">
          {section.description}
        </p>
      )}
    </>
  );
}

function useSplitRowLayout(content: WoWTooltipContent): boolean {
  return Boolean(content.splitIcon) && (content.sections?.length ?? 0) > 1;
}

function TooltipBody({
  content,
  splitRowLayout,
}: {
  content: WoWTooltipContent;
  splitRowLayout: boolean;
}) {
  if (content.sections?.length) {
    return (
      <div className={splitRowLayout ? "mt-1 flex items-start gap-2" : undefined}>
        {content.sections.map((section, index) => (
          <div
            key={`${section.title}-${index}`}
            className={
              splitRowLayout
                ? `w-56 shrink-0 ${index > 0 ? "border-l border-gray-700 pl-2" : ""}`
                : index > 0
                  ? "mt-2 border-t border-gray-700 pt-2"
                  : "mt-1"
            }
          >
            <p className="text-xs font-semibold text-white">{section.title}</p>
            <TooltipSectionFields section={section} />
            {section.footerLines?.map((line) => (
              <p key={line} className="mt-1 text-xs leading-snug text-cyan-500">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {content.talentLabel && (
        <p className="text-xs leading-snug text-[#1eff00]">{content.talentLabel}</p>
      )}
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
      {content.tools && (
        <div className="text-xs leading-snug text-white">
          <p>Tools:</p>
          <p className="pl-2">{content.tools}</p>
        </div>
      )}
      {content.description && (
        <p className="mt-1 whitespace-pre-line text-xs leading-snug text-[#ffd100]">
          {content.description}
        </p>
      )}
      {content.talentDescription && (
        <p className="mt-1 whitespace-pre-line text-xs leading-snug text-[#1eff00]">
          {content.talentDescription}
        </p>
      )}
      {content.offsetDescription && (
        <div
          className="mt-0.5 pl-2 grid grid-cols-[1.5ch_max-content_max-content_1fr] text-xs leading-snug text-[#ffd100]"
          style={{ fontFamily: "var(--font-wow-tooltip)" }}
        >
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
    </>
  );
}

export default function CoverageIconTooltip({ content, children }: WoWTooltip) {
  const splitRowLayout = useSplitRowLayout(content);

  return (
    <div className="group relative">
      {children}
      <div
        role="tooltip"
        className={`pointer-events-none absolute bottom-full z-50 mb-1 hidden group-hover:flex group-hover:items-start group-hover:gap-1 ${
          splitRowLayout ? "left-0" : "right-0"
        }`}
      >
        {content.splitIcon ? (
          <div className="h-9 w-9 shrink-0 [&>div]:h-full [&>div]:w-full">
            <SplitDiagonalBuffIcon
              triangleClassName="border border-gray-600"
              topLeft={content.splitIcon.topLeft}
              bottomRight={content.splitIcon.bottomRight}
            />
          </div>
        ) : (
          content.iconPath && (
            <img
              src={content.iconPath}
              alt={content.title}
              className="h-9 w-9 shrink-0 rounded-sm border border-gray-600"
            />
          )
        )}
        <div
          className={`bg-gray-950 border border-gray-600 rounded-sm py-1 px-2 ${
            splitRowLayout ? "w-max shrink-0" : "min-w-0 w-64"
          }`}
          style={{ fontFamily: "var(--font-wow-tooltip)" }}
        >
          {!content.hideTitle && content.title && (
            <p className="text-[13px] text-white">{content.title}</p>
          )}
          <TooltipBody content={content} splitRowLayout={splitRowLayout} />
          {!content.sections?.length &&
            content.footerLines?.map((line) => (
              <p key={line} className="mt-1 text-xs leading-snug text-cyan-500">
                {line}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
