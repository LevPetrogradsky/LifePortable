CREATE TABLE IF NOT EXISTS livehub_user_preferences (
  user_id text PRIMARY KEY,
  disable_all_onboarding boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);
