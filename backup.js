
const mysql = require("mysql");
const inquirer = require("inquirer");
// const consoleTable = require("console.table");
// const promisemysql = require("promise-mysql");

const Database = require("./db/index");


// view employee table "View All Employees" to init


function initialize() {

    loadQuestions()
};

function loadQuestions() {
    const { choice } = await.prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees", // BID
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees by Department", //POST
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees by Manager", //POST
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "quit",
                    value: "QUIT"
                }
            ]
        }
    ])
    switch (choice) {
        case "VIEW_EMPLOYEES":
            return viewEmployees();

        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            return viewEmployeesByDept();

        case "VIEW_EMPLOYEES_BY_MANAGER":
            return viewEmployeesByManager();

        case "ADD_EMPLOYEE":
            return addEmployee();

        case "REMOVE_EMPLOYEE":
            return removeEmployee();

        case "UPDATE_EMPLOYEE_ROLE":
            return updateEmployeeRole();

        case "UPDATE_EMPLOYEE_MANAGER":
            return updateEmployeeManager();

        case "VIEW_ROLES":
            return viewRoles();

        case "ADD_ROLE":
            return addRole();

        case "REMOVE_ROLE":
            return removeRole();

        case "QUIT":
            return quit();
    }
}

async function viewEmployees() {
    const employees = await Database.findAllEmployees()
    console.table(employees)
    console.log(employees)
    loadQuestions()
}

function addEmployee() {


}

// const addEmployeeQuestions = [
//     {
//         type: "input",
//         name: "addEmployeeFirst",
//         message: "What is the employee's first name?"
//     },
//     {
//         type: "input",
//         name: "addEmployeeLast",
//         message: "What is the employee's last name?"
//     },
//     {
//         type: "list",
//         name: "addEmployeeRole",
//         message: "What is the employee's role?",
//         // dynamic choices?
//         choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
//     },
//     {
//         type: "list",
//         name: "managerName",
//         message: "Who is the employee's manager?",
//         // dynamic choices?
//         choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Malia Brown", "Sarah Lourd", "Tom Allen"]
//     };
// ];

async function removeEmployee() {
    const employees = await Database.findAllEmployees()
    const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`, value: id

    }))
    const { removeEmployeeID } = await prompt([
        {
            type: "list",
            name: "removeEmployeeID",
            message: "Which employee would you like to remove?",
            choices: employeeChoices
        }
    ])
    await Database.removeEmployee(removeEmployeeID)
    console.log("Removed employee from database!")
    loadQuestions()
}



// function updateRole() {
//     //===========
// }

// const updateRoleQuestions = [
//     {
//         type: "input",
//         name: "updateRole",
//         message: "Which employee's role would you like to update?"
//     },
//     {
//         type: "list",
//         name: "employeeRoles",
//         message: //dynamic?
//         }

// ]

// function updateManager() {
//     //===========
// }

// const updateManagerQuestions = [
//     {
//         type: "list",
//         name: "updateEmployeesManager",
//         message: "Which employee's manager would you like to update?",
//         choices: //dynamic
// },
//     {
//         type: "list",
//         name: "updateManager",
//         message: "Which employee do you want to set as manager for the selected employee?",
//         choices: //dynamic   
// }
// ]

// ]


initialize();