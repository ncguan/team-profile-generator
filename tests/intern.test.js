const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getName", () => {
        it("should return the intern name", () => {
            const name = "Robin";
            const result = new Intern("Robin", "03", "email@intern.com", "Gotham Academy").getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the intern id", () => {
            const id = "03";
            const result = new Intern("Robin", "03", "email@intern.com", "Gotham Academy").getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the intern email", () => {
            const email = "email@intern.com";
            const result = new Intern("Robin", "03", "email@intern.com", "Gotham Academy").getEmail();
            expect(result).toEqual(email);
        });
    });

    describe("getOfficeNum", () => {
        it("should return the intern's school", () => {
            const school = "Gotham Academy";
            const result = new Intern("Robin", "03", "email@intern.com", "Gotham Academy").getSchool();
            expect(result).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("should return the intern role", () => {
            const role = "Intern";
            const result = new Intern("Robin", "03", "email@intern.com", "Gotham Academy").getRole();
            expect(result).toEqual(role);
        });
    });
});