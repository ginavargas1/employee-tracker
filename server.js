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
          addDepartment();
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
function updateEmployeeRole() {
  connection.query("SELECT employee.last_name, role.title FROM employeeTracker_db.employee JOIN role ON employee.role_id = role.id;", function (err, res) {
    if (err) throw err
    console.log(res)
    inquirer
      .prompt([
        {
          name: "lastName",
          type: "rawlist",
          choices: function() {
            var lastName = [];
            for (var i=0; i<res.length; i++) {
              lastName.push(res[i].last_name);
            }
            return lastName;
          },
          message: "Input Employee's last name ",
        },
        {
          name: "role",
          type: "rawlist",
          message: "Input Employee's new title ",
          choices: selectRole()
        },
      ])
      .then(function(val){
        console.log('hello');
        console.log(val)

        var roleId = selectRole().indexOf(val.role) + 1
        connection.query("UPDATE employee SET ? WHERE ?",
        [{
          role_id: roleId
        },
        {
          last_name: val.lastName
        }
      ],
        function (err){
          if (err) throw err
          console.table(val)
          runSearch()
        }
        )
      })
  })
}

// add function for 'View All Roles'
function viewRoles() {
  connection.query("SELECT * FROM  employeeTracker_db.role",
  function (err, res) {
    if (err) throw err
    console.table(res)
    runSearch()
  })
}

// add function for 'Add Role'
function addRole() { 
  connection.query("SELECT role.title AS Title, role.salary AS Salary FROM employeeTracker_db.role",   function(err, res) {
    inquirer.prompt([
        {
          name: "Title",
          type: "input",
          message: "Input the roles Title"
        },
        {
          name: "Salary",
          type: "input",
          message: "Input the Salary"

        } 
    ]).then(function(res) {
        connection.query(
            "INSERT INTO role SET ?",
            {
              title: res.Title,
              salary: res.Salary,
            },
            function(err) {
                if (err) throw err
                console.table(res);
                runSearch();
            }
        )

    });
  });
  }

// add function for 'Add Department'
function addDepartment() {
  inquirer
    .prompt ([
      {
        name: "name",
        type: "input",
        message: "Input new Department"
      }
    ])
    .then(function(res) {
      var query = connection.query ("INSERT INTO department SET ?",
      {
        name: res.name
      },
      function (err) {
        if (err) throw err 
        console.table(res);
        runSearch();
      }
      )
    })
}
















