const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName(){
        return inquirer.prompt([
            {//Employee Name
                type:'input',
                name:'name',
                message: 'What is your name?',
                validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a name.')
                    return false;
                }
            }
        }])
    }

    getId(){
        return this.id ({
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    console.log('Please provide an ID number.')
                }
            }
        })
    }

    getEmail(){
        return this.email ({
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Please provide an email address.')
                }
            }
        })
    }

    getRole(){
        return this.role;
    }
}

new Employee();

module.exports = Employee;