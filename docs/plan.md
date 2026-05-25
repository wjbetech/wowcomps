# Raid Composition Tool WoWComps

## Goal

Build a raid composition tool for World of Warcraft Classic-era game modes:

- Classic
- The Burning Crusade
- Wrath of the Lich King
- Season of Discovery
- Classic+ (future placeholder)

The app should let users build raid comps visually with expansion-aware class/spec options and a clean, themed interface for each expansion.

## Product Direction

- Keep the overall UI minimal and fast.
- Apply expansion-specific themes so each mode feels distinct.
- Use a custom theme built on Tailwind as the foundation.

## Core User Flow

- Choose an expansion from the sub-nav at the top.
- Choose raid size from the top of the page.
- Start dragging specs into raid slots.
- Rename the grid slotted specs with the player name.
- Inspect the buffs/debuffs of the raid.
- Save the comp.
- Optionally export or link to the comp.

## Suggested First Version Scope

- Single-page app.
- Local state only.
- No login, database, or sharing in the first pass.
- Any initial persistence should be stored via localStorage, and only if the memory can be kept clean and lean.
- Focus on a smooth drag-and-drop composition workflow first.

## Core Features -> `/core-features.md`

## Data Model Draft

- `expansion`

```TypeScript
type ExpansionId = 'classic' | 'tbc' | 'wotlk' | 'sod' | 'classicPlus';

type ExpansionConfig = {
  id: ExpansionId
  label: string
  themeKey: string
  raidSizes: RaidSize[]
  enabled: boolean
}
```

- `raidSize`

```TypeScript
type RaidSize = 10 | 20 | 25 | 40;
```

- `class`

```TypeScript
type Class = {
  id: string
  label: string
  expansionIds: ExpansionId[]
}
```

- `spec`

```TypeScript
type Spec = {
  id: string
  ClassId: Class
  label: string
  iconPath: string
  expansionIds: ExpansionId[]
  buffIds: string[]
  debuffIds: string[]
}
```

- `slotIndex`

```TypeScript
type RaidSlot = {
  slotIndex: number
  groupIndex: number
  specId: string | null
  playerName: string
}
```

- `playerName`

```TypeScript
type PlayerName = {
  name: string
}
```

- `themeKey`

```TypeScript
type ThemeKey = {
  id: string
}
```

- `buffs`

```TypeScript
type Buff = {
  id: string
  label: string
  iconPath: string
  scope: 'party' | 'raid'
  sourceSpecIds: string[]
  important: boolean
}
```

- `debuffs`

```TypeScript
type Debuff = {
  id: string
  label: string
  iconPath: string
  sourceSpecIds: string[]
  important: boolean
}
```

- `savedComp`

```ts
const savedComp = {
  storageVersion: 1,
  id: "local-current",
  name: "tbc-25",
  expansionId: "tbc",
  raidSize: 25,
  slots: [],
  updatedAt: new Date().toISOString(),
};
```

## Build Phases -> `/build-phases.md`

## Persistence Rules

- All localStorage data must include a `storageVersion` field from day one.
  - Keep saved comps readable if the saved data shape changes later.
  - Zod/schema validation optional for v1, but saved data should always be versioned.

## Open Decisions

- Exact raid layout structure for each raid size.
- Whether duplicate class/spec combinations should be visually limited or unrestricted.
- Whether drag source items are infinite by default or tracked as counts.

## Non-Goals For Now

- Backend services.
- Accounts or authentication.
- Advanced simulation, optimization, or stat validation.
- Full design system implementation in this draft.

## Stack

- React 19 /w TypeScript via Vite+.
- Tailwind CSS v4.
- dnd-kit for drag & drop.
- Zustand for app state.
- localStorage for persistence in early app stages.
- Lucide for UI icons.
- Local static image assets for class & spell icons.
- Vitest for unit/component testing.
- Playwright for dnd-kit and persistence E2E tests.
- Hosting via Vercel.

#### Undecided

- Zod may be useful for client-side schema validation, but this might be over-engineering.
