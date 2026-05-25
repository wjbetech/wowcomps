import { useState } from "react";
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";
import SubNav from "./components/SubNav";
import type { Expansion } from "./data/expansionData";
import expansionColors from "./lib/expansionColors";
import ExpansionGlow from "./styles/expansionGlow";

export function App() {
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const theme = expansionColors[selectedExpansion];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <ExpansionGlow glow={theme.glow} />

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
