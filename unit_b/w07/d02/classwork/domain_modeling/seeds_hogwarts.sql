INSERT INTO wizards 
(name) 
VALUES 
("Harry"),
("Draco"),
("Hermione");

INSERT INTO spells 
(name, is_deadly) 
VALUES 
("Accio", 0),
("Avada Kedavra", 1),
("Expecto Patronus", 0);

INSERT INTO spells_wizards 
(spell_id, wizard_id) 
VALUES 
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(3, 1);