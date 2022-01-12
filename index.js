const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
              }
            },
          {
            type: "input",
            name: "e_mail",
            message: "What is your e_mail?",
            },
          {
            type: "input",
            name: "projectname",
            message: "What is your project's name?", 
            },
          {
            type: "input",
            name: "description",
            message: "Please, describe your project",
            },
          {
            type: "input",
            name: "installation",
            message: "Please, tell about installation requierements",
            },
          {
            type: "input",
            name: "usage",
            message: "Please, provide any specific instructions for app usage",
           },
          {
            type: "list",
            name: "license",
            message: "Please, choose your license",
            choices: ["MIT", "EPL v2" , "GNU GPL v2", "Apache-2.0"],
           },
          {
            type: "input",
            name: "collaborators",
            message: "Please, list the names of your collaborators, if any",
            },
          {
            type: "input",
            name: "test",
            message: "Please, provide tests and instructions to testing",
          },
          {
            type: "input",
            name: "questions",
            message: "Please, list frequently asked questions and your reach out information",
          }
    ];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    
inquirer.prompt(questions)

.then((answers) => {
  //choose a badge
  let badge =""
  console.log(answers.license)
  if(answers.license === "MIT"){
    badge ="[![License: MIT](https://img.https://shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)"
  }else if(answers.license === "EPL v2"){
    badge ="[![License: MPL 2.0](https://img.https://shields.io/badge/License-EPL%202.0-pink.svg.svg)](https://https://opensource.org/licenses/EPL-2.0)"     
  }else if(answers.license === "GNU GPL v2"){
    badge ="[![License: GPL v2](https://img.shields.io/badge/License-GPLv2-blue.svg)](https://www.https://opensource.org/licenses/GPL-2.0)"
  }else
  {
  badge ="[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  //write README
 writeToFile("Readme.md",{...answers, badge}  )

});
}

// Function call to initialize app
init();