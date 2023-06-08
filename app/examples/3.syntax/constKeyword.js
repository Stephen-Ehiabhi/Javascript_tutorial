/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Const keyword');

let name = 'Maria';
name = {};
name = 2;

console.log(name);

/* ************************* */

const person = {};

person['name'] = 'Maria';

console.log(person.name);

const array = [];
array.push('Maria from Array');

console.log(array[0]);
