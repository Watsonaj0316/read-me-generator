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
    name: "installation",
    message: "Steps to install.",
},
{
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
},
{
    type: "list",
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
    const { title, description, license, installation, usage, creator, name, email, contributors, } = data;
  
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
        - [Contact-Me](#Contact-Me)
        - [Solution](#solution)
        - [Video Demo](#video-demo)
        
        ## Installation
        ${installation}
        
        ## Usage
        ${usage}

        ## Solution
         [Link:]https://github.com/Watsonaj0316/read-me-generator

         ## Video Demo
         [Video Link:]https://app.screencastify.com/v2/manage/videos/rZ2xJJSok3WBRztfRUh3

        ## Contact-Me
    • Name - ${data.name}
    • Email - ${data.email} 
    • Github - ${data.creator}
        
        ## License
        This project is licensed under the ${license} license.
        
        ## Contributing
        ${contributors}
        
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
