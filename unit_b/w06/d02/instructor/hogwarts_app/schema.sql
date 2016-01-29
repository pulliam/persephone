DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS houses;

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  start_year INTEGER,
  -- house VARCHAR
  -- image_url VARCHAR
  house_id INTEGER
);

-- We move house name and image_url to another table so
-- that we only have to store that info once
CREATE TABLE houses (
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  image_url VARCHAR
);
