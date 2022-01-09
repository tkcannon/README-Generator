const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a Project Title');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Project Description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of the Project.');
                return false;
            }
        }
    },
    // Installation instrucitons
    {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter Installation Instructions.');
                return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter Usage Information.');
                return false;
            }
        }
    },
    // license
    {
        type: 'list',
        name: 'license',
        message: 'Select a License',
        choices: [
            '',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v3.0',
            'GNU Affero General Public License v3.0',
            'MIT License',
            'Boost Software License 1.0',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
        default: ''
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please enter Contribution Guidelines");
                return false;
            }
        }
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter instructions for testing');
                return false;
            }
        }
    },
    // Contact Info
    // Github
    {
        type: 'input',
        name: 'github',
        message: 'github Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username')
                return false;
            }
        }
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Email Address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email')
                return false;
            }
        }
    }
];

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            return generateMarkdown(response)
        })
        .then(response => {
            return writeToFile(response);
        })
        .then(response => {
            console.log(response);
        })
}

// Function call to initialize app
init();