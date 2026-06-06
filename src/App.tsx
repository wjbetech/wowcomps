// core
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";

// dnd-kit
import { DndContext, type DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

// libs
import { usePersistedRaidSlots } from "./lib/usePersistedRaidSlots";
import { fillNextEmptySlot, placeSpec } from "./lib/raidComposition";

// types
import type { Expansion } from "./types/expansions";
import type { PlacedSpec, RaidSlotId } from "./types/raidGrid";

export function App() {
  const [selectedExpansion, setSelectedExpansion] = useState<Expansion>("classic");
  const [raidSlots, setRaidSlots] = usePersistedRaidSlots();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const draggedSpec = active.data.current as PlacedSpec | undefined;

    if (!draggedSpec) return;

    setRaidSlots((prev) => placeSpec(prev, over.id as RaidSlotId, draggedSpec));
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <div className="relative z-10">
          <Navbar selectedExpansion={selectedExpansion} onSelectExpansion={setSelectedExpansion} />

          <div className="pt-16">
            <div className="mx-auto grid w-full gap-8 px-4 py-8 lg:grid-cols-5 lg:px-6">
              <div className="lg:col-span-1"></div>
              <div className="lg:col-span-3 min-w-0">
                <div className="mx-auto w-full max-w-5xl">
                  <SpecsPanel
                    selectedExpansion={selectedExpansion}
                    fillNextSlot={(spec) => setRaidSlots((prev) => fillNextEmptySlot(prev, spec))}
                  />
                  <RaidGrid raidSlots={raidSlots} />
                </div>
              </div>
              <div className="lg:col-span-1">
                <RightSideBar raidSlots={raidSlots} selectedExpansion={selectedExpansion} />
              </div>
            </div>
          </div>
        </div>
      </DndContext>
    </main>
  );
}
