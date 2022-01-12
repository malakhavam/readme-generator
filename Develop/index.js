const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            name: "e-mail",
            message: "What is your e-mail?",
            },
          {
            type: "input",
            name: "project_name",
            message: "What is the name of your project?", 
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
            message: "Please, provide instructions for use",
           },
          {
            type: "list",
            name: "license",
            message: "Please, choose the license",
            choices: ["Permissive", "Public", "Proprietary", "Copyleft", "LGPL"],
           },
          {
            type: "input",
            name: "collaborators",
            message: "Please, put names of your collaborators",
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
    ]);
};


