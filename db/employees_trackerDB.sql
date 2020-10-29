DROP DATABASE IF EXISTS employees_trackerDB;

CREATE DATABASE employees_trackerDB;

USE employees_trackerDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT Null,
  name VARCHAR(30) NOT Null,
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT Null,
    first_name VARCHAR(30) NOT Null,
    last_name VARCHAR(30) NOT Null,
    role_id INT NOT Null,
    manager_id INT,
    PRIMARY KEY (id),
);
