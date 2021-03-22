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

-- Roles --
INSERT INTO department (title, salary, department_id)
VALUES ("Sales Lead", 40000, 1);

INSERT INTO department (title, salary, department_id)
VALUES ("Salesperson", 40000, 2);

INSERT INTO department (title, salary, department_id)
VALUES ("Lead Engineer", 75000, 3);

INSERT INTO department (title, salary, department_id)
VALUES ("Software Engineer", 100000, 4);

INSERT INTO department (title, salary, department_id)
VALUES ("Accountant", 70000, 5);

INSERT INTO department (title, salary, department_id)
VALUES ("Legal Team Lead", 120000, 6);

INSERT INTO department (title, salary, department_id)
VALUES ("Lawyer", 150000, 7);

INSERT INTO department (title, salary, department_id)
VALUES ("Sales Lead", 50000, 1);








INSERT INTO department (id, name) VALUES (1, 'Engineering');

INSERT INTO role (title, salary, departmentID) VALUES ("Lead Engineer", 150000, 1);

INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('John', 'Coltrane',1, null );
