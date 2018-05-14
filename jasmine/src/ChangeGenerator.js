class ChangeGenerator {
  constructor(moneyGiven, itemPrice) {
    this.moneyGiven = moneyGiven;
    this.itemPrice = itemPrice;
  }

  change() {
  }

  turnToNumber(moneyGiven) {
    let number = 0
    if ( moneyGiven[0] === '£' ) {
      number = parseInt(moneyGiven.slice(1)) * 100;
    } else {
      number = parseInt(moneyGiven.slice(0, -1));
    }
    return number;
  }
}