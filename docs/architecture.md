## Last Update: 5/28/2026

This document tracks architectural cleanup, modularization, and future-friction risks found while building the raid grid, specs panel, navbar expansion selector, persistence, and right sidebar features.

The goal is not to refactor everything immediately. The goal is to keep a clear backlog of changes that make future features easier to build without turning `App.tsx` or individual components into catch-all controllers.

## Highest Impact

### Move raid state actions out of `App.tsx`

`App.tsx` currently owns `selectedExpansion`, `raidSlots`, drag placement, and click-to-fill behavior. This is fine for the first implementation, but future work will add slot clearing, player names, raid-size switching, saved comps, import/export, and buff/debuff derivation.

That will turn `App.tsx` into a controller unless raid behavior is moved into a dedicated hook or reducer.

Recommended move:

- Create `src/lib/useRaidComposition.ts` or `src/lib/raidCompositionReducer.ts`.
- Move `handleDragEnd`-adjacent placement logic into domain-level actions.
- Expose a small API to components.

Possible action names:

- `placeSpec(slotId, spec)`
- `fillNextEmptySlot(spec)`
- `clearSlot(slotId)`
- `clearRaid()`
- `setRaidSize(size)`
- `setExpansion(expansion)`
- `renameSlot(slotId, playerName)`

Why it matters:

- Keeps `App.tsx` focused on composition and layout.
- Gives future sidebar features one stable source for raid mutation behavior.
- Makes persistence easier to attach to one raid composition object.
- Makes tests possible without rendering the whole app.

### Tighten domain IDs

`PlacedSpec.classId`, `PlacedSpec.specId`, and `RaidSlotId` are currently plain strings. This already causes casts in places like class breakdown and drag handling.

Recommended move:

- Import `ClassId` and `SpecId` from the class/spec domain types.
- Change `PlacedSpec` to use those types.
- Make `RaidSlotId` a stricter type if practical.
- Type `classColors` as `Record<ClassId, string>` instead of `Record<string, string>`.

Current friction:

- `classBreakdown.ts` has to cast `placedSpec.classId as ClassId`.
- `SpecsPanel.tsx` accepts `classId: string` and `specId: string` even though the data source knows the valid values.
- Invalid class/spec IDs can enter local storage and pass shape validation.

Why it matters:

- Prevents invalid data from spreading.
- Removes casts.
- Makes saved composition validation much safer.

### Store stable spec references instead of display data

`PlacedSpec` currently stores `classId`, `specId`, `label`, and `iconLink`.

`label` and `iconLink` are derived data. If labels or icon URLs change later, saved raid comps can become stale.

Recommended move:

- Store only stable identifiers in persisted raid state.
- Derive label/icon/class color at render time from the class/spec catalog.

Possible future shape:

```ts
type PlacedSpec = {
  classId: ClassId;
  specId: SpecId;
  playerName?: string;
};
```

Why it matters:

- Keeps saved data smaller.
- Avoids stale labels and icon links.
- Makes future icon swaps or copy edits painless.

### Use one raid grid model

The grid model is duplicated between `RaidGrid.tsx` and `lib/grid.ts`.

Current problem:

- `RaidGrid.tsx` defines `GROUP_COUNT`, `SLOTS_PER_GROUP`, and render groups.
- `lib/grid.ts` defines `GROUP_COUNT`, `SLOTS_PER_GROUP`, and creates initial slot state.

Recommended move:

- Keep raid group/slot generation in one helper.
- Use that helper for both rendering and initial state.
- Make raid size part of the model before supporting 10/20/25-man grids.

Possible helpers:

- `getRaidGroups(raidSize)`
- `createInitialRaidSlots(raidSize)`
- `getSlotIds(raidSize)`
- `getRaidGroupCount(raidSize)`

Why it matters:

- Prevents render slots and stored slots from drifting apart.
- Creates a path for 10, 20, 25, and 40-player layouts.

### Introduce selected raid size before more grid features

Expansions already define supported `raidSizes`, but the app currently renders a fixed 40-player grid.

Recommended move:

