const fs = require("fs"); // needed to write out the README.md file
const axios = require("axios"); // library used to get information from Github
const inquirer = require("inquirer"); // utlized for asking questions and obtaining answers from the user
const mdGen = require("./utils/generateMarkdown"); // Using seperate built library to generate README.md file content
let picture; // defined as global variable to be used across promises
let email; // defined as global variable to be used across promises

// The following are is the question array to pass into the inquirer library to prompt the user and 
// obtain teh resulting answers
const questions = [{
  type: "input",
  message: "Enter your Github username:",
  name: "username"
},
{
  type: "input",
  message: "Enter your Project Title:",
  name: "title"
},
{
  type: "input",
  message: "Enter your Project Description:",
  name: "description"
},
{
  type: "input",
  message: "What are the steps required to install your project?",
  name: "installation"
},
{
  type: "input",
  message: "Provide instructions and examples for use:",
  name: "usage"
},
{
  type: "list",
  message: "What license does this project leverage?",
  name: "license",
  choices: [
    "Apache",
    "MIT",
    "GNU",
    "None"
  ]
},
{
  type: "input",
  message: "Provide guidelines for contributing to this project:",
  name: "contributing"
},
{
  type: "input",
  message: "Provide tests and guidelines to run them:",
  name: "tests"
},
{
  type: "input",
  message: "Provide questions and answers that a user of this program may ask:",
  name: "questions"
}
];

// This is where the work starts. 
inquirer
  // Prompt teh user for all of the questions as defined in the questions array and obtain answers
  .prompt(questions)
  // Once the prompting is complete and answers obtained, then peform the next anonymous funciton 
  // includes calling out to Github to get informaiton.  Pass in the answers key/value hash that resulted from the prompt
  .then(function (answers) {
    // construct URL for calling out to Guithub
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    // Make the call to Git expecting a result back with information about the user
    axios.get(queryUrl).then(function (res) {
      // If there is no email information obtained back, then set the global email text to No Email....
      if (res.data.email = "null") {
        email = "No Email Address Provided on Profile"
        // If there is an email address, then use it
      } else {
        email = res.data.email;
      }
      // Obtain the picture URL of the user and set the global picture variable
      picture = res.data.avatar_url;
      // Return answers so it can be passed to the next chained .then function
      return answers;
      // 
    }).then(function (answers) {

      // Write out the README-TEMP.md file by calling the custom built generateMarkdown fucntion to create the content
      fs.writeFile("README-TEMP.md", mdGen.generateMarkdown(answers, picture, email), function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
