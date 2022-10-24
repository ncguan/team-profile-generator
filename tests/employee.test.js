const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employee name", () => {
            const name = "Barbie";
            const result = new Employee("Barbie", "01", "email@employee.com").getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the employee id", () => {
            const id = "01";
            const result = new Employee("Barbie", "01", "email@employee.com").getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the employee email", () => {
            const email = "email@employee.com";
            const result = new Employee("Barbie", "01", "email@employee.com").getEmail();
            expect(result).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const role = "Employee";
            const result = new Employee("Barbie", "01", "email@employee.com").getRole();
            expect(result).toEqual(role);
        });
    });
});