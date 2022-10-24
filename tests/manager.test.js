const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return the manager name", () => {
            const name = "Barbie";
            const result = new Manager("Barbie", "01", "email@manager.com", "1").getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the manager id", () => {
            const id = "01";
            const result = new Manager("Barbie", "01", "email@manager.com", "1").getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the manager email", () => {
            const email = "email@manager.com";
            const result = new Manager("Barbie", "01", "email@manager.com", "1").getEmail();
            expect(result).toEqual(email);
        });
    });

    describe("getOfficeNum", () => {
        it("should return the manager's office number", () => {
            const officeNum = "1";
            const result = new Manager("Barbie", "01", "email@manager.com", "1").getOfficeNum();
            expect(result).toEqual(officeNum);
        });
    });

    describe("getRole", () => {
        it("should return the manager role", () => {
            const role = "Manager";
            const result = new Manager("Barbie", "01", "email@manager.com", "1").getRole();
            expect(result).toEqual(role);
        });
    });
});