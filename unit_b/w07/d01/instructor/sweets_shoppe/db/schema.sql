DROP TABLE IF EXISTS sweets;

CREATE TABLE sweets (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  price INTEGER,
  flavor VARCHAR(255),
  calories INTEGER,
  gluten_free INTEGER,
  img_url TEXT
);