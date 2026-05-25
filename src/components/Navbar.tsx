import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-stone-500 p-6 flex flex-row justify-between backdrop-blur items-center">
      <a
        href="/"
        className="text-lg font-bold text-amber-300 transition-colors hover:text-amber-400"
      >
        WoWComps
      </a>
      <form className="mx-auto w-full max-w-md" role="search">
        <label htmlFor="raid-comp-search" className="sr-only">
          <Search />
        </label>
        <div>
          <input
            id="raid-comp-search"
            type="search"
            placeholder="Search raid comps..."
            className="w-full bg-stone-700 px-4 py-1 rounded-full font-normal text-sm"
          />
        </div>
      </form>
      <div className="flex flex-row gap-4">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
}
