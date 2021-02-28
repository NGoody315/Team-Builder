class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
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

    getOfficeNum(){
        return this.officeNumber ({
            validate: officeNumberInput => {
                if (officeNumberInput){
                    return true;
                } else {
                    console.log('Please provide an office number.')
                }
            }
        })
    }

    getRole(){
        return this.role;
    }
}
