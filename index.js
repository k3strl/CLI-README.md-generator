// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
import renderLicenseBadge from './utils/generateMarkdown.js';
import renderLicenseLink from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = 
    [
    // Prompt for the project title
    { 
        type: 'input',
        name: 'title',
        message: 'Provide a title for your project.',
    },
    // Prompt for the project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.',
    },
    // Prompt for installation instructions
    {
        type: 'input',
        name: 'install',
        message: 'Provide a description of the steps required to install and/or run the application/project.',
    },
    // Prompt for usage instructions
    {
        type: 'input',
        name: 'use',
        message: 'Provide instructions for use.',
    },    
    // Prompt for contribution guidelines
    {
        type: 'input',
        name: 'contribute',
        message: 'Explain how other developers can contribute to the project.',
    },
    // Prompt for testing instructions
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for testing your project.',
    },
    // Prompt for license
    {
        type: 'rawlist',
        name: 'license',
        message: 'Choose the license for the project.',
        choices:
        [ 
            {
                name: 'Apache 2.0',
                value: 'apache',
                description: '',
            },
            {
                name: 'GPL v3',
                value: 'gplv3',
                description: '',
            },
            {
                name: 'MIT',
                value: 'mit',
                description: '',
            },
            {
                name: 'Mozilla Public License 2.0',
                value: 'mozilla',
                description: '',
            },
            {
                name: 'None',
                value: 'none',
                description: '',
            },
        ]
    },
    // Prompt for credits
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    // Prompt for github username
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username.',
    },
    // Prompt for email address
    {
        type: 'input',
        name: 'email',
        message: 'Provide an email address for questions about the project.',
    }
];

// writeToFile function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('SAMPLE.md created successfully!');
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, ' '));
        data.renderLicenseBadge = renderLicenseBadge(data.license);
        writeToFile('./SAMPLE.md', data);
    });
}

// Function call to initialize app
init();
