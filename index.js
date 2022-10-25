const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate(answer) {
            const idRegex = /^[\d]+$/
            if (!idRegex.test(answer)) {
                return "Please enter a valid id number"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        validate(answer) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/
            if (!emailRegex.test(answer)) {
                return "Please enter a valid email"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
        validate(answer) {
            const officeRegex = /^[\w\s]+$/
            if (!officeRegex.test(answer)) {
                return "Please enter a valid office number"
            }
            else {
                return true
            }
        }
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
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
        validate(answer) {
            const idRegex = /^[\d]+$/
            if (!idRegex.test(answer)) {
                return "Please enter a valid id number"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
        validate(answer) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/
            if (!emailRegex.test(answer)) {
                return "Please enter a valid email"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the engineer's GitHub username?",
        validate(answer) {
            const githubRegex = /^[\w](?:[\w]|-(?=\w)){0,38}$/
            if (!githubRegex.test(answer)) {
                return "Please enter a valid gitHub username"
            }
            else {
                return true
            }
        }
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
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
        validate(answer) {
            const idRegex = /^[\d]+$/
            if (!idRegex.test(answer)) {
                return "Please enter a valid id number"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
        validate(answer) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/
            if (!emailRegex.test(answer)) {
                return "Please enter a valid email"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the intern's school?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
    }
]

const employees = [];

function init() {
    inquirer
        .prompt(managerQs)
        .then(answer => {
            const managerA = new Manager(answer.name, answer.id, answer.email, answer.office);
            employees.push(managerA);
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", generateHTML(employees), (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

function askEngineerQs() {
    inquirer
        .prompt(engineerQs)
        .then(answer => {
            let engineerA = new Engineer(answer.name, answer.id, answer.email, answer.office);
            employees.push(engineerA);
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", generateHTML(employees), (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

function askInternQs() {
    inquirer
        .prompt(internQs)
        .then(answer => {
            const internA = new Intern(answer.name, answer.id, answer.email, answer.office);
            employees.push(internA);
            switch (answer.addMember) {
                case 'Engineer':
                    askEngineerQs();
                    break;
                case 'Intern':
                    askInternQs();
                    break;
                case "I don't want to add any more team members":
                    fs.writeFile("./dist/team-profile.html", generateHTML(employees), (err) => err ? console.log(err) : console.log('Successfully created a team profile HTML file in the dist folder'))
                    break;
            }
        });
}

init();