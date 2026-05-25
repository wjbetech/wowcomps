import { useState } from "react";
import ExpansionGlow from "./styles/expansionGlow";

// components
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";
import SubNav from "./components/SubNav";

// libs
import expansionColors from "./lib/expansionColors";
import { createInitialRaidSlots } from "./lib/grid";

// data
import type { Expansion } from "./data/expansionData";

// types
import type { PlacedSpec, RaidSlots } from "./types/grid";

// dnd-kit
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

export function App() {
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const theme = expansionColors[selectedExpansion];
  const [raidSlots, setRaidSlots] = useState<RaidSlots>(() => createInitialRaidSlots());

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const draggedSpec = active.data.current as PlacedSpec | undefined;

    if (!draggedSpec) return;

    setRaidSlots((prev) => ({
      ...prev,
      [String(over.id)]: draggedSpec,
    }));
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <ExpansionGlow glow={theme.glow} />

      <DndContext onDragEnd={handleDragEnd}>
        <div className="relative z-10">
          <Navbar />
          <SubNav selectedExpansion={selectedExpansion} onSelectExpansion={setSelectedExpansion} />

          <div className="pt-28">
            <div className="mx-auto grid w-full gap-8 px-4 py-8 lg:grid-cols-5 lg:px-6">
              <div className="lg:col-span-1"></div>
              <div className="lg:col-span-3">
                <SpecsPanel selectedExpansion={selectedExpansion} />
                <RaidGrid raidSlots={raidSlots} />
              </div>
              <div className="lg:col-span-1">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </DndContext>
    </main>
  );
}
