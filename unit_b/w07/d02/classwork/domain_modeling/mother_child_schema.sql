DROP TABLE IF EXISTS mothers;
DROP TABLE IF EXISTS children;

CREATE TABLE mothers {
  id INTEGER PRIMARY KEY,
  name VARCHAR
};

CREATE TABLE children {
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  parent_id INTEGER REFERENCES mothers(id)
};
