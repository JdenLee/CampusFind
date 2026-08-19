CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE users (user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), email TEXT UNIQUE NOT NULL, university TEXT NOT NULL, major TEXT, academic_year TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE interests (interest_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), name TEXT UNIQUE NOT NULL);
CREATE TABLE user_interests (user_id UUID REFERENCES users(user_id) ON DELETE CASCADE, interest_id UUID REFERENCES interests(interest_id) ON DELETE CASCADE, PRIMARY KEY (user_id, interest_id));
CREATE TABLE opportunity_types (type_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), name TEXT UNIQUE NOT NULL);
CREATE TABLE user_opportunity_preferences (user_id UUID REFERENCES users(user_id) ON DELETE CASCADE, type_id UUID REFERENCES opportunity_types(type_id) ON DELETE CASCADE, PRIMARY KEY (user_id, type_id));
CREATE TABLE opportunities (opportunity_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), title TEXT NOT NULL, organization TEXT NOT NULL, description TEXT NOT NULL, original_text TEXT, type_id UUID REFERENCES opportunity_types(type_id), deadline DATE, posted_date DATE, source_name TEXT NOT NULL, source_url TEXT NOT NULL, location TEXT, time_commitment TEXT, compensation TEXT, eligibility_text TEXT, embedding vector(1536), created_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE opportunity_interests (opportunity_id UUID REFERENCES opportunities(opportunity_id) ON DELETE CASCADE, interest_id UUID REFERENCES interests(interest_id) ON DELETE CASCADE, PRIMARY KEY (opportunity_id, interest_id));
CREATE TABLE skills (skill_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), name TEXT UNIQUE NOT NULL);
CREATE TABLE opportunity_skills (opportunity_id UUID REFERENCES opportunities(opportunity_id) ON DELETE CASCADE, skill_id UUID REFERENCES skills(skill_id) ON DELETE CASCADE, PRIMARY KEY (opportunity_id, skill_id));
CREATE TABLE user_skills (user_id UUID REFERENCES users(user_id) ON DELETE CASCADE, skill_id UUID REFERENCES skills(skill_id) ON DELETE CASCADE, proficiency TEXT, PRIMARY KEY (user_id, skill_id));
CREATE TABLE saved_opportunities (user_id UUID REFERENCES users(user_id) ON DELETE CASCADE, opportunity_id UUID REFERENCES opportunities(opportunity_id) ON DELETE CASCADE, status TEXT NOT NULL CHECK (status IN ('saved','applied','registered','completed')), saved_at TIMESTAMPTZ NOT NULL DEFAULT now(), updated_at TIMESTAMPTZ NOT NULL DEFAULT now(), PRIMARY KEY (user_id, opportunity_id));
CREATE TABLE product_events (event_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), user_id UUID REFERENCES users(user_id) ON DELETE SET NULL, opportunity_id UUID REFERENCES opportunities(opportunity_id) ON DELETE SET NULL, session_id TEXT, event_name TEXT NOT NULL, timestamp TIMESTAMPTZ NOT NULL DEFAULT now(), recommendation_score NUMERIC, properties JSONB NOT NULL DEFAULT '{}'::jsonb);
CREATE INDEX opportunities_deadline_idx ON opportunities(deadline);
CREATE INDEX opportunities_embedding_idx ON opportunities USING ivfflat (embedding vector_cosine_ops) WITH (lists = 50);
CREATE INDEX product_events_name_timestamp_idx ON product_events(event_name, timestamp);
