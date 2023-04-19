const inquirer = require('inquirer');
const mysql = require('mysql2');
// const db = require('./config/connection');
require('console.table');
require('dotenv').config();


// connects to database
// const db = mysql.createConnection(
//     {
//         host: 'localhost',

//         user: process.env.DB_USER,

//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//     },

// );
// db.connect((err) => {
//     if (err) throw err;
//     init();

// })

//  questions for user input
const questions = [
    {
        type: 'list',
        message: 'what do you want to do?',
        name: 'answer',
        choices: ['view all departments', "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    },



];



//  function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers.answer)
            // switch for answers
            switch (answers.answer) {
                case "view all departments":
                    viewDept()
                    break;
                case "view all roles":
                    viewRoles()
                    break;

                case "view all employees":
                    viewEmployees()
                    break;

                case "add a department":
                    console.log('added dept.')
                    break;

                case "add a role":
                    console.log('added role')
                    break;

                case "add an employee":
                    console.log('added employee')
                    break;

                case "update an employee role":
                    console.log('role updated')
                    break;
                default:
                    //   db.end()
                    quit()
            }
        })
}

function viewDept() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;

        console.table(results);
        init()
    });

}

function viewRoles() {
    db.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;

        console.table(results);
        init()
    });

}

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;

        console.table(results);
        init()
    });

}


// function addDepartment() {
//     prompt([{ name: 'name', message: 'What dept. would you like to add?' }]).then((res) => {
//         db.createDepartment(res).then(()=>{
//         console.log(`added ${res} to the database.`)
//         })
//         .then(()=>{
//             init()
//         })
//     })

// }

