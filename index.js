const inquirer = require('inquirer')



const questions = () => {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Please Enter the employee name:',
            type: 'input'
        }, 
        {
            name: 'position',
            message: 'Please Enter the posiition the employee holds:',
            type: 'input'
        }, 
        {
            name: 'id',
            message: 'enter employee identification number:',
            type: 'input'
        }, 
        {
            name: 'phone',
            message: 'enter employee phone number:',
            type: 'input'
        }, 
        {
            name: 'email',
            message: 'Please Enter the employee email adress:',
            type: 'input'
        }, 
        {
            name: 'github',
            message: 'Please Enter the employee GitHub account:',
            type: 'input'
        }, 
    
    ])
};