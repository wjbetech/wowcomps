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

## Suggested First Version Scope

- Single-page app.
- Local state only.
- No login, database, or sharing in the first pass.
- Any initial persistance should be stored via localStorage, and only if the memory can be kept clean and lean.
- Focus on a smooth drag-and-drop composition workflow first.

## Core Features -> `/core-features.md`

## Data Model Draft

- `expansion`
- `raidSize`
- `class`
- `spec`
- `slotIndex`
- `playerName`
- `themeKey`

## Build Phases -> `/build-phases.md`

## Open Decisions

- Exact raid layout structure for each raid size.
- Whether duplicate class/spec combinations should be visually limited or unrestricted.
- Whether drag source items are infinite by default or tracked as counts.
- Whether right-click should also work on empty slots for future context actions.

## Non-Goals For Now

- Backend services.
- Accounts or authentication.
- Advanced simulation, optimization, or stat validation.
- Full design system implementation in this draft.

## Stack
