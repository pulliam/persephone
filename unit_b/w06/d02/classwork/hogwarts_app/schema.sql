DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS houses;

CREATE TABLE students (
	id INTEGER PRIMARY KEY,
	name VARCHAR(100),
	start_year INTEGER,
	-- house VARCHAR(100)
	house_id INTEGER --FOREIGN KEY REFERENCES houses(id)
);

CREATE TABLE houses (
	id INTEGER PRIMARY KEY,
	name VARCHAR,
	image_url VARCHAR
);
