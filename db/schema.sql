-- Delete existing database if it exists, then create a new database
DROP DATABASE IF EXISTS myCompanyEmployees_db;
CREATE DATABASE myCompanyEmployees_db;

USE myCompanyEmployees_db;

-- Create Department Table
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

-- Create Role Table
CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) -- The relationship between the two databases
);

-- Create Employee Table
CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager_id INT UNSIGNED,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL -- If manager is deleted, this gets marked as NULL
    role_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCASDE -- When the role is eliminated, delete the employee
)
