const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
    let actual = caesar("hello", 27);
    expect(actual).to.be.false;
    actual = caesar("hello", 0);
    expect(actual).to.be.false;
    actual = caesar("hello");
    expect(actual).to.be.false;
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    let actual = caesar("Hello", 20);
    expect(actual).to.equal("byffi");
    actual = caesar("hello", 20);
    expect(actual).to.equal("byffi");
  });
  it("When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)", () => {
    let actual = caesar("Zebra", 20);
    expect(actual).to.equal("tyvlu");
  });
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    let expected = "khoor iurp wkh cheud!";
    let actual = caesar("hello from the zebra!", 3);
    expect(actual).to.equal(expected);
    actual = caesar("khoor iurp wkh cheud!", 3, false);
    expected = "hello from the zebra!";
    expect(actual).to.equal(expected);
  });
});
