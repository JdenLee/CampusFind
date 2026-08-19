# CampusFind

CampusFind is a personalized campus opportunity discovery MVP designed to help students find relevant opportunities across fragmented university sources and act on them before they are missed.

The core product loop is:

**Discover → Evaluate → Save → Act**

CampusFind combines product discovery, recommendation design, product analytics, and a production-oriented full-stack architecture. The current MVP focuses on validating the core user experience before introducing behavior-trained recommendation models or unnecessary product complexity.

---

## The Problem

Campus opportunities are often spread across disconnected sources such as department websites, newsletters, student organizations, career platforms, professors, social media, and word of mouth.

The product discovery process identified several recurring problems:

- Students do not always know where to look.
- Opportunity information is fragmented across different sources.
- Large amounts of information make relevance difficult to judge.
- Opportunities may be discovered too close to or after their deadlines.
- Students often lack a consistent way to track opportunities after finding them.

This led to the working product problem:

> Students lack a reliable way to discover relevant campus opportunities across fragmented sources and act on them before they are missed.

CampusFind is designed around solving that problem without becoming another large, undifferentiated opportunity directory.

---

## Product

CampusFind provides four core experiences:

### 1. Onboarding

Students provide a small amount of information needed for initial personalization:

- university
- academic year
- major
- interests
- preferred opportunity types

The goal is to minimize onboarding friction while collecting enough information to address the recommendation cold-start problem.

### 2. Discover

Students receive a personalized opportunity feed containing opportunities such as:

- research
- hackathons
- competitions
- clubs
- fellowships
- campus jobs
- events
- workshops

Recommendations include matching signals such as interests and opportunity preferences rather than presenting an unexplained score.

### 3. Evaluate

Opportunity detail pages surface the information needed to decide whether an opportunity is worth pursuing:

- organization
- description
- category
- eligibility
- relevant interests and skills
- deadline
- time commitment when available
- original source

CampusFind always exposes the original opportunity source rather than treating extracted metadata as authoritative.

### 4. Save and Act

Students can save opportunities and later mark them as applied or registered.

The MVP intentionally avoids building a complex application-management system.

---

## Product Decisions

Several features were deliberately excluded from V1.

### Included

- personalized opportunity discovery
- recommendation explanations
- opportunity filtering
- opportunity details
- original source links
- save / unsave
- applied / registered state
- product analytics design
- hybrid recommendation architecture

### Explicit Non-Goals

- AI chatbot
- social feed
- student messaging
- reviews and comments
- resume builder
- application autofill
- course planning
- organizer portal
- complex application CRM
- native mobile application
- behavior-trained recommendation model at launch

The goal of V1 is to test the smallest coherent product loop rather than maximize feature count.

---

## Recommendation Strategy

CampusFind is designed around a cold-start recommendation problem.

A new user has no behavioral history, so V1 does not pretend to have a learned recommendation model.

Instead, recommendations use deterministic matching signals based on information such as:

- declared interests
- preferred opportunity types
- opportunity metadata
- semantic similarity
- deadline relevance
- optional skill overlap

Conceptually:

```text
Student Preferences
        +
Opportunity Metadata
        ↓
Explicit Matching
        +
Semantic Similarity
        ↓
Recommendation Score
        ↓
Ranked Opportunity Feed
```

Recommendation explanations summarize the signals used to produce the match. They are not presented as causal AI explanations.

The longer-term architecture is designed so behavioral events such as impressions, opens, saves, and application actions can eventually provide training signals for learned ranking.

---

## AI / ML Design

CampusFind separates two AI problems.

### Structured Opportunity Extraction

Campus opportunity postings often contain useful information inside unstructured text.

The planned backend pipeline converts postings into structured fields such as:

```text
Title
Organization
Category
Interests
Skills
Eligibility
Deadline
Time Commitment
Source
```

Important extraction requirements include:

- schema-constrained output
- validation of extracted fields
- null values for unknown information
- preservation of original posting text
- preservation of original source URLs
- no fabrication of missing deadlines, eligibility, or other metadata

### Semantic Matching

Embeddings can represent student interests and opportunity content in vector space, allowing conceptually similar opportunities to match even when they do not share identical keywords.

The architecture is designed to support PostgreSQL/pgvector for this purpose.

---

## Why Not Train a Recommendation Model Yet?

A behavior-trained recommendation system requires meaningful interaction data.

CampusFind does not initially have enough real:

- impressions
- opens
- saves
- dismissals
- application clicks

to justify training such a model.

The intended evolution is:

```text
Explicit preferences + semantic matching
                    ↓
           Collect product events
                    ↓
            Evaluate behavior
                    ↓
          Build training dataset
                    ↓
        Train candidate ranker
                    ↓
             A/B test model
```

This avoids creating a machine-learning model without meaningful labels simply for the sake of using ML.

---

## Product Analytics

CampusFind was designed with measurement in mind from the beginning.

### Core Funnel

```text
Opportunity Impression
        ↓
Opportunity Open
        ↓
Opportunity Save
        ↓
Application Click
        ↓
Marked Applied
```

