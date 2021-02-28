class Intern{
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = 'Intern';
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

    getSchool(){
        return this.school ({
            validate: schoolInput => {
                if (schoolInput){
                    return true;
                } else {
                    console.log('Please provide a school or university.')
                }
            }
        })
    }

    getRole(){
        return this.role;
    }
}

module.exports=Intern;