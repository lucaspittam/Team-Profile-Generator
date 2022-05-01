const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const { writeToFile, copyStyle } = require('./src/createPage');

//global array to keep employee objects 
let employees = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Whats the manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What's the manager's ID?", 
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("Eter the manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the manager's email address?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNum',
            message: "What's the manager's office number?",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log("Enter the manager's office number!");
                    return false;
                }
            }
        }
    ]);
}

//if  user adds engineer, function is called and the user is prompted w/ questions.
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Enter the engineer's name!");
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
                    console.log("Enter the engineer's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the engineer's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What's the engineer's Github username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Enter the engineer's Github username!");
                    return false;
                }
            }
        }
    ])
    
}

//User adds intern, Function is called and user is asked questions.
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Enter the intern's name!");
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
                    console.log("Enter the intern's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the intern's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Enter the intern's email!");
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
                    console.log("Enter the intern's school!");
                    return false;
                }
            }
        }
    ]);
   
}
//Function to display menu where user adds class or finish. depending on answer function is called
const displayMenu = () => {
    let done = false;
        inquirer.prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: ['Add Engineer', 'Add Intern', 'Finish']
            }
        ).then(menuChoice => {
        
            if(menuChoice.choice === 'Add Engineer'){
                addEngineer()
                .then(engInfo => {
                    const engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.github);
                    employees.push(engineer);
                    displayMenu();
            
                })
            } else if (menuChoice.choice === 'Add Intern') {
                addIntern()
                .then(intInfo => {
                    const intern = new Intern(intInfo.name, intInfo.id, intInfo.email, intInfo.school);
                    employees.push(intern);
                    displayMenu();
            
                })
            } else {
                console.log('Finished building team');
                const pageHTML = generateHTML(employees);
                //create index.html
                writeToFile('./dist/index.html', pageHTML).then(writeResponse => {
                    console.log(writeResponse.message);
                    //copy the style.css sheet
                    return copyStyle();
                })
                .catch(err => {
                    console.log(err);
                });
            }
        });
}

//application start
addManager().then(function(mgrInfo){
    const manager = new Manager(mgrInfo.name, mgrInfo.id, mgrInfo.email, mgrInfo.officeNum);
    employees.push(manager);
    displayMenu();
}).catch(err => {
    console.log(err);
});
