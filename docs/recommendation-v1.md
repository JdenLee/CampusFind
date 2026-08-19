# Recommendation V1

The score is deterministic and configurable. It is not learned from user behavior.

`score = 0.40 * interest_overlap + 0.25 * type_preference + 0.20 * semantic_similarity + 0.10 * deadline_relevance + 0.05 * skill_match`

Each component is normalized to `[0, 1]`. Missing optional skill or semantic inputs are omitted and the remaining weights are renormalized. The API returns the top matching signals for the user-facing “Why this matches you” summary.
