## `src/assets/...`

- All spec icons.

## `src/data/buffs.json`

- All the buffs applicable to any raid comp.
- All the debuffs applicable to any raid comp.

## `src/data/themes.ts`

- Document the background tinge color effect RGBA codes.

## `src/data/classData.json`

- Document the classes and specs.

## `src/data/templates.json`

- Templates for each raid size in each expansion.

## `src/lib/expansionMap.ts`

- Source of truth for expansion labels, theme keys, enabled state, default raid size, allowed raid sizes, etc.

## Local Storage

- All localStorage records should include:

- `storageVersion`
- Saved raid comp data
- Updated timestamp where relevant

```ts
type LocalSavedComp = {
  storageVersion: 1;
  id: string;
  name: string;
  expansionId: ExpansionId;
  raidSize: RaidSize;
  slots: RaidSlot[];
  updatedAt: string;
};
```
