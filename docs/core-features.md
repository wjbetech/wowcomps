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

- Support raid sizes where relevant:
  - 10-man (all game modes)
  - 25-man (all game modes except classaic)
  - 40-man (only classic)
- Available raid size options should depend on the selected expansion/game mode.

### 3. Class and Spec Pool

- Show all valid classes/specs for the selected expansion.
- Each individual spec should be draggable.
  - Dragging the spec icon should render a new icon under the mouse.
- The source list should be easy to scan and quick to use.

### 4. Raid Grid / Slots

- Show raid slots based on the selected raid size.
  - The raid grid should be dynamic and responsively sized basedo on the browser dimensions.
- Users can drag a class/spec into any slot.
  - Once placed, it can only be removed, not overwritten.
- A placed item should remain editable after placement.

### 5. Raid Buffs/Debuffs

- The UI should show what buffs and debuffs exist for the raid in expansion-specific ways.
  - Classic -> per party
  - TBC -> a mix of per party and raid wide
  - WotLK -> a mix of per party and raid wide
  - SoD -> per party, needs confirmation though
  - Classic+ -> Not releasing until Classic+ is released
- The UI should also show what buffs/debuffs are missing, and on hover each buff or debuff, reveal what specs can apply them.

### 5. Player Name Editing

- Each filled slot should expose an edit icon inside the grid slot.
- Clicking the edit icon allows changing the spec name to be a player name.
- Default state can show the class/spec until a player name is entered.

### 6. Slot Removal

- Right-clicking a filled slot clears it.
- This should be fast and require no extra confirmation in the initial version.

### 7. Saving Raid Comps

- Users should be able to save raid compositions locally via localStorage.
  - This could expand into a full service later on with a backend service.
