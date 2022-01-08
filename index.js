const { prompt } = require('inquirer');
const inq = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
        default: 'MIT License'
    },
    // Contributors
    {
        type: 'input',
        name: 'contributors',
        message: 'List of Contributors',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            } else {
                console.log('Please enter a list of Contributors.');
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
    {
        type: 'input',
        name: 'questions',
        message: 'Contact info for questions about project',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter Contact info for questions about the project')
            }
        }
    }
];


// const addContributor = contributorData => {
//     if (!contributorData) {
//         contributorData = [];
//     }
// }

// const addLink = linkData => {
//     if (!linkData) {
//         linkData = [];
//     }

//     return inq
//         .prompt(
//             [
//                 {
//                     type: 'input',
//                     message: 'Link type ex:(email, github, webpage)',
//                     validate: linkTypeInput => {
//                         if (linkTypeInput) {
//                             return true;
//                         } else {
//                             console.log('Please input A type for the link')
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'input',
//                     message: 'Add link',
//                     validate: linkInput => {
//                         if (linkInput) {
//                             return true;
//                         } else {
//                             console.log('Please enter a link')
//                             return false;
//                         }
//                     }
//                 },
//                 {
//                     type: 'confirm',
//                     name: 'addLink',
//                     message: 'Would you like to add another link?',
//                     default: false,
//                 }
//             ]
//         )
//         .then(link => {
//             linkData.push(link)
//             console.log(linkData);
//             if (link.addLink) {
//                 return addLink(linkData);
//             } else {
//                 return linkData;
//             }
//         })
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // ask
    inq
        .prompt(questions)
        .then(response => {
            return generateMarkdown(response)
        })
        .then()
    // markdown = generatemarkdown(responses)
    // writetofile(fileName, data)
}

// Function call to initialize app
init();