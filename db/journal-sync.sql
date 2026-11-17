-- Run on the matching Neon branch before enabling cloud Journal in that environment.
CREATE TABLE IF NOT EXISTS lifeos_journal_items (
  user_id text NOT NULL,
  kind text NOT NULL CHECK (kind IN ('folder', 'entry')),
  id text NOT NULL,
  payload jsonb,
  deleted boolean NOT NULL DEFAULT false,
  changed_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, kind, id),
  CHECK ((deleted AND payload IS NULL) OR (NOT deleted AND payload IS NOT NULL))
);

CREATE INDEX IF NOT EXISTS lifeos_journal_items_user_order
  ON lifeos_journal_items (user_id, kind, id);

-- Guest recovery codes never enter this table. Only their SHA-256 verifier is stored.
CREATE TABLE IF NOT EXISTS lifeos_journal_guest_vaults (
  owner_id text PRIMARY KEY CHECK (owner_id ~ '^guest:[0-9a-f]{64}$'),
  created_at timestamptz NOT NULL DEFAULT now()
);
