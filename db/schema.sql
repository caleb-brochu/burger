drop database burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
    id INT AUTO_INCREMENT NOT NULL,
    table, column, value VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
