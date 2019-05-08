class CoinMachine {
  constructor() {
    this.stash = {
      "1p": 0,
      "2p": 0,
      "5p": 0,
      "10p": 0,
      "20p": 0,
      "50p": 0,
      "£1": 0
    };
    this.coinCount = 0;
  }
  addCoins(...coins) {
    for (let i = 0; i < coins.length; i++) {
      this.stash[coins[i]] = this.stash[coins[i]] + 1;
    }
    this.coinCount = this.coinCount + coins.length;
  }
  stringToNumeric(money) {
    if (money[0] === "£") {
      const integerMoney = +money.slice(1);
      return integerMoney;
    } else {
      return parseInt(money) / 100;
    }
  }
  calculateTotal() {
    //this.stash;
    //return x.reduce((accum, currentValue => currentValue.money + accum, 0));
    //return "£" + accum;
    //return "£1";
  }
}

module.exports = CoinMachine;
