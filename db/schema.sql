DROP DATABASE IF EXISTS employeeTracker_db;

-- add employee tracker database --
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id AUTO_INCREMENT INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id AUTO_INCREMENT INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(65,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE employee (
    id AUTO_INCREMENT INT NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
);

