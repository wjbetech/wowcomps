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

- [x] Delete stale code: old expansion glow component, unused expansion map, old SubNav CSS variables, unused expansion hover tokens.
- [x] Rename SubNav to ExpansionSelect.
- [x] Tighten domain types: ClassId, SpecId, RaidSlotId, PlacedSpec.
- [x] Type class colors by ClassId instead of string.
- [x] Remove derived display data from PlacedSpec where possible.
- [x] Remove callback functions from drag payload data.
- [x] Add basic helper tests for class breakdown, specs panel layout, and storage normalization.

### Phase 2: Domain Data Model

- [x] consolidate class labels, class colors, spec labels, and spec icons into one typed class/spec catalog.
- [x] derive expansion class groups from the catalog throughout the app.
- [x] Add small, typed helpers for reading class, spec and expansion lists.
- [x] remove themeKey if it serves no purpose after cleanup.

### Phase 3: Raid Composition State Layer

- [x] Move raid mutations out of App into useRaidComposition or a reducer.
- [x] Add actions: placeSpec, fillNextEmptySlot, clearSlot, clearRaid, renameSlot.
- [x] Add expansion-change policy.
- [x] Add selectedRaidSize state.
- [x] Make raid behavior testable without rendering the app.
- [x] Keep App focused on layout and component wiring.

### Phase 4: Raid Grid Model And Raid Sizes

- [x] Replace duplicated group/slot constants with one raid grid model helper.
- [x] Generate render groups and initial slot state from the same model.
- [x] Support 40-player layout fully.
- [x] Add 25-player layout.
- [x] Add 20-player layout.
- [x] Add 10-player layout.
- [x] Reconcile slots when raid size changes.
- [x] Ensure sidebar counters respect selected raid size.
- [x] Fix the raid grid display to always prefer at least two columns on any given resolution, only single columns per row on mobile
- [x] Fix assigning a Death Knight to a spot persisting after swapping away from Wrath of the Lich King

### Phase 5: Slot Interaction

- [x] Add slot clearing.
- [x] Add inline player name editing.
- [x] Limit player names to 12 characters.
- [x] Add clear/edit controls without disrupting drag/drop.
- [x] Decide whether clicking a filled slot clears, edits, or opens controls.
- [x] Add visual states for empty, filled, hovered, editing, and invalid slots.
- [x] User can drag a spec from one slot in to another slot.
- [x] When a spec is dropped outside of the raid grid component, it should clear the source.
- [x] Add clear group behavior for the group on clicking a group X.
- [x] Refactor the RaidGrid.tsx component to break out RaidSlot.
- [x] Refactor hooks out of RaidGrid and RaidSlot components.
- [x] Refactor callbacks in RaidGrid and RaidSlot components in to `/utils/...`.
- [x] Add tests for slot-to-slot movement.
- [x] Add test that clicking a spec icon fills the next empty raid slot.
- [x] Add test that dragging an icon to a raid slot fills that slot with the given spec.
- [x] Add test for editing the name of a raid slot & it persists.
- [x] Add test for moving a filled slot to another slot.
- [x] Add test that renamed playerName survives slot-to-slot move.
- [x] Add test that group clear only clears slots in that group.
- [x] Add focused UI test that Escape cancels inline editing without saving.
- [x] Ensure that rename persists after move.
- [x] Add ability to press Escape button to cancel inline editing without saving.

### Phase 6: Right Sidebar Features

- [x] Class breakdown counter works from raid slots.
- [x] Extract SidebarSection.
- [x] Extract ClassBreakdownPanel.
- [x] Add party-specific buff tracking.
- [x] Add raid-wide buff tracking.
- [x] Add raid-wide debuff tracking.
- [x] Add helper func to consolidate wotlk buffs/debuffs.
- [x] Add helper func to filter so that improved versions of buffs/debuffs take precedence.
- [x] Think about adding a visual 'missing buffs' and 'missing debuffs' section.
- [x] Add tooltip rendering for all buff/debuff icons.
- [x] Keep all sidebar calculations in pure helpers.
- [x] Add tests for buff/debuff coverage helpers.
- [ ] Add empty, partial, and complete visual states.
- [ ] Fix Battle/Commanding Shout improved versions.
- [x] Fix Bloodlust to be a diagonal Bloodlust/Heroism icon.
- [ ] Fix tooltips to render both the base and improved versions when both provided.
- [ ] Fix the diagonal icon tooltips to render both referenced buffs.
- [ ] Make the arrows signifying an improved version stand out more.
- [ ] Final manual pass of all icons.

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
