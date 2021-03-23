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

-- Employee --

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Parker", 9, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Johnson", 8, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jackson", "Wang", null, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julie", "Smith", 7, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mia", "Alonzo", 6, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Taylor", "Ford", 5, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Paris", "Mo", 4, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andy", "Muligan", 3, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jake", "Park", null, 7);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

