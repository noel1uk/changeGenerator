class ChangeGenerator {
  constructor(moneyGiven, itemPrice) {
    this.moneyGiven = moneyGiven;
    this.itemPrice = itemPrice;
  }

  change() {
    let result = ''
    result += '1 x '
    result += this.turnToNumber(this.moneyGiven) - this.turnToNumber(this.itemPrice);
    result += 'p';
    return result;
  }

  turnToNumber(moneyGiven) {
    let number = 0;
    if ( moneyGiven[0] === '£' ) {
      number = parseInt(moneyGiven.slice(1)) * 100;
    } else {
      number = parseInt(moneyGiven.slice(0, -1));
    }
    return number;
  }
}