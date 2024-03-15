import inquirer from 'inquirer';
import fs from 'fs/promises';
import path from 'path';

// Array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type:"input",
        name:"description",
        message:"Please describe the purpose and functionality of this project",
    },
    {
    type: "input",
    name: "require",
    message: "List any dependencies here.",
},
{
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
},
{
    type: "",
    name: "license",
    message: "Please select a license for your project:",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "BSD-2-Clause", "ISC", "None"],
},
{
    type: "input",
    name: "contributors",
message: "How to make contributions?",
},
{
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project:",
},
{
    type: "input",
    name: "creator",
    message: "Please enter your GitHub username:",
},
{
    type:"input",
    name: "name",
    message:"State your full name.",
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address:",
},
];

// Function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(path.join(process.cwd(), fileName), data);
        console.log(`${fileName} created successfully.`);
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

// Generate README content
function generateMarkdown(data) {
    const { title, description, license, require, usage, creator, name, email, contributors, test } = data;
  
    return `
        # ${title}

        ## Name
        ${name}
        
        ## Description
        ${description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Contact-Me](#Contact-Me)
        - [Solution](#solution)
        - [Screenshot](#screenshot)
        - [Video Demo](#video-demo)
        
        ## Installation
        ${require}
        
        ## Usage
        ${usage}

        ## Solution
         [Link:]

         ## Screenshot
         ![Image]

         ## Video Demo
         [Video Link:]

        ## Contact-Me
    • Name - ${data.name}
    • Email - ${data.email} 
    • Github - ${data.creator}
        
        ## License
        This project is licensed under the ${license} license.
        
        ## Contributing
        ${contributors}
        
        ## Tests
        ${test}
    `;
}

async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log("Creating Professional README.md File...");
        await writeToFile("README.md", generateMarkdown(responses));
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Function call to initialize app
init();

// Exporting generateMarkdown function
export { generateMarkdown };
