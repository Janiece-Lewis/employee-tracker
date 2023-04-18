const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'list',
        message: 'what do you want to do?',
        name: 'answer',
        choices: ['view all departments', "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    },
    // {
    //   type: 'input',
    //   message: 'view all roles',
    //   name: 'view-all-roles',
    // },
    // {
    //   type: 'input',
    //   message: 'view all employees',
    //   name: 'view-all-employees',
    // },
    // {
    //   type: 'input',
    //   message: 'add a dept',
    //   name: 'add-dept',
    // },
    // {
    //   type: 'input',
    //   message: 'add roles',
    //   name: 'add-a-role',
    // },
    // {
    //   type: 'input',
    //   message: 'add an employee',
    //   name: 'add-employee',
    // },
    //  {
    //   type: 'input',
    //   message: 'update an employee role',
    //   name: 'update-employee-role',
    // },

];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers.answer)
        // switch for answers
        switch (answers.answer) {
            case "view all departments":
                console.log('Sales, Engineering, Finance,Legal')
                break;
            case "view all roles":
                console.log(('1, "sales lead", 100000,1'),
                    ('2, "Salesperson", 80000,1'),
                    ('3, "Lead Engineer", 150000,2'),
                    ('4, "Software Engineer", 120000,2'),
                    ('5, "Account Manager",160000,3'),
                    ('6, "Accountant", 125000,3'),
                    ('7, "Legal Team Lead", 250000,4'),
                    ('8, "Lawyer", 190000, 4'))
                break;
            case "view all employees":
                console.log('see all employees')
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
            console.log('selection unknown')
            break;
        }
    })
}

// Function call to initialize app
init();

