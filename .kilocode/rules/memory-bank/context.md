# Active Context: RoboHal Automation Workflows

## Current State

**Project Status**: ✅ Workflows app live — 2 active workflow pages + home

The site is now a full automation workflows platform for robohal.com, featuring a dark-themed, glassmorphism UI with two live workflow pages and a "more coming soon" placeholder.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] **RoboHal Automation Workflows app** — full redesign
  - Dark theme (`#0a0a0f`) with cyan/violet gradient branding
  - Grid background, glassmorphism cards, glow effects
  - Home page with hero, stats bar, workflow cards, N8n section, footer
  - `/workflows/real-estate` — Real Estate Lead Engine detail page
  - `/workflows/robot-intel` — Humanoid Robot Intelligence detail page

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page — workflow cards hub | ✅ Live |
| `src/app/layout.tsx` | Root layout + RoboHal metadata | ✅ Live |
| `src/app/globals.css` | Tailwind + custom brand utilities | ✅ Live |
| `src/app/workflows/real-estate/page.tsx` | Real Estate Lead Engine detail | ✅ Live |
| `src/app/workflows/robot-intel/page.tsx` | Humanoid Robot Intelligence detail | ✅ Live |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Workflow Details

### Real Estate Lead Engine (`/workflows/real-estate`)
- 5-stage algorithm: Listing Ingestion → Rental Yield → DOM Scoring → Exit Strategy → Opportunity Score
- 4 exit strategies: Buy & Hold, Fix & Flip, BRRRR, Seller Financing
- DOM algorithm: 0-30 days (standard), 31-60 (motivated), 60+ (seller financing ready)
- Output: CRM push, Slack, email digest, webhook

### Humanoid Robot Intelligence (`/workflows/robot-intel`)
- 5-stage pipeline: Scraping → Classification → Entity Extraction → Scoring → Knowledge Base
- 4 data source categories: Tech publications, Research/Academia, Company Intel, Social
- 4 opportunity types: R&D acquisition, Material sourcing, Partnerships, Market intel
- 8 tracked companies: Boston Dynamics, Figure AI, Agility, Tesla, 1X, Apptronik, Sanctuary, Unitree

## Design System

- Background: `#0a0a0f`
- Brand color: `#00e5ff` (cyan)
- Accent: `#7c3aed` (violet)
- Cards: glassmorphism (`card-glass` utility)
- Grid background: `grid-bg` utility
- Gradient text: `gradient-text` utility

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-03-02 | Full RoboHal automation workflows app built — home + 2 workflow detail pages |
