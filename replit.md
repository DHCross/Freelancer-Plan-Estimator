# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

This project is **Freelance Forge** — a business management suite for independent TTRPG industry freelancers. It tracks client projects, personal capacity, rates, budgets, timelines, and reporting.

## Artifacts

- Main web app (React + Vite), served at `/`. Package: `@workspace/freelance-forge`. Purely frontend, all data in localStorage. The core dashboard.
- Pitch deck slides artifact at the deck preview path. Package: `@workspace/freelance-forge-deck`.
- `artifacts/api-server` — Express API server (currently unused by the dashboard, available for future backend features)
- `artifacts/mockup-sandbox` — Design sandbox (internal tooling)

> Note: artifact directory names use legacy paths (`artifacts/hoskbrew-dashboard`, `artifacts/hoskbrew-pitch-deck`) and are intentionally kept as-is (renaming requires a full workspace migration).

## App Identity

The app is repositioned as a **solo freelancer** tool, not a multi-person studio dashboard. Key concepts:

- **"Team" → "Clients"**: The team roster records represent publisher/client contacts. `TeamMember.id` is a client slug (e.g. `"ironforge"`), `name` is the company name.
- **3 default clients**: Ironforge Games (orange), Thornwood Press (blue), QuestCraft Creative (green)
- **6-7 default projects**: Realistic TTRPG freelance work (adventure modules, sourcebooks, supplements) linked to the 3 clients via `assignedTo` (client ID) and `stakeholder` (client display name)
- **Stakeholder type**: Changed from `"Alex" | "Jordan" | "Sam"` union to `string` to support arbitrary client names
- **Capacity model**: Each client record's `weeklyCapacity` = hours/week I dedicate to that client; the capacity utilisation shows how much of my allocated time each client is using
- **localStorage keys**: Still prefixed `studio_*` (intentional — changing them would clear existing users' data)

## Tab Structure

| Tab | Purpose |
|---|---|
| Dashboard | Active project health, capacity, next deadline |
| Planning | Product roadmap, budgets, integrations |
| Clients | Client management (formerly "Team") |
| Finance | ROI & print run calculator, rate calculator |
| Reports | Dossier, deadline estimator, project proposal |

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (Tailwind CSS v4, wouter routing)
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM (not currently used by dashboard)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
