/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Callbacks')
/* coding examples */

function callbackExample(name, callback) {
  console.log(callback(name));
}

var callback = function(name) {
  return "Hola " + name;
}

callbackExample("Abel Mohammado", function(name) {
  return "Hola " + name;
});
