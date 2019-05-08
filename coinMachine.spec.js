const { expect } = require("chai");
const CoinMachine = require("../coinMachine");

describe("CoinMachine", () => {
  it("returns an instance of CoinMachine with stash properties ", () => {
    const testCoinMachine = new CoinMachine();
    const expected = {
      "1p": 0,
      "2p": 0,
      "5p": 0,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 0
    };
    expect(testCoinMachine.stash).to.eql(expected);
  });
  it("has a coinCount property which starts at 0 ", () => {
    const testCoinMachine = new CoinMachine();
    expect(testCoinMachine.coinCount).to.equal(0);
  });
  it("has addCoins method which takes any number of arguments and updates stash", () => {
    let testCoinMachine = new CoinMachine();
    testCoinMachine.addCoins("1p");
    let expected = {
      "1p": 1,
      "2p": 0,
      "5p": 0,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 0
    };
    expect(testCoinMachine.stash).to.eql(expected);
    testCoinMachine = new CoinMachine();
    testCoinMachine.addCoins("1p", "1p");
    expected = {
      "1p": 2,
      "2p": 0,
      "5p": 0,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 0
    };
    expect(testCoinMachine.stash).to.eql(expected);

    testCoinMachine = new CoinMachine();
    testCoinMachine.addCoins("1p", "1p", "2p", "2p", "5p");
    expected = {
      "1p": 2,
      "2p": 2,
      "5p": 1,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 0
    };
    expect(testCoinMachine.stash).to.eql(expected);
    expect(testCoinMachine.coinCount).to.eql(5);
  });

  it("addCoins method updates the coinCount", () => {
    const testCoinMachine = new CoinMachine();
    testCoinMachine.addCoins("1p", "1p", "2p", "2p", "5p");
    expect(testCoinMachine.coinCount).to.eql(5);
  });
  it("has stringToNumeric method which convert a pence or pound string into a numerical value in terms of pounds", () => {
    const testCoinMachine = new CoinMachine();

    let actual = testCoinMachine.stringToNumeric("£15");
    expect(actual).to.equal(15);

    actual = testCoinMachine.stringToNumeric("£0.29");
    expect(actual).to.equal(0.29);

    actual = testCoinMachine.stringToNumeric("15P");
    expect(actual).to.eql(0.15);
  });
  /*it("has calcuateTotal method which returns sum of all money in stash, in a string and pound", () => {
    let testCoinMachine = new CoinMachine();
    const actual = testCoinMachine.calculateTotal({
      "1p": 0,
      "2p": 0,
      "5p": 0,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 1
    });
    const expected = "£1";
    expect(actual).to.equal(expected);
  }); */
});
