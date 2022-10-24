const Employee = require("./employee");

class Manager extends Employee {
    //this.officeNum = officeNum;
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "Manager"
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;