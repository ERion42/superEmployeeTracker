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
        response => {
            let userChoice = response.choice;
            switch (choice) {
                case "View All Employees":
                    // viewAllEmployees();
                    console.table(connection.query ("SELECT * FROM myCompanyEmployees_db"));
                    break;
            }
        }
    )
        
    
}