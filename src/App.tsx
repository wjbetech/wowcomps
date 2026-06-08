// components
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";

// dnd-kit
import { DndContext, type DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

// libs
import { useRaidComposition } from "./lib/useRaidComposition";

// types
import type { PlacedSpec, RaidSlotId } from "./types/raidGrid";

export function App() {
  const {
    raidSlots,
    placeSpec,
    fillNextEmptySlot,
    selectedExpansion,
    selectExpansion,
    selectedRaidSize,
    selectRaidSize,
  } = useRaidComposition(40);

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

    placeSpec(over.id as RaidSlotId, draggedSpec);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <div className="relative z-10">
          <Navbar
            selectedRaidSize={selectedRaidSize}
            onSelectRaidSize={selectRaidSize}
            selectedExpansion={selectedExpansion}
            onSelectExpansion={selectExpansion}
          />

          <div className="pt-16">
            <div className="mx-auto grid w-full gap-8 px-4 py-8 lg:grid-cols-5 lg:px-6">
              <div className="lg:col-span-1"></div>
              <div className="lg:col-span-3 min-w-0">
                <div className="mx-auto w-full max-w-5xl">
                  <SpecsPanel
                    selectedExpansion={selectedExpansion}
                    fillNextSlot={fillNextEmptySlot}
                  />
                  <RaidGrid raidSlots={raidSlots} selectedRaidSize={selectedRaidSize} />
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
