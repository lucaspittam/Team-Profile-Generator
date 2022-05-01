const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createPage = require('./src/createPage');


let employees = [];

const addManager = () => {
    //console.log("Inside addManager");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },

        {

            type: 'number',
            name: 'id',
            message: "What's the team manager's ID?", 
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's ID!");
                    return false;
                }
            }

        },

        {

            type: 'input',
            name: 'email',
            message: "Whats the team manager's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }

        },

        {
            type: 'number',
            name: 'officeNum',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }

    ]);

}


const addEngineer = () => {
    //console.log('inside addEngineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }

        },

        {
            type: 'number',
            name: 'id',
            message: "What's the engineer's ID?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What's the engineer's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: "Whats the engineer's Github username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github username!");
                    return false;
                }
            }
        }

    ])

}
const addIntern = () => {
    //console.log('inside addIntern');
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What's the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }

        },

        {
            type: 'number',
            name: 'id',
            message: "What's the intern's ID?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What;s the intern's email ?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "What's the intern's school?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ]);

}


const displayMenu = () => {

    let done = false;
        inquirer.prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'What do you want to do?',
                choices: ['Add Engineer', 'Add Intern', 'Finish Building The Team']
            }

        ).then(menuChoice => {

            //console.log(menuChoice);
            //console.log(menuChoice.choice);
            if(menuChoice.choice === 'Add Engineer'){

                //console.log('Calling addEngineer');

                addEngineer()
                .then(engInfo => {
                    const engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.github);

                    employees.push(engineer);
                    //console.log("logging the engineer object");
                    //console.log(engineer);
                    //console.log(employees);
                    //console.log(employees0]);
                    //console.log(employees[1]);

                    displayMenu();
                })
            } else if (menuChoice.choice === 'Add Intern') {
                //console.log('Calling addIntern');
                addIntern()
                .then(intInfo => {
                    const intern = new Intern(intInfo.name, intInfo.id, intInfo.email, intInfo.school);
                    employees.push(intern);

                    //console.log("logging the intern object");
                    //console.log(intern);
                    //console.log("logging the employees array");
                    //console.log(employees);
                    //console.log(employees[0]);
                    //console.log(employees[1]);
                    displayMenu();
                })

            } else {

                 //console.log("========================================")
                //console.log('Logging the Employees Array');
                //console.log(employees);
                const pageHTML = generateHTML(employees);
                //console.log(pageHTML);
                writeToFile('./dist/index.html', pageHTML).then(writeResponse => {
                    console.log(writeResponse.message);
                    return copyStyle();
                })
                .catch(err => {
                    console.log(err);
                });
            }
        });
    //}
}


//start the application

addManager().then(function(mgrInfo){

    //console.log (mgrInfo);

    const manager = new Manager(mgrInfo.name, mgrInfo.id, mgrInfo.email, mgrInfo.officeNum);
    employees.push(manager);
    //console.log("logging the manager object");
    //console.log(manager);
    displayMenu();

})