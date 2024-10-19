// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    question01 = { 
        type: 'input',
        name: 'title',
        message: 'Provide a title for your project.',
    },
    question02 = {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. Include the what, why, and how of your project.',
    },
    question03 = {
        type: 'input',
        name: 'install',
        message: 'If applicable, provide a description of the steps required to install and run the application/project.',
    },
    question04 = {
        type: 'input',
        name: 'use',
        message: 'Provide instructions for use.',
    },    
    question05 = {
        type: 'input',
        name: 'contribute',
        message: 'If applicable, explain how other developers can contribute to the project.',
    },
    question06 = {
        type: 'input',
        name: 'test',
        message: 'Provide instructions for testing your project.',
    },
    question07 = {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used.',
    },
    question08 = {
        type: 'input',
        name: 'license',
        message: 'Provide the license for the project.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
