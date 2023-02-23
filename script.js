//set requirements and link modules
const inquirer = require("inquirer");
var fs = require('fs');
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")
const generateHTML = require("./src/generateHTML.js")
const fileName = './dist/index.html'


//create array for employee data
const employeeData = [];
console.log('Employee data:', employeeData)

const roles = ['Manager','Engineer', 'Intern']

//create input validation checks for prompt questions
const validateName = (input) => {
  const name = input;
  if (typeof input !== 'string') {
    return 'Please re-enter employee name.';
  }
  if (name === '') {
    return 'Please enter a name.';
  }
  return true;
};
//inquirer defaults to string so convert input to int and check for error.
const validateNumber = (input) => {
  const isNum = parseInt(input);
  if (Number.isNaN(isNum)) {
    return 'Please a number.';
  }
  if (isNum === '') {
    return 'Please enter a number.';
  }
  return true;
};
//check format of email to prevent mail form issues. 
const validateEmail = (input) => {
  // Email regex pattern
  const emailRegex = /\S+@\S+\.\S+/;
  // Test input against regex pattern
  if (!emailRegex.test(input)) {
    return 'Please enter a valid email address.';
  }
  return true;
};
//check string inputs for 
const validateString = (input) => {
  const isString = input;
  if (typeof isString !== 'string') {
    return 'Please re-enter.';
  }
  if (isString === '') {
    return 'Please enter.';
  }
  return true;
};

// Create an array of prompts for inquirer
const employeeQuestions = [
      {
        type: 'input',
        message: 'What is the team member name?',
        name: 'name',
        validate: validateName
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
        validate: validateNumber

      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
        validate: validateEmail

      },
      {
        type: 'list',
        message: 'What is their role?',
        choices: roles,
        name: 'role',
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeumber',
        when: employee => employee.role === "Manager",
        validate: validateNumber

      },
      {
        type: 'input',
        message: 'What is their GitHub Username?',
        name: 'gitname',
        when: employee => employee.role === "Engineer",
        validate: validateString

      },
      {
        type: 'input',
        message: 'What is their school?',
        name: 'school',
        when: employee => employee.role === "Intern",
        validate: validateString
      },
    ];

//create async function that invokes terminal prompts and switch statement to pass results to class modules
async function enterEmployeeProfile(){

  let employeeProfile = await inquirer.prompt(employeeQuestions);
  
  switch (employeeProfile.role) {
    case 'Engineer':
      let addEngineer = new Engineer(employeeProfile.name, employeeProfile.id, employeeProfile.email, employeeProfile.gitname)
      employeeData.push(addEngineer);
      break;
    case 'Manager':
      let addManager = new Manager(employeeProfile.name, employeeProfile.id, employeeProfile.email, employeeProfile.officenumber)
      employeeData.push(addManager);
      break;
    case 'Intern':
      let addIntern = new Intern(employeeProfile.name, employeeProfile.id, employeeProfile.email, employeeProfile.school)
      employeeData.push(addIntern);
      break;
    default: 
      writeToFile();
      

  }

  //Await answers from requestEmp and call function again;
  const addMore = await inquirer.prompt([
    {
      name: 'addAnother',
      type: 'confirm',
      message: 'Would you like to add another employee?',
      default: false,
    },

  ]);
  //create conditional statement to end session if no more employees to add
  if (addMore.addAnother === true) {
    enterEmployeeProfile();
  } else {
    writeToFile()
    process.exit(console.log("\nGoodbye!"));
  }
}

//Write to HTML function
function writeToFile() {

  fs.writeFileSync(fileName, generateHTML(employeeData))
  console.log('Employee data:', employeeData)
  console.log("File created successfully!");
}

async function init() {
  const choice = await inquirer.prompt({
      name: 'AddEmployee',
      type: 'list',
      choices: ['Add new Employees', 'Exit'],
      message: 'What would you like to do?'
  });
  
  if(choice.AddEmployee === 'Exit') {
      process.exit(console.log("\nGoodbye!"));
  }
  
  enterEmployeeProfile();

}

// Function call to initialize app
init();