- Add `selectedRaidSize` to state.
- Default it from the selected expansion.
- Use it for grid generation and persistence.
- Decide what happens when expansion changes and the previous raid size is unsupported.

Why it matters:

- Avoids reworking slot IDs and persistence after saved comps exist.
- Lets right sidebar counters understand the actual raid size.
- Avoids baking 40-man assumptions into upcoming features.

### Decide expansion-change behavior

Changing expansion currently changes the specs panel and class breakdown, but existing slots can contain specs from another expansion.

Possible policies:

- Preserve all slots across expansion changes.
- Clear raid slots when expansion changes.
- Filter invalid classes/specs when expansion changes.
- Store separate working raids per expansion.

Recommended default:

- Preserve only if the composition model explicitly stores `expansion` and `raidSize`.
- Otherwise, prompt or clear when switching expansion once saved comps exist.

Why it matters:

- Prevents invisible mismatch between displayed expansion and placed raid data.
- Prevents sidebar features from silently ignoring off-expansion classes.

## Data Model

### Consolidate class metadata

Class metadata is currently split across several files:

- `expansionClasses.ts` owns class labels, spec labels, and expansion membership.
- `classColors.ts` owns class colors.
- `specIcons.ts` owns spec icons.

This works, but it creates friction because any class or spec change must be kept aligned across multiple maps.

Recommended move:

- Create a single class/spec catalog that owns class label, class color, specs, spec labels, and icons.
- Keep expansion membership as an ordered list of class IDs.

Possible structure:

```ts
type ClassCatalogEntry = {
  classId: ClassId;
  label: string;
  color: string;
  specs: Record<
    SpecId,
    {
      specId: SpecId;
      label: string;
      iconLink?: string;
    }
  >;
};
```

Why it matters:

- One source of truth for class/spec data.
- Easier validation for saved comps.
- Fewer disconnected maps.
- Easier to derive UI rows for specs panel, raid slots, and sidebars.

### Type `classColors` with `ClassId`

Current shape:

```ts
const classColors: Record<string, string>;
```

Recommended shape if `classColors.ts` stays separate:

```ts
const classColors: Record<ClassId, string>;
```

Why it matters:

- Missing class colors become type errors.
- Extra invalid class keys become type errors.
- Consumers no longer need to index with loose strings.

### Remove or justify `themeKey`

`ExpansionConfig.themeKey` currently duplicates the expansion ID.

Recommended move:

- Remove `themeKey` until there is a real need for a separate theme identifier.
- If it stays, type it as a real theme key union and document why it can differ from `id`.

Why it matters:

- Reduces confusion in expansion data.
- Avoids maintaining duplicate identifiers.

### Rename expansion color tokens for their real purpose

`expansionColors.ts` still has `glow`, but the app-wide glow was removed. The value is now a raw RGB accent used by the expansion select.

Recommended move:

- Rename `glow` to `accentRgb` or `rgb`.
- Remove unused style tokens like `hoverBg` if they are no longer referenced.

Why it matters:

- Names should describe current usage, not old experiments.
- Prevents future code from reintroducing visual effects because the token name implies them.

### Add data access helpers

As the app grows, direct imports from raw maps will spread.

Recommended helpers:

- `getExpansionConfig(expansion)`
- `getExpansionClasses(expansion)`
- `getClassById(classId)`
- `getSpecById(classId, specId)`
- `isClassAvailableInExpansion(expansion, classId)`
- `isSpecAvailableInExpansion(expansion, classId, specId)`

Why it matters:

- Centralizes validation.
- Keeps components from knowing storage/catalog internals.
- Makes future feature work less repetitive.

## Dead Or Stale Code

### Delete old app-wide glow code

The app-wide expansion glow has been removed from the UI direction, but `src/styles/expansionGlow.tsx` still exists.

Recommended move:

- Delete `src/styles/expansionGlow.tsx` if no imports remain.

Why it matters:

- Removes dead visual experiments.
- Avoids accidentally reusing a style direction that was intentionally abandoned.

### Delete unused `expansionMap.ts`

