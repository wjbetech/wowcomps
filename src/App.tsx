import { useState } from "react";
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";
import SubNav from "./components/SubNav";
import type { Expansion } from "./data/expansionData";
import expansionColors from "./lib/expansionColors";

export function App() {
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const theme = expansionColors[selectedExpansion];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 transition-[background,box-shadow] duration-500"
        style={{
          background: `
            linear-gradient(to bottom, rgb(${theme.glow} / 0.12), transparent 7%),
            linear-gradient(to right, rgb(${theme.glow} / 0.08), transparent 6%),
            linear-gradient(to left, rgb(${theme.glow} / 0.08), transparent 6%),
            radial-gradient(circle at top left, rgb(${theme.glow} / 0.32), transparent 10%),
            radial-gradient(circle at top right, rgb(${theme.glow} / 0.32), transparent 10%),
            radial-gradient(circle at bottom left, rgb(${theme.glow} / 0.24), transparent 10%),
            radial-gradient(circle at bottom right, rgb(${theme.glow} / 0.24), transparent 10%)
          `,
          boxShadow: `
            inset 0 0 18px rgb(${theme.glow} / 0.3),
            inset 0 0 36px rgb(${theme.glow} / 0.2),
            inset 0 0 64px rgb(${theme.glow} / 0.1)
          `,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <SubNav selectedExpansion={selectedExpansion} onSelectExpansion={setSelectedExpansion} />

        <div className="mx-auto grid w-full gap-8 px-4 py-8 lg:grid-cols-5 lg:px-6">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-3">
            <SpecsPanel />
            <RaidGrid />
          </div>
          <div className="lg:col-span-1">
            <RightSideBar />
          </div>
        </div>
      </div>
    </main>
  );
}
