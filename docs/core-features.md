## Core Features

### 1. Expansion Selection

- User can switch between supported expansions/game modes.
  - Use a slim, second navbar under the main navbar
  - Split the second navbar into five equal-width tabs for each expansion
- Available classes and specs update based on the selected expansion.
- The active expansion changes the UI theme.
  - Classic/Classic+ -> Yellow/gold
  - TBC -> Fel green
  - WotLK -> Icy blue
  - SoD -> Discord blue/purple

### 2. Raid Size Selection

- Raid size selector at the top of each raid composition page.
- Default to 10man when first changing expansion/game mode.
- Support raid sizes where relevant, based on game mode:
  - 10-man (all game modes)
  - 20-man (Classic, Season of Discovery)
  - 25-man (all game modes except Classic)
  - 40-man (only Classic)
- Available raid size options should depend on the selected expansion/game mode.
- Templates available for each raid size in each expansion.

### 3. Class and Spec Pool

- Show all valid classes/specs for the selected expansion.
- Each individual spec should be draggable.
  - Dragging the spec icon should render a new icon under the mouse.
- The source list should be easy to scan and quick to use.
- Infinite source palette model - you can fill every slot with the same spec if you so desire.

### 4. Raid Grid / Slots

- Show raid slots based on the selected raid size.
  - The raid grid should be dynamic and responsively sized based on the browser dimensions.
- Users can drag a class/spec into any slot.
- Empty slots accept dropped in spec icons dragged from the class/spec container at the top.
- Filled slots can be overwritten by dragging a different spec on top it.
- On hovering a filled grid slot, an edit icon appears to allow the changing of the spec to a player's name.
- A class/spec that has been placed can be moved to another slot via left-click and drag.
- Add a minimal x/10, x/20, x/25, x/40 counter
  - Add a class counter below that.

### 5. Raid Buffs/Debuffs

- The UI should show what buffs and debuffs exist for the raid in expansion-specific ways.
  - Classic -> per party
  - TBC -> a mix of per party and raid wide
  - WotLK -> a mix of per party and raid wide
  - SoD -> per party, needs confirmation though
  - Classic+ -> Not releasing until Classic+ is released
- The UI should also show what buffs/debuffs are missing, and on hover each buff or debuff, reveal what specs can apply them.
- The UI should show only the icons of important party buffs below each group.
- A separate 'Raid Buffs' section should show the total breakdown of buffs and debuffs.

### 6. Player Name Editing

- Each filled slot should expose an edit icon inside the grid slot.
- Clicking the edit icon allows changing the spec name to be a player name.
- Default state can show the class/spec until a player name is entered.

### 7. Slot Removal/Editing

- Left-clicking a filled slot clears it.
- This should be fast and require no extra confirmation in the initial version.
- Include a 'Reset' button in an out of the way, clean part of the UI to totally empty all raid slots
  - Include a warning modal that the user is about to wipe the entire current raid comp.
- A spec in a given raid slot can be dragged in to another slot via left click + drag.

### 8. Saving Raid Comps

- The app should save the current working set in sessionSotrage but should not hold on to it.
  - sessionStorage is reloaded on refresh.
  - Closing the tab should reset the raid composition and drop any temp storage.
- A proper backend may be developed later to allow permanent storage.
- Can add some template raid compositions to get people started.

### 9. Linking

- Users can generate a unique hashed URL that corresponds to the raid comp they have created, including the names they have changed.
- Consider other export options such as plain text.

### 10. A Coming Soon Classic+ Page

- The link that takes players to the Classic+ raid comp page should render a coming soon page.
- Try to get an image of a gnome tinkering away at something as a placeholder image.