Planned product events include:

```text
onboarding_completed
feed_viewed
opportunity_impression
opportunity_opened
opportunity_saved
opportunity_unsaved
application_clicked
marked_applied
marked_registered
filter_applied
```

Where applicable, opportunity events should also capture:

```text
user_id
session_id
opportunity_id
timestamp
recommendation_score
rank_position
source_screen
```

This instrumentation is intended to support funnel analysis, recommendation evaluation, segmentation, and future experimentation.

---

## Product Metrics

### Working North Star

**Weekly Meaningful Opportunity Actions**

A meaningful action represents stronger intent than simply viewing the feed, including:

- saving an opportunity
- clicking an application source
- marking an opportunity applied or registered

### Supporting Metrics

**Activation**
- onboarding completion rate
- time to first meaningful action
- first opportunity open
- first opportunity save

**Discovery**
- opportunity open rate
- engagement by recommendation rank

**Intent**
- save rate
- application click-through rate

**Conversion**
- save → application conversion

**Retention**
- returning users
- D7 retention

These are product measurement definitions, not claims of current user performance.

---

## Experimentation

The initial experiment backlog includes recommendation transparency.

### Hypothesis

Showing users why an opportunity was recommended will increase engagement by making personalization easier to understand.

### Control

Opportunity card without recommendation explanation.

### Treatment

Opportunity card containing matching signals such as:

> Recommended because: AI/ML · Research · Python

### Primary Metric

Opportunity open rate

### Secondary Metrics

- save rate
- application CTR

### Guardrail Metrics

- dismissal rate
- feed abandonment

Experiments would only be interpreted once sufficient real traffic exists.

---

## Technical Architecture

The intended production architecture separates frontend, API, persistence, recommendations, and AI processing.

```text
                    Next.js / React
                     TypeScript
                         │
                         ▼
                      FastAPI
                       Python
                         │
             ┌───────────┼───────────┐
             ▼           ▼           ▼
        PostgreSQL   Recommendation   AI Pipeline
                     Engine           │
                         │        LLM Extraction
                         │        Embeddings
                         ▼
                  Ranked Opportunities
```

### Frontend

- Next.js
- React
- TypeScript

### Backend Contracts / Architecture

- Python
- FastAPI
- REST API design

### Data

- PostgreSQL
- relational schema design
- product-event schema
- pgvector-compatible recommendation architecture

### AI / ML

- structured LLM extraction
- embeddings
- semantic similarity
- hybrid recommendation design
- cold-start recommendation strategy

---

## Current MVP Status

The current frontend uses local sample opportunity data and `localStorage` to provide a fast, testable implementation of the core product experience.

The repository also contains backend/database contracts and architecture designed so the frontend can later be connected to persistent services without changing the fundamental user flows.

This separation allows the MVP to validate:

**Onboarding → Discover → Evaluate → Save → Act**

before adding unnecessary infrastructure or model complexity.

---

## Repository Structure

```text
CampusFind/
├── app/
│   └── Next.js application
│
├── backend/
│   └── schema and backend architecture
│
├── docs/
│   ├── API contracts
│   ├── product documentation
│   ├── analytics/event definitions
│   └── experimentation notes
│
├── lib/
│   └── typed data and taxonomy
│
├── product/
│   └── product requirements and strategy
│
├── README.md
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

## Product Process

CampusFind was approached as a 0→1 product rather than only as a software implementation.

The process included:

1. problem hypothesis
2. discovery research framework
3. synthesis of recurring pain points
4. target-user definition
5. Jobs To Be Done
6. MVP prioritization
7. explicit non-goals
8. user-flow design
9. recommendation strategy
10. North Star and funnel metrics
11. product-event instrumentation
12. experimentation design
13. phased product roadmap

Detailed product decisions are documented in [`product/PRD.md`](product/PRD.md).

> Part of the early discovery material used while practicing product synthesis was synthetic/mock data. It is treated as design input and is not presented as real-world user validation or product traction.

---

## Product Roadmap

### V1

Validate the core product loop:

**Discover → Evaluate → Save → Act**

### V1.1

Potential improvements should be driven by evidence rather than added automatically.

Candidates include:

- deadline reminders
- improved filters
- improved recommendation explanations
- stronger preference controls

### V2

Only after sufficient behavioral data:

- learned recommendation ranking
- behavioral personalization
- recommendation feedback
- experimentation infrastructure
- notification system

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL displayed by Next.js.

---

## Documentation

Additional documentation includes:

- Product Requirements Document
- API contracts
- event taxonomy
- product metrics
- experiment design
- database schema
- product roadmap

See the `docs/` and `product/` directories for the full product and technical specifications.

---

## Project Goal

CampusFind is intended to demonstrate how product strategy, analytics, AI/ML, and software engineering can be combined around a single user problem.

Rather than adding AI as a standalone feature, the system uses AI where it can solve specific product problems: structuring fragmented opportunity information and improving relevance through semantic matching.

The product is intentionally designed so future behavioral data can inform subsequent product and ML decisions instead of assuming those decisions in advance.