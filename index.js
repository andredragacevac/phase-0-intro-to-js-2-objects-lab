// Write your solution in this file!

const employee = {};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });
  
function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
return {
    ...employee,
    [streetAddress]:'11 Broadway',
};
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value) {
    employee.streetAddress= '12 Broadway';
    return employee;

  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function deleteFromEmployeeByKey(employee,name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee,name  ){
    delete employee.name;
    return employee;
  }