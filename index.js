const inquirer = require('inquirer');
const fs = require('fs');

const managerQs = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

const engineerQs = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's id?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'engineerOffice',
        message: "What is the engineer's GitHub username?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

const internQs = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's id?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

function init() {
    inquirer
        .prompt(managerQs)
        .then(answer => {
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", "abcde", (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

function askEngineerQs() {
    inquirer
        .prompt(engineerQs)
        .then(answer => {
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", "abcde", (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

function askInternQs() {
    inquirer
        .prompt(internQs)
        .then(answer => {
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", "abcde", (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

init();