# CampusFind — Product Requirements Document

**Status:** V1 MVP  
**Product:** CampusFind  
**Core Loop:** Discover → Evaluate → Save → Act

---

## 1. Product Summary

CampusFind is a personalized campus opportunity discovery product designed to help students find relevant opportunities distributed across fragmented university information sources.

The product combines centralized discovery with personalization and lightweight opportunity tracking.

CampusFind is not intended to become another exhaustive directory containing thousands of undifferentiated listings.

The product goal is to help students find **fewer, more relevant opportunities** and act on them before they are missed.

---

## 2. Problem

University opportunities can be distributed across:

- department websites
- university newsletters
- career platforms
- student organizations
- professors
- social media
- email
- campus announcements
- friends and upperclassmen

Students may therefore experience several related problems:

1. They do not know where to look.
2. Information is fragmented across different sources.
3. Large amounts of information make relevance difficult to judge.
4. Opportunities may be discovered too late.
5. Students may lose track of opportunities after discovering them.

### Problem Statement

> Students lack a reliable way to discover relevant campus opportunities across fragmented sources and act on them before they are missed.

---

## 3. Product Hypothesis

If CampusFind centralizes opportunities, ranks them according to student interests and preferences, explains the matching signals, and provides lightweight tracking, students should be able to move more efficiently from opportunity discovery to meaningful action.

This remains a product hypothesis until validated with real user behavior.

---

## 4. Target User

### Primary User

Opportunity-seeking undergraduate students who have not developed reliable information networks for discovering campus opportunities.

This may particularly benefit students earlier in their university experience, although V1 is not restricted by academic year.

### Typical User Needs

The user may be searching for:

- research
- hackathons
- competitions
- clubs
- fellowships
- campus jobs
- events
- workshops
- volunteering
- other university programs

---

## 5. Jobs To Be Done

### Primary JTBD

> When I want to become more involved or advance toward my academic or professional goals, help me discover opportunities that fit me so I can decide what is worth pursuing without searching across many disconnected sources.

### Secondary JTBD

> When I discover something interesting, help me avoid losing or forgetting it.

> When an opportunity has a deadline, help me understand when I need to act.

> When CampusFind recommends something, help me understand why it may be relevant to me.

---

## 6. Product Principles

### Relevance over volume

The product should optimize for helping users discover useful opportunities rather than maximizing the number of listings shown.

### Low time-to-value

Users should reach personalized opportunities quickly.

### Explain personalization

Recommendation signals should be understandable rather than presented as mysterious AI outputs.

### Preserve authoritative sources

CampusFind should expose the original opportunity source.

### Do not fabricate information

Unknown metadata should remain unknown.

### Build before over-automating

The MVP should validate the core user experience before introducing complex infrastructure or behavior-trained ML.

---

## 7. Goals

V1 should enable users to:

- create an initial preference profile
- discover opportunities
- receive personalized ranking
- understand recommendation signals
- evaluate individual opportunities
- save opportunities
- mark opportunities as applied or registered
- reach the original source
- modify their preferences

The product should also establish the analytics structure required to measure these behaviors.

---

## 8. Non-Goals

V1 will not attempt to provide:

- AI chatbot
- social networking
- messaging
- reviews
- comments
- resume generation
- application autofill
- course planning
- organizer portal
- full application CRM
- native mobile application
- behavior-trained recommendation model
- multi-campus infrastructure at scale

These features should not be added without evidence that they address a meaningful product problem.

---

## 9. Core User Journey

```text
Create / Open Profile
        ↓
Complete Onboarding
        ↓
Receive Personalized Feed
        ↓
Open Opportunity
        ↓
Evaluate Opportunity
        ↓
Save
        ↓
View Original / Apply
        ↓
Mark Applied / Registered
```

The four primary product surfaces are:

1. Onboarding
2. Discover
3. Opportunity Detail
4. Saved Opportunities

---

## 10. Onboarding Requirements

### Objective

Collect enough information to generate useful cold-start recommendations without creating unnecessary onboarding friction.

### Required Inputs

- university
- academic year
- major
- interests
- preferred opportunity types

### Example Interests

- Artificial Intelligence
- Data Science
- Product Management
- Entrepreneurship
- Consulting
- Finance
- Design
- Robotics
- Psychology
- Healthcare
- Sustainability
- Public Policy

### Example Opportunity Types

- Research
- Hackathons
- Competitions
- Clubs
- Fellowships
- Campus Jobs
- Events
- Workshops
- Volunteering

### Acceptance Criteria

