## Build Phases

### Phase 1: Foundation

- [x] Set up app structure.
- [-] Define basic components
  - [x] Main nav (logo, links)
  - [x] Sub nav (expansion picker)
  - [-] Classes and specs panel
- [x] Define raid size availability by expansion.
- Define class/spec availability by expansion.
- Define localStorage saved raid comp shape with `storageVersion`.

### Phase 2: Raid Composition UI

- [x] Raid grid
  - [x] Raid slots
  - [ ] An icon-only group based important buffs only counter
  - [ ] A raid-wide total buffs/debuffs counter
  - [-] Build the extra raid grids.
    - 10man -> 2 columns side-by-side
    - 20man -> 2 rows of 2 columns.
    - 25man -> 5 columns on larger screens, 3 and 2 on smaller screens, 5 individual rows on very narrow screens
    - [x] 40man -> 4 columns on top, 4 columns on bottom, 2 x 4 on smaller screens
- Build the draggable class/spec list.
  - Class colored background,
  - Differentiation between feral(cat) and feral(bear)
- Add drag-and-drop placement.
  - Dragging an icon from the class/spec container should attach an icon to the mouse, without removing the icon from the original class/spec container.
- Add slot clearing on left click.

### Phase 3: Buff & Debuff Trackers

- Track important groups buffs below each party group.
  - List will be decided and curated during Phase 3.
- Track raid wide buffs in a separate, side-panel type element.
- Buffs with no counter yet are grey.
- Buffs that have been included turn green.
- Debuffs that have been included turn red.

### Phase 4: Editing and Polish

- Add inline player name editing.
- Add expansion-specific theming hooks.
- Refine layout, spacing, feedback states, and responsiveness.

### Phase 5: Future Enhancements

- Save/load raid comps.
  - Consider an account building workflow.
  - Allow users to log in and save comps.
- Shareable links.
- Classic+ support once classes/specs are known.
- Templates for each expansion to get people started.
