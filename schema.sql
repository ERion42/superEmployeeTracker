-- Delete existing database if it exists, then create a new database
DROP DATABASE IF EXISTS myCompanyEmployees_db;
CREATE DATABASE myCompanyEmployees_db;

USE myCompanyEmployees_db;

-- Create Department Table
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30),
);

-- Create Role Table
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

-- Create Employee Table
CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT,
    role_id INT,
)
