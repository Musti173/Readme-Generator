// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
      type: "input",
      message:
        "To start making your README file please provide your project name: ",
      name: "title",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Add a description for your project",
      name: "description",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please add a description for your project!");
          return false;
        }
      },
    },
    //This creates a list of options which is also used in GenerateMarkdown to create the section, link and badge.
    {
      type: "list",
      message: "Did you include a license in your project?",
      name: "hasLicense",
      choices: ["Yes", "No"],
    },
    {
      type: "list",
      message: "What license did you use for your project?",
      name: "selectedLicense",
      choices: ["MIT", "Apache", "GNUv3.0", "BSD", "None"],
      when: (answers) => answers.hasLicense === "Yes",
    },
    {
      type: "input",
      message:
        "What technologies need to be installed in order to use your application?",
      name: "installation",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log(
            "Please enter any technologies that need installing for example, Node!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      message: "How do we use your application?",
      name: "usage",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Tell us how to use your application");
          return false;
        }
      },
    },
    {
      type: "input",
      message:
        "How do we test your application? Include how to test if it will fail",
      name: "tests",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log(
            "Tell us how to test your application, consider any potential user errors that could occur"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Who are the contributers to this application?",
      name: "contributing",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log("Include yourself and any team members if necessary");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "gitUsername",
      validate: (gitUsernameInput) => {
        if (gitUsernameInput) {
          return true;
        } else {
          console.log("Provide your GitHub username");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your GitHub URL?",
      name: "gitUrl",
      validate: (gitUrlInput) => {
        if (gitUrlInput) {
          return true;
        } else {
          console.log("Provide your GitHub URL");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "questions",
      validate: (questionsInput) => {
        if (questionsInput) {
          return true;
        } else {
          console.log(
            "Providing your email allows you to receive questions about your project"
          );
          return false;
        }
      },
    },
  
    {
      type: "list",
      message: "Did you include a license in your project?",
      name: "hasLicense",
      choices: ["Yes", "No"],
    },
    {
      type: "list",
      message: "What license did you use for your project?",
      name: "selectedLicense",
      choices: ["MIT", "Apache", "GNUv3.0", "BSD", "None"],
      when: (answers) => answers.hasLicense === "Yes",
    },
  ];
  
  // This functions creates the file, name and data using fs.
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully created README.md!");
      }
    });
  }
  
  // TODO: This is a function which will initialise the app
  function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    });
  }
  
  // Function call to initialize app
  init();
