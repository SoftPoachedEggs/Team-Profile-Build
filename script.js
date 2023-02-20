//set requirements and link modules
const inquirer = require("inquirer");
var fs = require('fs');
const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")

//create array for employee data
const employeeData = [];

//Initialize new Employee object
//const employee = new Employee(); 

const roles = ['Manager','Engineer', 'Intern']

// Create an array of questions for user input
const employeeQuestions = [
      {
        type: 'input',
        message: 'What is the team member name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
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
        name: 'officenumber',
        when: employee => employee.role === "Manager",
      },
      {
        type: 'input',
        message: 'What is their GitHub Username?',
        name: 'gitname',
        when: employee => employee.role === "Engineer"
      },
      {
        type: 'input',
        message: 'What is their school?',
        name: 'school',
        when: employee => employee.role === "Intern"
      },
    ];
//create async function that invokes terminal prompts and switch statement to pass results to subclass modules
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

  }

  //Await answers from requestEmp and call function again if ;
  const addMore = await inquirer.prompt([
    {
      name: 'addAnother',
      type: 'confirm',
      message: 'Would you like to add another employee?',
      default: false,
    },

  ]);
  //create conditional statement to end session if no more employees to add
  if (admore.addAnother === true) {
    enterEmployeeProfile();
  } else {
  
  }
}

// TODO: Create a function to write to HTML
function writeToFile(data) {
  const fileName = "./dist/index.html";

  fs.writeFileSync(fileName, data)
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
      prompt.ui.close();
      console.log("\nGoodbye!");
  }
  
  enterEmployeeProfile();

}

// Function call to initialize app
init();