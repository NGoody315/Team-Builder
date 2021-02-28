class Engineer{
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = 'Engineer';
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

    getGitHub(){
        return this.github ({
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please provide a GitHub username.')
                }
            }
        })
    }

    getRole(){
        return this.role;
    }

}

module.exports=Engineer;