A user can:

- select multiple interests
- select multiple opportunity types
- complete onboarding
- modify preferences later
- reach the personalized feed immediately after onboarding

---

## 11. Discover Requirements

### Objective

Help users quickly identify opportunities that may be worth investigating.

### Opportunity Cards

Each card should display, when available:

- title
- organization
- category
- short description
- relevant tags
- deadline
- recommendation score/signal
- recommendation explanation
- save action
- detail action

### Filtering

V1 should support lightweight filtering such as:

- category
- interest
- deadline

Avoid complex advanced-search interfaces.

### Acceptance Criteria

A user can:

- view ranked opportunities
- understand major matching signals
- filter opportunities
- save directly from discovery
- open the full opportunity

---

## 12. Opportunity Detail Requirements

### Objective

Provide enough information for a student to decide whether an opportunity is worth pursuing.

Display when available:

- title
- organization
- category
- description
- eligibility
- skills
- interests
- deadline
- time commitment
- location
- compensation
- recommendation explanation
- source
- original URL

### Required Actions

- Save
- Unsave
- View Original / Apply

### Data Integrity

If information is unavailable, CampusFind must not invent it.

Example:

> Deadline not listed — verify with original source.

### Acceptance Criteria

A user can:

- understand what the opportunity is
- understand why it was recommended
- identify important eligibility/deadline information
- reach the original posting
- save or unsave it

---

## 13. Saved Opportunities Requirements

### Objective

Prevent relevant opportunities from being lost after discovery.

### Initial States

- Saved
- Applied
- Registered

A completed state may be added if useful.

### Each Item Should Show

- title
- organization
- deadline
- deadline urgency
- current status
- view action
- remove action
- mark applied/registered action

### Acceptance Criteria

A user can:

- see saved opportunities
- remove an opportunity
- reopen the opportunity
- mark an opportunity applied or registered

V1 should not become a complex application CRM.

---

## 14. Recommendation Requirements

### Cold-Start Problem

New users have no behavioral history.

V1 therefore uses explicit preferences and opportunity metadata rather than pretending a behavior-trained model exists.

### Candidate Signals

The recommendation system is designed around:

- interest overlap
- opportunity-type preference
- semantic similarity
- deadline relevance
- optional skill overlap

Conceptually:

```text
Recommendation Score =
Interest Match
+ Type Match
+ Semantic Similarity
+ Deadline Relevance
+ Skill Match
```

Weights should be configurable rather than treated as learned parameters.

### Recommendation Explanation

The interface should expose understandable matching signals such as:

> Recommended because: AI/ML · Research · Python

This is not a causal explanation of an ML model.

---

## 15. AI Extraction Requirements

CampusFind should support transforming unstructured opportunity postings into structured metadata.

### Possible Extracted Fields

- title
- organization
- category
- interests
- skills
- eligibility
- deadline
- location
- time commitment
- compensation

### Requirements

The extraction system must:

- use structured output
- validate output
- allow null fields
- preserve original text
- preserve original source
- avoid fabricating missing information
- handle extraction failure safely

An extraction failure should not silently create a misleading opportunity.

---

## 16. Product Analytics

CampusFind should be instrumented around the user journey.

### Core Events

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

### Event Metadata

Where applicable:

```text
user_id
session_id
opportunity_id
timestamp
recommendation_score
rank_position
source_screen
```

---

## 17. Core Funnel

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

### Metrics

Opportunity Open Rate:

```text
Opportunity Opens / Opportunity Impressions
```

Save Rate:

```text
Opportunity Saves / Opportunity Opens
```

Application CTR:

```text
Application Clicks / Opportunity Opens
```

Save-to-Application Conversion:

```text
Applied / Saved
```

These metrics describe the intended measurement framework and should not be presented as actual product performance until real usage data exists.

---

## 18. North Star Metric

### Weekly Meaningful Opportunity Actions

A meaningful opportunity action initially includes:

- save
- application click
- mark applied
- mark registered

The North Star is intended to measure whether CampusFind connects students with opportunities worth pursuing rather than maximizing browsing time.

The definition should be revisited after observing actual behavior.

---

## 19. Activation

A candidate activation definition is:

> A new user completes onboarding and performs their first meaningful opportunity action.

Supporting activation metrics:

- onboarding completion
- time to first opportunity open
- time to first save
- percentage reaching first meaningful action

---

## 20. Experimentation

### Initial Experiment — Recommendation Transparency

#### Research Question

Does explaining why an opportunity was recommended increase engagement?

#### Hypothesis

