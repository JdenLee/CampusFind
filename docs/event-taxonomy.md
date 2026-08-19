# Event taxonomy

Required events: `opportunity_impression`, `opportunity_opened`, `opportunity_saved`, `opportunity_unsaved`, `application_clicked`, `marked_applied`, `filter_applied`, `onboarding_completed`.

Every event should include `session_id`, and when applicable `user_id`, `opportunity_id`, `recommendation_score`, filter properties, or source context. Event names are stable and should not be renamed for presentation experiments.
