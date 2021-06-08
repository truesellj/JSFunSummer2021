const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
} = require("../../exercises/01-intro-variables-numbers/intro-variables-numbers");

describe("exercises/01-intro-variables-numbers/intro-variables-numbers.js", () => {
  describe("myName()", () => {
    it("should return the student's name", () => {
      const name = myName();
      expect(name).to.be.a("string").to.have.length.greaterThan(1);
    });
  });

  describe("setTeachersNames()", () => {
    it("should return  both names of the teachers that are teaching the class", () => {
      const teachersName = setTeachersNames("Jamal Taylor Matina Patsos");
      expect(teachersName).equal("Jamal Taylor Matina Patsos");
    });
  });

  describe("add()", () => {
    it("correctly adds both arguments and returns the sum", () => {
      const sum = add(5, 5);
      expect(sum).to.equal(10);
    });
  });

  describe("ageMeByAYear()", () => {
    it("should use the Javascript increment operator to increment the year by a 1", () => {
      expect(ageMeByAYear.toString().includes("++")).equal(true);
      expect(ageMeByAYear(2019)).equal(2020);
    });
  });

  describe("makeMeYoungerByAYear()", () => {
    it("should use the Javascript decrement operator to decement the age by a 1", () => {
      expect(makeMeYoungerByAYear.toString().includes("--")).equal(true);
      expect(makeMeYoungerByAYear(18)).equal(17);
    });
  });

  describe("convertStringToInt()", () => {
    it("should cast the string to an integer", () => {
      expect(convertStringToInt("5")).equal(5);
    });
  });

  describe("getTheCharacterPosition()", () => {
    it("should return the index position of the word", () => {
      expect(getTheCharacterPosition("James", "a")).equal(1);
    });
  });

  describe("stringLength()", () => {
    it("should return the length of the string", () => {
      expect(stringLength("Javascript")).equal(10);
    });
  });

  describe("getLastCharacter()", () => {
    it("should return the last letter of the string", () => {
      expect(getLastCharacter("Marvel")).equal("l");
    });
  });

  describe("getLastWordInPlaceName()", () => {
    it("should return the second word of a two word place", () => {
      expect(getLastWordInPlaceName("Los Angeles")).equal("Angeles");
    });
  });

  describe("getLargerNumber()", () => {
    it("should return the largest number by comparing both arguments given to the function", () => {
      expect(getLargerNumber(5, 10)).equal(10);
    });
  });

  describe("replaceLastName()", () => {
    it("should replace the last name of the full name with the new last name", () => {
      expect(replaceLastName("Gordon Ramsey", "Smith")).equal("Gordon Smith");
    });
  });

  describe("capitalizeLastName()", () => {
    it("should capitalize the last name", () => {
      expect(capitalizeLastName("Jane doe")).equal("Jane Doe");
    });
  });
});
