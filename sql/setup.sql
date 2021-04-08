DROP TABLE IF EXISTS flowers, trees;

-- INT or INTEGER or SERIAL -> 32bit number
-- BIGINT or BIGINTEGER or BIGSERIAL -> 64bit number
CREATE TABLE flowers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  flower_name TEXT, 
  flower_type TEXT,
  flower_quantity INTEGER
);

CREATE TABLE trees (
  tree_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tree_name TEXT, 
  tree_type TEXT,
  tree_quantity INTEGER
);
