const inquirer = require('inquirer');
require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the database.`)
);
promptUser();
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          "View all Departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role"
        ],
        name: 'original',
      },
    ])
  .then((response) => {
    const choice = response.original;

    switch (choice) {
      case "View all Departments":
        viewAllDepartments();
        break;
      case "View all roles":
        viewAllRoles();
        break;
      case "View all employees":
        viewAllEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      default:
        console.log('Invalid choice');
        promptUser();
    }
  })
  .catch((err) => {
    console.error(err);
    promptUser();
  });
};


function viewAllDepartments() {
  db.query('SELECT * FROM department', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  promptUser();
}

function viewAllRoles() {
  db.query('SELECT * FROM role', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  return prompt(original);

}

function viewAllEmployees() {
db.query('SELECT * FROM employee', (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  return prompt(original);

}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the department name:',
        name: 'departmentName',
      },
    ])
    .then((response) => {
      const departmentName = response.departmentName;

      const sql = `INSERT INTO department (name) VALUES (?)`;

      db.query(sql, [departmentName], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Department added successfully!');
        promptUser();
      });
    })
    .catch((err) => {
      console.error(err);
      promptUser();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the role title:',
        name: 'roleTitle',
      },
      {
        type: 'input',
        message: 'Enter the role salary:',
        name: 'roleSalary',
      },
    ])
    .then((response) => {
      const { roleTitle, roleSalary } = response;
      const sql = `INSERT INTO role (title, salary) VALUES (?, ?)`;
      db.query(sql, [roleTitle, roleSalary], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Role added successfully!');
        promptUser();
      });
    })
    .catch((err) => {
      console.error(err);
      promptUser();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the employee first name:',
        name: 'firstName',
      },
      {
        type: 'input',
        message: 'Enter the employee last name:',
        name: 'lastName',
      },
    ])
    .then((response) => {
      const { firstName, lastName } = response;
      const sql = `INSERT INTO employee (first_name, last_name) VALUES (?, ?)`;
      db.query(sql, [firstName, lastName], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Employee added successfully!');
        promptUser();
      });
    })
    .catch((err) => {
      console.error(err);
      promptUser();
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the employee ID:',
        name: 'employeeId',
      },
      {
        type: 'input',
        message: 'Enter the new role ID:',
        name: 'roleId',
      },
    ])
    .then((response) => {
      const { employeeId, roleId } = response;

      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      db.query(sql, [roleId, employeeId], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Employee role updated successfully!');
        promptUser();
      });
    })
    .catch((err) => {
      console.error(err);
      promptUser();
    });
}

