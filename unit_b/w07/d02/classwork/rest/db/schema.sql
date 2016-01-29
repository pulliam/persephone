DROP TABLE IF EXISTS kittens;

CREATE TABLE kittens (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  age INTEGER,
  fuzziness INTEGER,
  img_url TEXT
);