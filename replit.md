# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

This project is **Freelance Forge** — a business management suite for independent TTRPG industry freelancers. It tracks client projects, personal capacity, rates, budgets, timelines, and reporting.

## Artifacts

- `artifacts/hoskbrew-dashboard` — Main web app (React + Vite), served at `/`. Purely frontend, all data in localStorage. The core Freelance Forge dashboard.
- `artifacts/hoskbrew-pitch-deck` — Pitch deck slides artifact at `/hoskbrew-pitch-deck/`.
- `artifacts/api-server` — Express API server (currently unused by the dashboard, available for future backend features)
- `artifacts/mockup-sandbox` — Design sandbox (internal tooling)

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
