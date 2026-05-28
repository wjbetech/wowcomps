import { Search } from "lucide-react";
import type { Expansion } from "../data/expansionData";
import SubNav from "./SubNav";
import classicWoWLogo from "../assets/classicWoWIcon.png";

type NavbarProps = {
  selectedExpansion: Expansion;
  onSelectExpansion: (expansion: Expansion) => void;
};

export default function Navbar({ selectedExpansion, onSelectExpansion }: NavbarProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-stone-500 px-4 backdrop-blur lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(14rem,26rem)_minmax(0,1fr)] lg:gap-4 lg:px-6">
      <div className="flex min-w-0 items-center">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-amber-300 transition-colors hover:text-amber-400"
        >
          <img src={classicWoWLogo} alt="" className="h-8 w-8 object-contain" />
          <span className="hidden xl:block">WoWComps</span>
        </a>

        <SubNav selectedExpansion={selectedExpansion} onSelectExpansion={onSelectExpansion} />
      </div>

      <form
        className="hidden w-full justify-self-center lg:block lg:max-w-56 xl:max-w-72 2xl:max-w-md"
        role="search"
      >
        <label htmlFor="raid-comp-search" className="sr-only">
          <Search />
        </label>
        <div>
          <input
            id="raid-comp-search"
            type="search"
            placeholder="Search raid comps..."
            className="w-full rounded-lg bg-stone-700 px-4 py-1 text-sm font-normal"
          />
        </div>
      </form>

      <div className="flex items-center justify-self-end gap-4">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
}
