const inq = require("inquirer");
const fs = require("fs");

const filename = "team.html";


const employeeQuestions = [
    {
        name: 'empName',
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
        ],
        validate: inputVerify => {
            if (inputVerify) {
                return true;
            }else {
                console.log('You have five options! How did you f*** that up?!')
                return false;
            }
        }
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
            if (isNaN(inputVerify) || (inputVerify.length != 7)) {
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
                console.log("!");
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
]

const goAgain = [
    {
        name: "again",
        message: "Add another employee?",
        type: "confirm",
        default: false,
    },
];


const addEmployees = async () => {
    const allEmployees = [];
    let loop = true;
    while (loop) {
        let answers = await inq.prompt(employeeQuestions);
        if (answers) {
            allEmployees.push(answers);
        }
        let a2 = await inq.prompt(goAgain);
        loop = a2.again;
    }
    return allEmployees;
};

const main = async () => {
    const all = await addEmployees();
    let htmlString = "<div>";

    all.forEach((emp) => {
        const temp = `<div style = 'display:flex; flex-direction:column; background-color:rgba(255, 0, 0, 0.4); margin:0 auto; width:500px; margin-bottom:35px; border-radius:5px;'>

        <h1 style = "text-align:center;font-size:25px;color:black;">Employee Name: ${emp.empName}</h1> 
        
        <h1 style = "text-align:center;font-size:12px;color:black;">Position: ${emp.position}</h1>
        
        <h1 style = "text-align:center;font-size:12px;color:black;">Employee ID: ${emp.id}</h1>
        
        <h1 style = "text-align:center;font-size:12px;color:black;">Phone Number: ${emp.phone}</h1>
        
        <h1 style = "text-align:center;font-size:12px;color:black;">Email adress: ${emp.email}</h1>
        
        <h1 style = "text-align:center;font-size:12px;color:black;"> Github account: ${emp.github}</h1>
        
        
        </div>`;
        
        htmlString += temp;
    });

    htmlString += "</div>";

    fs.open(filename, "a", (err, fd) => {
        if (err) {
            console.log(err.message);
        } else {
            fs.write(fd, htmlString, (err, bytes) => {
                if (err) {
                    console.log("Didn't Work: 500");
                } else {
                    console.log(bytes + " SUCCESS!! characters have been written to your Employee roster!");
                }
            });
        }
    });
};

main();
