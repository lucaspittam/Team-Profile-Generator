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
            message: "What is the team manager's name?"

        },

        {

            type: 'number',
            name: 'id',
            message: "What is the team manager's ID?"

        },

        {

            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?"

        },

        {
            type: 'number',
            name: 'officeNum',
            message: "What is the team manager's office number?"
        }

    ]);

}


const addEngineer = () => {
    //console.log('inside addEngineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"

        },

        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's ID?"
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },

        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?"
        }

    ])

}
const addIntern = () => {

    //console.log('inside addIntern');

    return inquirer.prompt([

        {

            type: 'input',

            name: 'name',

            message: "What is the intern's name?"

        },

        {

            type: 'number',
            name: 'id',
            message: "What is the intern's ID?"

        },

        {

            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"

        },

        {

            type: 'input',
            name: 'school',
            message: "What is the intern's school?"

        }

    ])




}




const displayMenu = () => {

    let done = false;

    //while (!done) {

        inquirer.prompt(

            {

                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',

                choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team']

            }

        ).then(menuChoice => {

            //console.log(menuChoice);
            //console.log(menuChoice.choice);
            if(menuChoice.choice === 'Add an Engineer'){

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
            } else if (menuChoice.choice === 'Add an Intern') {
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

                done = true;

                console.log('Finished building team');
                console.log("========================================")
                console.log('Logging the Employees Array');
                console.log(employees);

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