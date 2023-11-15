USE employee_db;

INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Developers");
INSERT INTO department (name)
VALUES ("Accounting");


INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Advisor", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Developer", 150000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Developer", 120000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 150000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 4);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Papa", "John", 2, null); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bilbo", "Baggins", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("R2D2", "C3PO", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frodo", "Baggins", 4, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Master", "Yoda", 4, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luke", "Skywalker", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Darth", "Vader", 6, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Buzz", "Lightyear", 7, null);