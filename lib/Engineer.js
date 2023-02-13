const Employee = require("../lib/employee.js");

class Engineer extends Employee {
    constructor(name, id, email, gitname){ 
        super(name, id, email)
        this.gitname = gitname
    }

    getGitName(){
        return this.gitname;
    };

    getRole(){
        return `Engineer`
    };
};
module.exports = Engineer;