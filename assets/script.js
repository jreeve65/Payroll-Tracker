// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
// Collect employee data
const collectEmployees = function () {

  //check to see if we want to keep adding employees.
  let keepGoing = true;

  while (keepGoing) {
    // TODO: Get user input to create and return an array of employee objects
    const firstName = window.prompt("Please enter employee's first name.");
    const lastName = window.prompt("Please enter employee's last name.");
    let salary = window.prompt("please enter employee's salary");
    //employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };
    //console.log(employee); //delete later
    employeesArray.push(employee);//pushes new object into array
    keepGoing = confirm('Would you like to add another Employee?');
  }
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  const numberOfemployees = employeesArray.length;
  for (const employee of employeesArray) {
    totalSalary+= employee.salary;
    
  }
  const average = totalSalary / numberOfemployees;
  console.log(average);
  return average;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
 const randomEmployee= employeesArray[Math.floor(Math.random()*employeesArray.length)];
 console.log(`Congrats ${randomEmployee.firstName} ${randomEmployee.lastName} you won the drawing`);

}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();
  console.log(employees);
  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
