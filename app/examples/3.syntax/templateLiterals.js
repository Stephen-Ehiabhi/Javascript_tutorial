/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Template Literals');

const name = 'Anna';
const country = 'Canada';
const age = 33;

console.log("Name: " + name + " Country" + country + " age "+ age);
console.log(`Name ${name} Country ${country} Age ${age}`);
console.log(`Name ${name.length} Country ${country} Age ${age}`);
