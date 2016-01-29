INSERT INTO readers 
(name) 
VALUES 
("Hillary"),
("Maeve"),
("Kate");

INSERT INTO periodicals 
(name) 
VALUES 
("New York Times"),
("New Yorker");

INSERT INTO subscriptions 
(reader_id, periodical_id, starts_on, subscription_length) 
VALUES 
(1, 1, "11/18/2015", 90),
(2, 1, "6/17/2014", 30),
(3, 1, "11/05/2014", 365),
(2, 2, "6/17/2014", 90);