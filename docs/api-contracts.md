# Backend contract (V1)

The frontend expects these REST resources from FastAPI. UUIDs and dates are represented as strings.

`POST /users` creates a profile with `email`, `university`, `major`, `academic_year`, `interest_ids`, and `opportunity_type_ids`.

`GET /opportunities?type=&deadline_before=&interest_id=&q=` returns normalized opportunities and a recommendation payload:

```json
{
  "opportunity_id": "uuid",
  "title": "string",
  "organization": "string",
  "description": "string",
  "type": "Research",
  "deadline": "2024-09-12T00:00:00Z",
  "source_name": "string",
  "source_url": "https://…",
  "match_score": 0.92,
  "match_reasons": ["interest_overlap", "type_preference", "skill_match"]
}
```

`GET /users/{user_id}/saved`, `POST /users/{user_id}/saved/{opportunity_id}`, and `DELETE /users/{user_id}/saved/{opportunity_id}` support Saved. `PATCH /users/{user_id}/saved/{opportunity_id}` updates status to `applied` or `registered`.

`POST /events` accepts `{ user_id?, opportunity_id?, session_id, event_name, recommendation_score?, properties? }`.
