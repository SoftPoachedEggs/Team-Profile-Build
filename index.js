const Employee = require("./lib/Employee")

//Initialize new Employee object
const employee = new Employee(); 

const roles = ['Manager','Engineer', 'Intern']

// TODO: Create an array of questions for user input
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
        when: employee => employee.role === "Student"
      },
    ];


// TODO: Create a function to write to HTML
function writeToFile(data) {
  const fileName = "./readmefolder/README.md";

  fs.writeFile(fileName, data, function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("File created successfully!");
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(emplpyeeQuestions)
  .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();