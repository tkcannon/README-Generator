// TODO: Include packages needed for this application
const inq = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'confirm',
    //     name: 'Test',
    //     message: 'Test if inquirer is working',
    //     default: true
    // }
    // Project Title
    {
        type: 'input',
        name: 'Title',
        message: 'Project Title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a Project Title')
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'Description',
        message: 'Project Description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of the Project.')
                return false;
            }
        }
    },
    // Installation instrucitons
    {
        type:
    }
    //inq usage
    //inq licence
    //inq contributing
    //inq tests
    //inq how to contact
    //inq github link
    //inq email
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    // ask
    // markdown = generatemarkdown(responses)
    // writetofile(fileName, data)
    inq
        .prompt(questions)
        .then(response => {
            console.log(response);
        })
}

// Function call to initialize app
init();