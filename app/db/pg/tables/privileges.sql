CREATE TABLE IF NOT EXISTS privileges (
  id SERIAL PRIMARY KEY,
  name TEXT,
  about TEXT,
  value TEXT,
  privilege_dependencies integer[]
)