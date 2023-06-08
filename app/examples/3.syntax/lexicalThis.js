/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Lexical this');

const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    // console.log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      console.log(`${this.name} has ${car}`);
    });
  }
}

person.toString();
