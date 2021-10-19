USE myCompanyEmployees_db;

-- Department Seeds
INSERT INTO department (name) 
-- Pre-population
VALUES ("Sales"),
        ("Management"),
        ("IT"),
        ("Customer Service");

-- Role Seeds
INSERT INTO role (title,salary,department_id)
VALUES ("Head Salesperson",600000,1),
        ("Junior Salesperson",300000,1),
        ("CEO",1000000,2),        
        ("Division Head",800000,3),        
        ("Floor Lead",400000,4);

-- Employee Seeds
INSERT INTO employee (first_name,last_name,manager_id,role_id)
VALUES ("John","Smith",NULL,3),
        ("Joe","Smith",1,1),
        ("Jane","Smith",1,2),
        ("Jed","Smith",1,3),
        ("Jolyne","Smith",1,4);
