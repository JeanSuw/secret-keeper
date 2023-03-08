class Employee{
    constructor(name, id, email){
        this.empName = name;
        this.empId = id;
        this.empEmail = email;
    }
    getName() {
        return this.empName;
    }
    getId(){
        return this.empId;
    }
    getEmail(){
        return this.empEmail;
    }
    getRole(){
        return Employee;
    }
}

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return Manager;
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return Engineer;
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return Intern;
    }
}