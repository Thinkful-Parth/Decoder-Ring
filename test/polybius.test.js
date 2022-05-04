const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.", () => {
    const actual = polybius("zebra mango");
    const expected = "5551212411 2311332243";
    expect(actual).to.equal(expected);
  });
  it("When encoding, your output should still be a string.", () => {
    const actual = polybius("zebra");
    expect(actual).to.be.string;
  });
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
    const actual = polybius("5551212411 231133224", false);
    expect(actual).to.be.false;
  });
  it("Spaces should be maintained throughout.", () => {
    const actual = polybius("zebra mango");
    const expected = "5551212411 2311332243";
    expect(actual).to.equal(expected);
  });
  it("Capital letters can be ignored.", () => {
    const actual = polybius("Zebra");
    const expected = "5551212411";
    expect(actual).to.equal(expected);
  });
  it('The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.', () => {
    let actual = polybius("igloo Jesus");
    let expected = "4222134343 4251345434";
    expect(actual).to.equal(expected);
    actual = polybius(expected, false);
    expected = "i|jgloo i|jesus";
    console.log(actual);
    expect(actual).to.equal(expected);
  });
});
