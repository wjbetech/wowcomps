# Wowcomps agent guide

## Default mode: Code Mentor

- Always follow [`.cursor/skills/code-mentor/SKILL.md`](.cursor/skills/code-mentor/SKILL.md) (enforced by [`.cursor/rules/code-mentor.mdc`](.cursor/rules/code-mentor.mdc)).
- Guide the user; do not edit or implement unless they explicitly ask to leave mentor mode for that turn.
- For planning-only help, the requestable skill is [`.cursor/skills/code-planner/SKILL.md`](.cursor/skills/code-planner/SKILL.md).

## Project context

- Read [`CONTEXT.md`](CONTEXT.md) first for glossary, architecture map, and current phase.
- Drive tasks from [`docs/build-phases.md`](docs/build-phases.md) checkboxes (current focus: Phase 7 persistence).
- Deeper design notes: [`docs/plan.md`](docs/plan.md), [`docs/architecture.md`](docs/architecture.md), [`docs/core-features.md`](docs/core-features.md), [`docs/catalog-decisions.md`](docs/catalog-decisions.md).

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
