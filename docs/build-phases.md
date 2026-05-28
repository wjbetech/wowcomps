## Build Phases

### Phase 0: Current Baseline

- [x] App shell, navbar, expansion selector, specs panel, raid grid, and sidebar shell exist.
- [x] Expansion, class, spec, class color, and icon data exist.
- [x] Drag-and-drop placement works.
- [x] Clicking a spec fills the next empty slot.
- [x] Working raid slots persist through refresh.
- [x] Specs panel responsive row layout exists.
- [x] Class breakdown reads current raid slots.

### Phase 1: Architecture Stabilization

- [ ] Delete stale code: old expansion glow component, unused expansion map, old SubNav CSS variables, unused expansion hover tokens.
- [ ] Rename SubNav to ExpansionSelect.
- [ ] Tighten domain types: ClassId, SpecId, RaidSlotId, PlacedSpec.
- [ ] Type class colors by ClassId instead of string.
- [ ] Remove derived display data from PlacedSpec where possible.
- [ ] Remove callback functions from drag payload data.
- [ ] Add basic helper tests for class breakdown, specs panel layout, and storage normalization.

### Phase 2: Domain Data Model

- [ ] Consolidate class labels, colors, specs, spec labels, and icons into one typed class/spec catalog.
- [ ] Keep expansion class membership as ordered class ID lists.
- [ ] Add data access helpers for expansion config, classes, specs, and validation.
- [ ] Rename expansion color glow token to accentRgb or similar.
- [ ] Remove or justify expansion themeKey.
- [ ] Add data-alignment checks if metadata remains split across files.

### Phase 3: Raid Composition State Layer

- [ ] Move raid mutations out of App into useRaidComposition or a reducer.
- [ ] Add actions: placeSpec, fillNextEmptySlot, clearSlot, clearRaid, renameSlot.
- [ ] Add expansion-change policy.
- [ ] Add selectedRaidSize state.
- [ ] Make raid behavior testable without rendering the app.
- [ ] Keep App focused on layout and component wiring.

### Phase 4: Raid Grid Model And Raid Sizes

- [ ] Replace duplicated group/slot constants with one raid grid model helper.
- [ ] Generate render groups and initial slot state from the same model.
- [ ] Support 40-player layout fully.
- [ ] Add 25-player layout.
- [ ] Add 20-player layout.
- [ ] Add 10-player layout.
- [ ] Reconcile slots when raid size changes.
- [ ] Ensure sidebar counters respect selected raid size.

### Phase 5: Slot Interaction

- [ ] Add slot clearing.
- [ ] Add inline player name editing.
- [ ] Limit player names to 12 characters.
- [ ] Add clear/edit controls without disrupting drag/drop.
- [ ] Decide whether clicking a filled slot clears, edits, or opens controls.
- [ ] Add visual states for empty, filled, hovered, editing, and invalid slots.

### Phase 6: Right Sidebar Features

- [x] Class breakdown counter works from raid slots.
- [ ] Extract SidebarSection.
- [ ] Extract ClassBreakdownPanel.
- [ ] Add party-specific buff tracking.
- [ ] Add raid-wide buff tracking.
- [ ] Add raid-wide debuff tracking.
- [ ] Keep all sidebar calculations in pure helpers.
- [ ] Add tests for buff/debuff coverage helpers.
- [ ] Add empty, partial, complete, and over-cap visual states.

### Phase 7: Persistence And Saved Comps

- [ ] Replace slots-only storage with a RaidComposition object.
- [ ] Store expansion, raidSize, slots, name, createdAt, and updatedAt.
- [ ] Separate working raid storage from saved raid storage.
- [ ] Validate persisted data against the domain catalog.
- [ ] Add versioned migrations instead of only discarding old versions.
- [ ] Add save/load/delete saved raid comps.
- [ ] Add duplicate/rename saved raid comp flows.
- [ ] Persist only stable IDs and user-entered fields.

### Phase 8: Search, Templates, And Sharing

- [ ] Make navbar search functional or remove it until useful.
- [ ] Add starter templates by expansion and raid size.
- [ ] Add shareable links.
- [ ] Decide URL shape for shared comps.
- [ ] Add import/export if useful.
- [ ] Later: account-backed saved comps.

### Phase 9: UI Polish And Responsiveness

- [ ] Finalize navbar layout across small, medium, large, and wide screens.
- [ ] Finalize specs panel spacing and overflow behavior.
- [ ] Finalize raid grid responsiveness for every raid size.
- [ ] Finalize right sidebar behavior on narrow screens.
- [ ] Centralize repeated panel/card surface styles if repetition grows.
- [ ] Centralize dynamic class/expansion color style helpers.
- [ ] Check keyboard and screen-reader behavior for core controls.

### Phase 10: Classic+ And Long-Term Expansion

- [ ] Keep Classic+ disabled until data is known.
- [ ] Add Classic+ class/spec data when available.
- [ ] Add Classic+ raid sizes when available.
- [ ] Add Classic+ templates.
- [ ] Validate that catalog-driven data supports new expansion content without component rewrites.
