DROP TABLE IF EXISTS girls; --this means, if the file .db already
--have a table named girls, delete it and replace with this one:

CREATE TABLE girls (id INTEGER PRIMARY KEY, name VARCHAR(100), wears_glasses BOOLEAN, 
	favorite_thing VARCHAR(150));
INSERT INTO girls (name, wears_glasses, favorite_thing) VALUES ("Chris", 1, "Seahawks");