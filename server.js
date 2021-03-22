const inquirer = require('inquirer')
const sequalize = require('./config/connection');
const mySql = require('mysql12');
const consoleTable = require('console.table');


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
        'View ALL Employees By Manager',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager',
        'View All Roles',
        'Add Role',
        'Remove Role'
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

        case 'View ALL Employees By Manager':
          employeesManager();
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

        case 'Update Employee Manager':
          updateEmployeeManager();
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

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;

      }
    });
};



// // Force false so data doesn't get dropped on every sync
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });
  