CREATE TABLE readers (
	id INTEGER PRIMARY KEY,
	name VARCHAR
);

CREATE TABLE periodicals (
	id INTEGER PRIMARY KEY,
	name VARCHAR
);

CREATE TABLE subscriptions (
	id INTEGER PRIMARY KEY,
	reader_id INTEGER,
	periodical_id INTEGER,
	starts_on VARCHAR,
	subscription_length INTEGER
);