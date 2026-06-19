import { ChevronDown } from "lucide-react";
import type { RightSectionProps } from "../types/rightSection";

export function SidebarSection({ title, children, defaultOpen = true }: RightSectionProps) {
  return (
    <details
      open={defaultOpen}
      className="overflow-hidden rounded-2xl border border-stone-700/70 bg-stone-900/80"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-stone-100">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 text-stone-400" />
      </summary>

      <div className="border-t border-stone-700/60 px-4 py-4 text-sm text-stone-300">
        {children}
      </div>
    </details>
  );
}
