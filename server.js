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
        'View ALL Department',
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

        case 'View ALL Department':
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
  connection.query("SELECT * FROM employeeTracker_db.employee",
  function(err, res) {
    if (err) throw err
    console.table(res)
    runSearch()
  })
}

// add function for 'View ALL Department', employeesDepartment()
function employeesDepartment() {
  connection.query("SELECT * FROM employeeTracker_db.department",
  function (err, res) {
    if (err) throw err
    console.table(res)
    runSearch()
  }
  )
}

// adding an array for new employees and managers
var roleOption = [];
function selectRole() {
  connection.query("SELECT * FROM employeeTracker_db.role", function (err, res) {
    if (err) throw err
    for (var i=0; i < res.length; i++){
      roleOption.push(res[i].title);
    }
  })
  return roleOption;
}

var managerOption = [];
function selectManager() {
  connection.query("SELECT first_name, last_name FROM employeeTracker_db.employee WHERE manager_id", function(err, res) {
    if (err) throw err 
    for (var i=0; i < res.length; i++) {
      managerOption.push(res[i].first_name);
    }
  })
  return managerOption;
}


// add function for 'Add Employee',
function addEmployee() {
  inquirer
  .prompt ([
    {
      type: "input",
      name: "firstname",
      message: "Input first name"
    },
    {
      type: "input",
      name: "lastname",
      message: "Input last name"
    },
    {
      type: "list",
      name: "role",
      message: "Input role",
      choices: selectRole()
    },
    {
      type: "input",
      name: "firstname",
      message: "Input first name",
      choices: selectManager()
    }

  ])
  .then(function (val) {
    var roleId = selectRole().indexOf(val.role) + 1
    var managerId = selectManager().indexOf(val.choice) + 1
    connection.query("INSERT INTO employee SET ?",
    {
      first_name: val.firstname,
      last_name: val.lastname,
      manager_id: managerId,
      role_id: roleId
    }, 
    function(err) {
      if (err) throw err
      console.table(val)
      runSearch()
    })
  })
}

// add function for 'Update Employee Role'
function updateEmployeeRole()




// add function for 'View All Roles'
// add function for 'Add Role',
// add function for 'Add Department'
















