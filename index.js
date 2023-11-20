// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project's description?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Do you want a Table of Contents?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any info on how to install!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any info for usage!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What License applies to your application?',
        choices: [
            'None',
            'Apache license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'MIT',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]        
    },
    {
        type: 'input',
        name: 'contribute',
        message: "What are your contribution guidelines?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any how to contribute info!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any how to test info!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub Username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a email!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile('./dist/README.md', pageMarkdown);
            console.log('README.md created!')
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
