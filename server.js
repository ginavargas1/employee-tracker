const inquirer = require('inquirer')
const mysql = require('mysql')
const consoleTable = require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'employeeTracker_DB',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as ID" + connection.threadId)
  runSearch();
});

// need a prompt to get started 
const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View ALL Employees',
        'View ALL Employees By Department',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'Add Department',
        'Exit'
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View ALL Employees':
          employeesSearch();
          break;

        case 'View ALL Employees By Department':
          employeesDepartment();
          break;

        case 'Add Employee':
          addEmployee();
          break;
        
        case 'Update Employee Role':
          updateEmployeeRole();
          break;

        case 'View All Roles':
          viewRoles();
          break;

        case 'Add Role':
          addRole();
          break;

        case 'Add Department':
          addRole();
          break;

        case "Exit":
          connection.end();
          break;

      }
    });
};

// add function for 'View ALL Employees' employeesSearch()
// not working 
function employeesSearch() {
  connection.query("SELECT employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Title, role.salary AS Salary, department.name AS Department, CONCAT(e.first_name, ' ', e.last_name) AS Manager FROM employees INNER JOIN role on role.id = employees.roleID",
  function(err, res) {
    if (err) throw err
    console.table(res)
    runSearch()
  })
}

// add function for 'View ALL Employees By Department', employeesDepartment()
function employeesDepartment() {
  connection.query("SELECT employee.first_name AS First_Name, employee.last_name AS Last_Name, department.name AS Department FROM employee JOIN role ON employees.roleID = role.id JOIN department ON role.department_id = department.id ORDER BY department_id;",
  function (err, res) {
    if (err) throw err
    console.table(res)
    runSearch()
  }
  )
}






// add function for 'View ALL Employees By Roles',
// add function for 'Add Employee',
// add function for 'Remove Employee',
// add function for 'Update Employee Role',
// add function for 'View All Roles',
// add function for 'Add Role',
// add function for 'Remove Role'













