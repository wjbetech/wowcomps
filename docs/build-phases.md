## Build Phases

### Phase 1: Foundation

- [x] Set up app structure.
- [x] Define basic components
  - [x] Main nav (logo, links)
  - [x] Sub nav (expansion picker)
  - [x] Classes and specs panel
- [x] Define raid size availability by expansion.
- [x] Define class/spec availability by expansion.

### Phase 2: Raid Composition UI

- [x] Raid grid
  - [x] Raid slots
  - [x] Color code slots based on spec-class
  - [x] Click a spec to place in the next free raid slot
  - [x] Refreshing the page should not empty all of the slots
  - [ ] The class&specs section should be dynamically centered
    - [x] Move class/spec panel row logic into a small lib/helper instead of keeping it in the component file
    - [x] Render wide-layout row pattern explicitly for Classic/TBC/SoD
    - [x] Render medium-layout row explicitly for Classic/TBC/SoD
    - [x] Prevent spec icons inside a class box from wrapping
    - [x] Add responsive icon sizing
    - [x] Add a horizontal overflow wrapper for smaller resolutions
    - [ ] Validate the different render groups
    - [ ] Refine card widths, gaps, and icon sizes so that the panel stays centered and easy to use
  - [ ] An edit button on the right side of each filled raid slot
    - [ ] Clicking the edit button should open an input inside the raid slot to enter a character name up to 12 characters
  - [ ] An icon-only group based important buffs only counter
  - [ ] A raid-wide total buffs/debuffs counter
  - [ ] Adding x spec should add to the Class Breakdown counter on the right side panel
  - [-] Build the extra raid grids.
    - 10man -> 2 columns side-by-side
    - 20man -> 2 rows of 2 columns.
    - 25man -> 5 columns on larger screens, 3 and 2 on smaller screens, 5 individual rows on very narrow screens
    - [x] 40man -> 4 columns on top, 4 columns on bottom, 2 x 4 on smaller screens
- [x] Build the draggable class/spec list.
  - [x] Class colored background,
  - [x] Differentiation between feral(cat) and feral(bear)
- [x] Add drag-and-drop placement.
  - [x] Dragging an icon from the class/spec container should attach an icon to the mouse, without removing the icon from the original class/spec container.
- [ ] Add slot clearing on left click.
- [ ] Define localStorage saved raid comp shape with `storageVersion`.

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
  - [ ] The SubNav component should responsively adapt to the browser window width / turn into a drop down at smaller resolutions.

### Phase 5: Future Enhancements

- Save/load raid comps.
  - Consider an account building workflow.
  - Allow users to log in and save comps.
- Shareable links.
- Classic+ support once classes/specs are known.
- Templates for each expansion to get people started.
