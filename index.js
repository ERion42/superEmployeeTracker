// Set Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: ''
});


// Prompt
function initialPrompt() {
    inquierer.prompt([
        {
            type: "list",
            message: "W"
        }
    ])
}