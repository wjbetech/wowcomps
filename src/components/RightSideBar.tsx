import { ChevronDown } from "lucide-react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function SidebarSection({ title, children, defaultOpen = true }: SectionProps) {
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

export default function RightSidebar() {
  return (
    <aside className="lg:sticky lg:top-6 lg:self-start">
      <div className="space-y-4">
        <SidebarSection title="Class Breakdown" defaultOpen>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#FF7D0A]">Druid</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3FC7EB]">Mage</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F58CBA]">Paladin</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white">Priest</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#FFF569]">Rogue</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#0070DE]">Shaman</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8788EE]">Warlock</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#C79C6E]">Warrior</span>
              <span className="text-stone-400">0</span>
            </div>
          </div>
        </SidebarSection>

        <SidebarSection title="Party Buffs">
          <div className="space-y-3">
            <div>
              <p className="font-medium text-stone-200">Group 1</p>
              <p className="text-stone-400">No tracked buffs yet</p>
            </div>
            <div>
              <p className="font-medium text-stone-200">Group 2</p>
              <p className="text-stone-400">No tracked buffs yet</p>
            </div>
          </div>
        </SidebarSection>

        <SidebarSection title="Raid Buffs / Debuffs">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Raid Buffs</span>
              <span className="text-stone-400">0</span>
            </div>
            <div className="flex justify-between">
              <span>Raid Debuffs</span>
              <span className="text-stone-400">0</span>
            </div>
          </div>
        </SidebarSection>
      </div>
    </aside>
  );
}
