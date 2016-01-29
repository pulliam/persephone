DROP TABLE IF EXISTS wizards;
DROP TABLE IF EXISTS spells;
DROP TABLE IF EXISTS spells_wizards;

CREATE TABLE wizards (
	id INTEGER PRIMARY KEY,
	name VARCHAR
);

CREATE TABLE spells ( 
	id INTEGER PRIMARY KEY,
	name VARCHAR, 
	is_deadly BOOLEAN
);

CREATE TABLE spells_wizards ( 
	spell_id INTEGER,
	wizard_id INTEGER
);