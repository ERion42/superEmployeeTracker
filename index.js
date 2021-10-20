// Set Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234',
    database: 'myCompanyEmployees_db'
    },
    console.log(`Connected to the company database.`)
);


// Prompt
function initialPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Command:",
            name: "choice",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
            ]
        }
    ]).then (
        (response) => {
            let userChoice = response.choice;
            console.log(userChoice);
            switch (userChoice) {
                case "View All Departments":
                    viewDepartments();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update an Employee Role":
                    updateEmployeeRole();
                    break;
            }
        }
    ).catch(err => { console.log(err) });
        
}

// Below are the functions from the initial prompt above-
// "View" functions are simple enough- they just display tables of the requested information
function viewDepartments() {
    const query = 'SELECT * from department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Departments: ', res);
    })
};

function viewRoles() {
    const query = "SELECT * from role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Roles: ', res);
    })
};

function viewEmployees() {
    const query = "SELECT * from employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Employees: ', res);
    })
};

// The add functions get a bit trickier
// The function requests input, then INSERTS the data into the appropriate table via a query
function addDepartment() {
    inquirer.prompt([
        {
            name: "addDepartment",
            type: "input",
            message: "Department Name: "
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.addDepartment
            });
            const query = 'SELECT * from department';
            connection.query(query, function(err, res) {
                if (err) throw err;
                console.table('Departments: ', res);
            })
    })
};

function addRole() {
    inquirer.prompt([
        {
            name: "newRole",
            type: "input",
            message: "Name of Role: ",
        },
        {
            name: "salary",
            type: "input",
            message: "Starting Salary: ",
        },
        {
            name: "Department",
            type: "list",
            choices: ["choice 1", "choice 2"],
            message: "Input department: ",
        },
    ])
};

function addEmployee() {
    inquirer.prompt([
        {
            name: "fName",
            type: "input",
            message: "First Name: ",
        },
        {
            name: "lName",
            type: "input",
            message: "Last Name",
        },
        {
            name: "managerID",
            type: "input",
            message: "Manager's ID:",
        },
        {
            name: "managerID",
            type: "input",
            message: "Manager's ID:",
        },
        {
            name: "employeeRole",
            type: "list",
            choices: ["Option 1", "Option 2"],
            message: "Employee's Role: ",
        },
        
    ])
};

function updateEmployeeRole() {
    inquirer.prompt([
        {
            name: "userChoice",
            type: "list",
            choices: ["choice 1, choice 2"],    
            message: "Which employee would you like to update?"
        }
    ])
};

// run the program
initialPrompt();