# CampusFind

CampusFind is a personalized campus opportunity discovery MVP. The core loop is **Discover → Evaluate → Save → Act**.

## Run locally

```bash
npm install
npm run dev
```

The current frontend uses local sample opportunity data and `localStorage` for a fast, testable product prototype. It is intentionally structured so the UI can be wired to the FastAPI contracts in `docs/api-contracts.md` without changing the core flows.

## Product decisions

- Recommendations are deterministic V1 matching signals, not behavior-trained ML.
- Recommendation explanations summarize the matching signals; they are not causal AI explanations.
- Original opportunity sources are always exposed.
- Saved and Applied are the only tracking states in the main experience.
- Unknown opportunity metadata should remain null in the backend rather than being fabricated.

## Repository map

- `app/` — Next.js App Router frontend
- `lib/data.ts` — typed frontend fixtures and taxonomy examples
- `backend/schema.sql` — PostgreSQL entity schema and indexes
- `docs/` — product research, metrics, event taxonomy, API contracts, experiments, and setup notes