Users shown relevant matching signals will be more likely to investigate recommended opportunities.

#### Control

Opportunity recommendation without explanation.

#### Treatment

Opportunity recommendation containing match information and "Why this matches you."

#### Primary Metric

Opportunity open rate.

#### Secondary Metrics

- save rate
- application CTR

#### Guardrails

- dismissal rate
- feed abandonment
- performance/latency

#### Unit of Randomization

User.

The experiment should not be presented as completed unless it is actually run with sufficient real traffic.

---

## 21. Data Model

Core entities:

```text
users
interests
user_interests

opportunity_types
user_opportunity_preferences

opportunities
opportunity_interests

skills
opportunity_skills

saved_opportunities

product_events
```

The relational schema is defined separately in the backend/database documentation.

---

## 22. Technical Architecture

Target architecture:

```text
                Next.js / React
                 TypeScript
                     │
                     ▼
                  FastAPI
                   Python
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
   PostgreSQL   Recommendation   AI Pipeline
                   Engine       Extraction
                                  +
                              Embeddings
```

### Frontend Responsibilities

- onboarding
- discover feed
- filtering
- opportunity details
- saved state
- preference editing
- loading / empty / error states

### Backend Responsibilities

- user/profile persistence
- opportunity persistence
- preference persistence
- recommendation calculation
- save/application state
- event ingestion
- extraction pipeline
- embeddings
- validation

---

## 23. Current MVP Implementation

The current frontend uses local typed sample opportunity data and `localStorage`.

This allows the core user flow to function without requiring the entire production architecture to be deployed first.

Backend/database contracts are documented separately so the frontend can later migrate to persistent services without changing the core product interaction model.

This distinction should remain explicit in project documentation.

---

## 24. Accessibility Requirements

The core experience should:

- support keyboard navigation
- use semantic HTML
- label form controls
- maintain sufficient contrast
- avoid communicating state only through color
- work across common desktop/mobile widths

---

## 25. Error and Empty States

### No Matching Opportunities

Explain that no opportunities match the current filters and allow filters to be reset.

### No Saved Opportunities

Explain that saved opportunities from Discover will appear here.

### Missing Deadline

Display that the deadline is unknown and direct the user to the original source.

### Data Failure

Provide a recoverable error state rather than a blank page.

---

## 26. V1 Definition of Done

The product experience is complete when a user can:

- complete onboarding
- define interests/preferences
- receive ranked opportunities
- filter the feed
- open an opportunity
- understand recommendation signals
- access the original source
- save and unsave
- mark applied/registered
- modify preferences

The product specification also defines:

- recommendation architecture
- product-event taxonomy
- funnel metrics
- experimentation strategy
- backend data contracts
- future AI/ML evolution

---

## 27. Future Product Evolution

### V1.1

Potential improvements based on evidence:

- deadline reminders
- stronger filtering
- preference controls
- improved recommendation explanations
- improved opportunity freshness

### V2

After sufficient behavioral data:

- learned recommendation ranking
- behavioral personalization
- recommendation feedback
- A/B testing infrastructure
- notification system

### Future ML Evolution

```text
Cold-start ranking
        ↓
Collect impressions/actions
        ↓
Create behavioral dataset
        ↓
Offline ranking evaluation
        ↓
Train candidate model
        ↓
Compare against V1 baseline
        ↓
Online experiment
```

A learned model should only replace the deterministic baseline if evidence shows that it improves meaningful product outcomes.

---

## 28. Product Success

V1 is not successful merely because the application works technically.

The product is intended to eventually validate whether:

1. Students engage with centralized opportunity discovery.
2. Personalization helps students identify relevant opportunities.
3. Students save opportunities worth pursuing.
4. Students progress from discovery toward applications or registrations.
5. Recommendation explanations improve understanding or engagement.

Until real usage data is collected, these remain hypotheses rather than claims of product-market fit.

---

## 29. Research Integrity

Some early discovery material used during the product-design exercise was synthetic/mock data.

Synthetic research can be useful for practicing:

- interview synthesis
- theme coding
- prioritization
- product design

but it must not be represented as genuine user validation.

Any future real interviews, usability testing, or behavioral product data should be clearly separated from synthetic design exercises.

---

## 30. Product Principle Going Forward

New features should not be added because they are technically interesting.

A feature should have a clear connection to at least one of:

- observed user problem
- product metric
- funnel problem
- research finding
- experiment result
- strategic product objective

CampusFind should remain focused on its central job:

> **Help students discover relevant opportunities and act on them before they are missed.**