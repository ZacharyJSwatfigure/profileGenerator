const inquirer = require('inquirer');
const fs = require('fs');



const questions = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Please Enter the employee name:',
            type: 'input',
            validate: inputVerify => {
                if (inputVerify) {
                    return true;
                } else {
                    console.log('Please enter the correct type of input.')
                    return false;
                }
            }
        }, 
        {
            name: 'position',
            message: 'Please Enter the posiition the employee holds:',
            type: 'list',
            choices: [
                'Department Head',
                'Supervisor',
                "Manager",
                'Employee',
                'intern'
            ]
        }, 
        {
            name: 'id',
            message: 'enter employee identification number:',
            type: 'input',
            validate: inputVerify => {
                if (isNaN(inputVerify)) {
                    console.log('Please enter the correct type of input.')
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        {
            name: 'phone',
            message: 'enter employee phone number:',
            type: 'input',
            validate: inputVerify => {
                if (isNaN(inputVerify) || (inputVerify.length !== 7)) {
                    console.log('Please enter the correct type of input (7 numbers).')
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        {
            name: 'email',
            message: 'Please Enter the employee email adress:',
            type: 'input',
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
                if (valid) {
                    console.log("Enter a Valid email adress");
                    return true;
                } else {
                    console.log("Please enter a valid email")
                    return false;
                }
            }
        },
        {
            name: 'github',
            message: 'Please Enter the employee GitHub account:',
            type: 'input',
            validate: inputVerify => {
                if (inputVerify) {
                    return true;
                } else {
                    console.log('Please enter the correct type of input.')
                    return false;
                }
            }
        }, 
    
    ])
};


questions()