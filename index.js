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
                    viewDepartment();
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

function viewDepartments() {
    const query = 'SELECT * from department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Departments: ', res);
    })
}

function viewRoles() {
    const query = "SELECT * from role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Roles: ', res);
    })
}

function viewEmployees() {
    const query = "SELECT * from employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table('Employees: ', res);
    })
}

initialPrompt();