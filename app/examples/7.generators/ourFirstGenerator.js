/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Generators');

const getNumbers = function* () {
  yield 1;
  yield "hello";
  yield true;
  yield { name: 'Alex'};
  return "i am done";
}

const numbersGen = getNumbers();

console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(numbersGen.next().value);
console.log(JSON.stringify(numbersGen.next().value));
console.log(numbersGen.next().value);