`src/lib/expansionMap.ts` appears unused.

Recommended move:

- Delete it until lookup-by-id is needed.
- Or keep it only if paired with a clear `getExpansionConfig` helper.

Why it matters:

- Avoids extra indirection while the data layer is still small.

### Clean old SubNav CSS variables

`style.css` still contains variables from when there was a separate SubNav bar:

- `--subnav-height`
- `--header-offset`

Recommended move:

- Remove stale variables if they are not referenced.
- Keep only `--navbar-height` if useful.

Why it matters:

- Reduces layout confusion now that the expansion selector lives in `Navbar`.

### Remove unused expansion color fields

`hoverBg` remains in `expansionColors.ts`, but is no longer referenced by the current UI.

Recommended move:

- Remove `hoverBg` from the type and each expansion entry.

Why it matters:

- Keeps style tokens honest.
- Prevents stale design experiments from becoming accidental API.

### Revisit unused exports deliberately

`clearWorkingRaidSlots` exists in `raidStorage.ts` but is not currently wired to UI.

Recommended move:

- Keep it if the slot-clearing feature is next.
- Otherwise move it behind the future raid composition hook.

Why it matters:

- It is not necessarily bad dead code, but it should have a clear future owner.

## Component Boundaries

### Rename `SubNav` to `ExpansionSelect`

`SubNav` no longer renders a sub-navigation bar. It renders a dropdown expansion picker inside `Navbar`.

Recommended move:

- Rename `SubNav.tsx` to `ExpansionSelect.tsx`.
- Rename `SubNavProps` to `ExpansionSelectProps`.
- Update imports in `Navbar.tsx`.

Why it matters:

- Names should match component responsibility.
- Prevents future contributors from treating it like a layout component.

### Split the right sidebar into feature panels

`RightSideBar.tsx` currently contains the generic section wrapper, class breakdown, party buffs placeholder, and raid buffs/debuffs placeholder.

Recommended move:

- Extract `SidebarSection` to its own component once a second sidebar feature becomes real.
- Extract `ClassBreakdownPanel`.
- Later extract `PartyBuffsPanel` and `RaidBuffsPanel`.

Suggested structure:

```txt
src/components/sidebar/SidebarSection.tsx
src/components/sidebar/ClassBreakdownPanel.tsx
src/components/sidebar/PartyBuffsPanel.tsx
src/components/sidebar/RaidBuffsPanel.tsx
src/components/RightSideBar.tsx
```

Why it matters:

- Prevents `RightSideBar.tsx` from becoming a second app controller.
- Keeps each sidebar feature independently testable.

### Keep sidebar features derived from raid state

The class breakdown feature correctly derives from `raidSlots`. Future party/raid buff features should follow the same pattern.

Recommended move:

- Use pure helpers for sidebar calculations.
- Keep `RightSideBar` and panel components focused on rendering.

Examples:

- `getClassBreakdown(raidSlots, expansion)`
- `getPartyBuffCoverage(raidSlots, expansion)`
- `getRaidBuffCoverage(raidSlots, expansion)`
- `getRaidDebuffCoverage(raidSlots, expansion)`

Why it matters:

- Avoids mixing calculation logic into JSX.
- Makes buff/debuff logic testable.
- Lets the same calculations power badges, tooltips, or warnings later.

### Clean drag payload responsibilities

`SpecsPanel.tsx` currently puts `fillNextSlot` into dnd-kit draggable data.

Recommended move:

- Keep dnd-kit data as serializable/domain data only.
- Do not put callback functions into drag payloads.
- Use component props for click behavior and drag data for drop behavior.

Why it matters:

- Keeps drag payloads predictable.
- Avoids accidental stale callback references.
- Makes drag data easier to validate.

### Move slot rendering details behind components

`RaidGrid.tsx` currently owns group generation, droppable slots, slot display, and class color styling.

Recommended move:

- Keep `RaidGrid` responsible for layout.
- Extract `RaidGroup` and `RaidSlot` once slot editing/clearing/player names land.

Suggested structure:

