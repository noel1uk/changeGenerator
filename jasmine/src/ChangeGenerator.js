class ChangeGenerator {
  constructor(moneyGiven, itemPrice) {
    this.moneyGiven = moneyGiven;
    this.itemPrice = itemPrice;
  }

  change() {
  }

  turnToNumber(moneyGiven) {
    let number = parseInt(moneyGiven.slice(1)) * 100;
    return number;
  }
}