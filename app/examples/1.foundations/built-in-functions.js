/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Built in Functions')
/* coding examples */

var person = {name: "Anna", age: 20};
console.log(Object.keys(person));
console.log(Object.values(person));

console.log("James Bond".toLowerCase());
console.log("James Bond".toUpperCase());
console.log("James Bond".endsWith("Bond"));
console.log("James Bond".startsWith("James"));
