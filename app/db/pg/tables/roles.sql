CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name TEXT,
  rank INTEGER,
  about TEXT,
  privileges integer[]
)