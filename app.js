const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Madeline",
    database: "employees_trackerDB"
});

// connection.connect(function (err) {
//     if (err) throw err;
//     initialize()
// });

// view employee table "View All Employees" to init
initialize();

function initialize() {
    inquirer.prompt({
        type: "list",
        name: "mainMenuAction",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Employees by Department", "View All Employees by Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View Roles", "Add Role", "Remove Role", "QUIT"]
    }).then(function (choice) {
        switch (choice.mainMenuAction) {
            case "View All Employees":
                return viewEmployees();

            case "View All Employees by Department":
                return viewEmployeesByDept();

            case "View All Employees by Manager":
                return viewEmployeesByManager();

            case "Add Employee":
                return addEmployee();

            case "Remove Employee":
                return removeEmployee();

            case "Update Employee Role":
                return updateEmployeeRole();

            case "Update Employee Manager":
                return updateEmployeeManager();

            case "View Roles":
                return viewRoles();

            case "Add Role":
                return addRole();

            case "Remove Role":
                return removeRole();

            case "QUIT":
                return quit();
        }
    })
}

// FUNCTIONS ============================
function viewEmployees() {
    var employeeTable = [];
    var query = "SELECT employee.id, first_name, last_name, title, salary, department_name FROM employee JOIN employee_role ON (employee.role_id = employee_role.id) JOIN department ON (department.id = employee_role.department_id)";

    connection.query(query, function (err, result) {
        if (err) throw err;

        var employeeArray = [];


        for (var i = 0; i < result.length; i++) {

            employeeArray = [];

            employeeArray.push(result[i].id);
            employeeArray.push(result[i].first_name);
            employeeArray.push(result[i].last_name);
            employeeArray.push(result[i].title);
            employeeArray.push(result[i].salary);
            employeeArray.push(result[i].department_name);

            console.log(employeeArray);


            allEmployeeArray.push(employeeArray);

        }
        console.log("\n\n\n");
        console.table(["ID", "First Name", "Last Name", "Role", "Salary", "Department"], employeeTable);
        console.log("\n\n\n");

        promptQuit();
    });
}

// function viewEmployeesByDept();

// function viewEmployeesByManager();

function addEmployee() {
    const addEmployeeQuestions = [
        {
            type: "input",
            name: "addEmployeeFirst",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "addEmployeeLast",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "addEmployeeRole",
            message: "What is the employee's role ID?",
            // dynamic choices?
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        },
        {
            type: "list",
            name: "managerName",
            message: "Who is the employee's manager?",
            // dynamic choices?
            choices: ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Malia Brown", "Sarah Lourd", "Tom Allen"]
        }
    ]
    inquirer.prompt(addEmployeeQuestions).then(function(answer) {
        connection.query("INSERT INTO employee SET ?", {
            first_name: answer.addEmployeeFirst.addEmployeeFirst,
            last_name: answer.addEmployeeLast,
            role_id: answer.addEmployeeFirstRole
        });
        console.log("Added new employee to database!");
    })
    // initialize(); ***figure out a way to restart/quit menu***
}

// function removeEmployee();

// function updateEmployeeRole();

// function updateEmployeeManager();

// function viewRoles();

// function addRole();

// function removeRole();

// function quit();



// async function removeEmployee() {
//     const employees = await Database.findAllEmployees()
//     const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
//         name: `${first_name} ${last_name}`, value: id

//     }))
//     const { removeEmployeeID } = await prompt([
//         {
//             type: "list",
//             name: "removeEmployeeID",
//             message: "Which employee would you like to remove?",
//             choices: employeeChoices
//         }
//     ])
//     await Database.removeEmployee(removeEmployeeID)
//     console.log("Removed employee from database!")
//     loadQuestions()
// }



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

// 