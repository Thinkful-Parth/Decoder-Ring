const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    let actual = substitution(
      "Zebra Mango",
      "!@#$%^&*ukswaflnthdjpzibev",
    );
    let expected = "v%@h! a!f&l";
    expect(actual).to.equal(expected);
  });
  it("Spaces should be maintained throughout.", () => {
    let actual = substitution("Zebra Mango", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "vmohx axfgl";
    expect(actual).to.equal(expected);
  });
  it("Capital letters can be ignored.", () => {
    let actual = substitution("Zebra Mango", "xoyqmcgrukswaflnthdjpzibev");
    let expected = "vmohx axfgl";
    expect(actual).to.equal(expected);
  });
  it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
    let actual = substitution("Zebra Mango", "xoyqmcgrukswaflntdjpzbev");
    expect(actual).to.be.false;
  });
  it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
    let actual = substitution("Zebra Mango", "xxxxxxxxxxxxxxxxxxxxxxxxxx");
    expect(actual).to.be.false;
  });
});
