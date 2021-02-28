class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getOfficeNum(){
        return this.officeNumber
    }

    getRole(){
        return this.role;
    }
}
