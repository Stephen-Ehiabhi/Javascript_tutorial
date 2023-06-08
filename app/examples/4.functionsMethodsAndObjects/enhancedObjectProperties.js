/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Enhanced Object Properties');

const pricePropName = "PRICE";

const calculator = (name, price) => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2;
    },
    [pricePropName.toLowerCase()] : price
  }
}

const calc = calculator('casio', 19.99);

console.log(calc.name);
console.log(calc.add(20, 20));
console.log(calc.price);
