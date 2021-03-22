-- Adding seed to pre-populate database --
-- department seeds --
-- Creates new rows containing data in all named columns --
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineer");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");










INSERT INTO department (id, name) VALUES (1, 'Engineering');

INSERT INTO role (title, salary, departmentID) VALUES ("Lead Engineer", 150000, 1);

INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('John', 'Coltrane',1, null );
