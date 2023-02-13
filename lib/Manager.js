const Employee = require("../lib/employee.js");

class Manager extends Employee {
    constructor(name, id, email, officenumber){ 
        super(name, id, email)
        this.officenumber = officenumber
    }

    getOfficeNumber(){
        return this.officenumber
    };

    getRole(){
        return `Employee`
    };
};

module.exports = Manager;