```txt
src/components/raid/RaidGrid.tsx
src/components/raid/RaidGroup.tsx
src/components/raid/RaidSlot.tsx
```

Why it matters:

- Slot interactions are about to grow.
- Editing and clearing should not make `RaidGrid.tsx` hard to scan.

## Styling And DRY

### Centralize dynamic color style helpers

Dynamic colors are currently built inline in several components.

Examples:

- expansion select background and border
- specs panel class background
- raid slot class border/text/background
- sidebar class text color

Recommended move:

- Add a small style helper module for repeated dynamic color expressions.

Possible helpers:

```ts
function rgbVar(rgb: string, alpha?: number): string;
function classTintBackground(hexColor: string): string;
function raidSlotFilledStyle(classColor: string): React.CSSProperties;
function expansionSelectStyle(accentRgb: string): React.CSSProperties;
```

Why it matters:

- Avoids re-solving color opacity in every component.
- Makes design changes easier to apply globally.
- Keeps JSX cleaner.

### Extract common panel/card surface styles carefully

Several components use similar dark panel surfaces, borders, rounded corners, and stone colors.

Recommended move:

- Do not build a full design system yet.
- Consider a shared `Panel` or `SectionCard` once repeated surfaces appear in three or more places.

Possible candidates:

- Sidebar sections
- Future saved comp cards
- Future settings/filter panels

Why it matters:

- Reduces repeated Tailwind strings.
- Keeps the visual language consistent.
- Avoids over-abstracting before the UI settles.

### Keep layout constants in one place

Navbar height, raid group count, slots per group, and max content width are all layout primitives that can drift.

Recommended move:

- Keep raid layout constants in the raid grid model helper.
- Keep global layout CSS variables only if they are actually referenced.
- Consider a shared `APP_CONTENT_MAX_WIDTH` only if repeated max-widths become hard to coordinate.

Why it matters:

- Prevents hidden mismatches like storage creating one slot shape while rendering another.
- Keeps responsive layout changes local.

### Move specs panel row patterns closer to expansion layout config if they grow

`specsPanelLayout.ts` currently hardcodes WotLK versus other expansion row patterns.

Recommended move:

- Leave it alone while it is small.
- If more expansion-specific layout rules appear, move layout patterns into config.

Possible structure:

```ts
const specsPanelLayouts: Record<
  Expansion,
  {
    wide: number[];
    medium: number[];
  }
>;
```

Why it matters:

- Avoids expanding conditionals as more expansion-specific UI behavior appears.

## Persistence

### Store a full raid composition object

Persistence currently stores a working raid slots object.

Future saved comps will likely need more information.

Recommended future shape:

```ts
type RaidComposition = {
  id?: string;
  name: string;
  expansion: Expansion;
  raidSize: RaidSize;
  slots: RaidSlots;
  createdAt: string;
  updatedAt: string;
};
```

Why it matters:

- Supports saved comps without redesigning storage later.
- Ties slots to expansion and raid size.
- Creates a home for future metadata.

### Separate working raid storage from saved raid storage

The current `localStorage` key is a working draft. Saved comps should not be mixed into the same shape casually.

Recommended move:

- Keep one key for current working raid.
- Add a separate key for saved raid compositions when that feature begins.

Possible keys:

- `wowcomps:workingRaid`
- `wowcomps:savedRaids`

Why it matters:

- Prevents accidental deletion of saved data when clearing the working raid.
- Makes migrations easier.

### Validate persisted data against domain catalog

Storage validation currently checks object shape but not whether class/spec IDs are valid.

Recommended move:

- Export reusable guards from a domain validation module.
- Validate class/spec IDs against the catalog.
- Validate slot IDs against the selected raid size.

Possible guards:

- `isClassId(value)`
- `isSpecIdForClass(classId, specId)`
- `isRaidSlotIdForSize(slotId, raidSize)`
- `isPlacedSpec(value)`
- `normalizeRaidComposition(value)`

Why it matters:

- Prevents corrupted local storage from leaking into UI.
- Makes migrations safer.

