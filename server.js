const inquirer = require('inquirer')
const mySql = require('mysql')
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'employeeTracker_DB',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

// need a prompt to get started 
// node server not working
const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View ALL Employees',
        'View ALL Employees By Department',
        'View ALL Employees By Roles',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'Remove Role',
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

        case 'View ALL Employees By Roles':
          employeesRoles();
          break;

        case 'Add Employee':
          addEmployee();
          break;

        case 'Remove Employee':
          removeEmployee();
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

        case 'Remove Role':
          removeRole();
          break;

        case "Exit":
          connection.end();
          break;

      }
    });
};

// add function for 'View ALL Employees' employeesSearch()
function employeesSearch() {
  connection.query("SELECT employee.firstName AS first_Name, employee.lastName AS last_name, role.title AS Title, role.salary AS Salary, department.name AS Department, CONCAT(e.firstName, ' ', e.lastName) AS Manager FROM employees INNER JOIN role on role.id = employees.roleID",
  function(err, res) {
    if (err) throw err
    console.table(res)
    runEmployeeTracker()
  })
}




// add function for 'View ALL Employees By Department', employeesDepartment()
// add function for 'View ALL Employees By Roles',
// add function for 'Add Employee',
// add function for 'Remove Employee',
// add function for 'Update Employee Role',
// add function for 'View All Roles',
// add function for 'Add Role',
// add function for 'Remove Role'














