class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }

    getName(){
        return this.name ({
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a name.')
                }
            }
        })
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