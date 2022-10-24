const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return the engineer name", () => {
            const name = "Batman";
            const result = new Engineer("Batman", "02", "email@engineer.com", "Batcomputer").getName();
            expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the engineer id", () => {
            const id = "02";
            const result = new Engineer("Batman", "02", "email@engineer.com", "Batcomputer").getId();
            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the engineer email", () => {
            const email = "email@engineer.com";
            const result = new Engineer("Batman", "02", "email@engineer.com", "Batcomputer").getEmail();
            expect(result).toEqual(email);
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's GitHub username", () => {
            const github = "Batcomputer";
            const result = new Engineer("Batman", "02", "email@engineer.com", "Batcomputer").getGithub();
            expect(result).toEqual(github);
        });
    });

    describe("getRole", () => {
        it("should return the engineer role", () => {
            const role = "Engineer";
            const result = new Engineer("Batman", "02", "email@engineer.com", "Batcomputer").getRole();
            expect(result).toEqual(role);
        });
    });
});