CREATE TABLE political_parties (
	id INTEGER PRIMARY KEY,
	name VARCHAR,
	website VARCHAR,
	chairman_id INTEGER 
);

CREATE TABLE politicians (
	id INTEGER PRIMARY KEY,
	name VARCHAR,
	political_party_id INTEGER REFERENCES political_parties
);