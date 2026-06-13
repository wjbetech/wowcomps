// core
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import RaidGrid from "./components/RaidGrid";
import RightSideBar from "./components/RightSideBar";
import SpecsPanel from "./components/SpecsPanel";

// data
import { getClassDisplay, getSpecDisplay } from "./data/expansionClasses";

// dnd-kit
import {
  DndContext,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

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
    clearSlot,
    renameSlot,
  } = useRaidComposition(40);

  const [activeRaidSlot, setActiveRaidSlot] = useState<{
    sourceSlotId: RaidSlotId;
    placedSpec: PlacedSpec;
  } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    const dragData = event.active.data.current;

    if (dragData?.placedSpec && dragData?.sourceSlotId) {
      setActiveRaidSlot({
        sourceSlotId: dragData.sourceSlotId,
        placedSpec: dragData.placedSpec,
      });
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const dragData = active.data.current;

    if (!over) {
      setActiveRaidSlot(null);
      return;
    }

    if (dragData?.placedSpec && dragData?.sourceSlotId) {
      const targetSlotId = over.id as RaidSlotId;

      placeSpec(targetSlotId, dragData.placedSpec);

      if (dragData.sourceSlotId !== targetSlotId) {
        clearSlot(dragData.sourceSlotId);
      }

      setActiveRaidSlot(null);
      return;
    }

    if (dragData?.classId && dragData?.specId) {
      placeSpec(over.id as RaidSlotId, dragData as PlacedSpec);
      setActiveRaidSlot(null);
      return;
    }

    setActiveRaidSlot(null);
  }

  function handleDragCancel() {
    setActiveRaidSlot(null);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-stone-800 text-stone-100">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        sensors={sensors}
      >
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
                  <RaidGrid
                    raidSlots={raidSlots}
                    selectedRaidSize={selectedRaidSize}
                    onClearSlot={clearSlot}
                    onRenameSlot={renameSlot}
                    activeDraggedSlotId={activeRaidSlot?.sourceSlotId}
                  />
                </div>
              </div>
              <div className="lg:col-span-1">
                <RightSideBar
                  raidSlots={raidSlots}
                  selectedExpansion={selectedExpansion}
                  selectedRaidSize={selectedRaidSize}
                />
              </div>
            </div>
          </div>
        </div>
        <DragOverlay>
          {activeRaidSlot ? (
            <div
              style={{ borderColor: getClassDisplay(activeRaidSlot.placedSpec.classId).color }}
              className="flex h-10 items-center gap-2 rounded-xl border bg-stone-900/90 px-3 text-sm font-extrabold shadow-lg"
            >
              {getSpecDisplay(activeRaidSlot.placedSpec.classId, activeRaidSlot.placedSpec.specId)
                ?.iconLink ? (
                <img
                  src={
                    getSpecDisplay(
                      activeRaidSlot.placedSpec.classId,
                      activeRaidSlot.placedSpec.specId,
                    )?.iconLink
                  }
                  alt=""
                  className="h-6 w-6 rounded-sm object-cover"
                />
              ) : null}
              <span>
                {activeRaidSlot.placedSpec.playerName ||
                  getSpecDisplay(
                    activeRaidSlot.placedSpec.classId,
                    activeRaidSlot.placedSpec.specId,
                  )?.label}
              </span>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
