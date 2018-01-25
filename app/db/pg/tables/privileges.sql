CREATE TABLE IF NOT EXISTS privileges (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  about TEXT,
  value TEXT UNIQUE NOT NULL,
  dependencies uuid[]
)