### Version migrations should transform, not only discard

Current storage versioning discards mismatched versions by returning empty slots.

That is okay early, but once users can save comps, migrations should preserve data when possible.

Recommended move:

- Keep versioned payloads.
- Add migration functions when saved comps exist.
- Discard only if migration fails.

Why it matters:

- Protects user-created raid comps.
- Makes future model changes less risky.

### Persist less derived data

If `PlacedSpec` changes to store only `classId` and `specId`, local storage should follow.

Recommended move:

- Persist stable IDs and user-entered fields only.
- Derive labels, icons, and colors from the catalog.

Why it matters:

- Smaller payloads.
- Easier data migrations.
- Less stale saved data.

## Testing Gaps

### Add tests for pure layout helpers

`specsPanelLayout.ts` is pure and easy to test.

Recommended tests:

- Classic wide rows are `5 + 4`.
- WotLK wide rows are `5 + 5`.
- Classic medium rows are `3 + 3 + 3`.
- WotLK medium rows are `3 + 3 + 3 + 1` with the current 10-class data and pattern fallback.
- Extra items beyond a pattern are appended safely.

Why it matters:

- Protects the responsive specs panel layout that took several iterations to tune.

### Add tests for class breakdown

`classBreakdown.ts` is pure and should be tested before the sidebar grows.

Recommended tests:

- Empty raid returns all expansion classes with count `0`.
- Placed specs increment the correct class.
- WotLK includes Death Knight.
- Classic/TBC/SoD do not include Death Knight.
- Off-expansion class IDs are ignored.

Why it matters:

- Protects the first real right-sidebar feature.
- Establishes the pattern for future buff/debuff calculation tests.

### Add tests for storage normalization

`raidStorage.ts` handles malformed data defensively, but currently has no tests.

Recommended tests:

- Empty storage returns initial slots.
- Wrong storage version returns initial slots.
- Malformed JSON returns initial slots.
- Missing slots are filled with `null`.
- Unknown slot IDs are ignored.
- Valid placed specs are preserved.

Why it matters:

- Local storage is user-controlled and can become corrupted.
- Storage bugs are painful because they survive refreshes.

### Add data alignment tests or stronger types

If metadata remains split across files, add tests to ensure alignment.

Recommended checks:

- Every class in `expansionClasses` has a class color.
- Every spec referenced by a class has a valid icon entry if an icon is expected.
- Every expansion ID has an expansion color entry.

Better alternative:

- Consolidate class/spec metadata into one typed catalog so TypeScript catches these issues.

### Add reducer/hook tests when raid actions move out of `App`

Once raid actions are in a hook or reducer, test the behavior directly.

Recommended tests:

- `placeSpec` replaces the target slot.
- `fillNextEmptySlot` fills the first empty slot.
- `fillNextEmptySlot` does nothing when full.
- `clearSlot` clears one slot.
- `clearRaid` clears all slots.
- Changing raid size reconciles slots correctly.

Why it matters:

- These actions will become the core of the app.
- Testing them outside React keeps the test surface small.

## Suggested Cleanup Order

1. Delete stale files and tokens: `expansionGlow.tsx`, `expansionMap.ts`, old SubNav CSS variables, unused `hoverBg`.
2. Rename `SubNav` to `ExpansionSelect`.
3. Tighten `PlacedSpec`, `classColors`, and component props to use `ClassId` and `SpecId`.
4. Consolidate class/spec/color/icon data into one typed catalog.
5. Replace duplicated raid grid constants with one raid grid model helper.
6. Move raid mutations from `App.tsx` into `useRaidComposition` or a reducer.
7. Add `selectedRaidSize` before building alternate raid grids or saved comps.
8. Convert persistence from slots-only toward a full `RaidComposition` object.
9. Add focused tests for layout helpers, class breakdown, storage normalization, and raid actions.

## Guiding Principle

Keep React components as views, keep raid composition behavior in one hook or reducer, and keep WoW domain facts in one typed catalog.

This should reduce friction between features as the app grows from a drag-and-drop prototype into a full raid composition planner.
