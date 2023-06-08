/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Array Destructuring');

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, , joe, ...restOfNames] = names;

console.log(`${anna} ${joe}`);
console.log(restOfNames);
console.log(restOfNames.length);
