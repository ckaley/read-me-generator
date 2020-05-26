const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const mdGen = require("./utils/generateMarkdown");
let picture;
let email;

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


inquirer
  .prompt(questions)
  .then(function (answers) {

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function (res) {
      if (res.data.email = "null") {
        email = "No Email Address Provided on Profile"
      } else {
        email = res.data.email;
      }
      picture = res.data.avatar_url;

      return answers;
    }).then(function (answers) {

      console.log(email);
      console.log(picture);

      fs.writeFile("README-CAK.md", mdGen.generateMarkdown(answers, picture, email), function (err) {
        if (err) {
          throw err;
        }
      });
    });
  });
