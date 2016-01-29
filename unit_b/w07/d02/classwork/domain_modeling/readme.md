Intro to Domain Modeling

Learning Objectives

- Model a Problem Domain
- Draw an Entity Relationship Diagram
- Translate an ERD into a Database Schema
- Translate a Database Schema into ActiveRecord models
- Apply ActiveRecord relationships

Vocab
Domain - The field in which we will solve a problem
Domain Modelng - a way to describe and model real world entities and the relationships between them
Entity Relationship Diagram - a data model for describing the data or information aspects of a business domain ultimately to be implemented as a database

Steps for Modeling

1. Write out how a system functions
1. Identify Nouns and verbs
1. Draw out classes, attributes and relationships

Steps for Drawing ERDS

1. Draw boxes for classes.
1. Label boxes with singular names.
1. Write attributes in the boxes.
1. Draw lines for relationships.
1. Label lines with crosses and crows feet or 1s and asterisks for ownership.

Steps for ERDS to Database Schemas

1. Create pluralized tables from classes
1. Create columns from attributes
1. Create primary keys for each table
1. Create foreign keys on each class with an asterisk or crows foot that references the cross or 1 table.
1. Identify any relationship where both classes can own multiple of the other
1. Determine if the relationship is a class of its own or purely joins them
1. Create join tables for "many to many" relationships.
1. Name join tables in alphabetical order and pluralized.

