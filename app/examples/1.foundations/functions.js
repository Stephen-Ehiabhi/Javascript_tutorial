/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { console.log, console.logTitle } from "console.logger";
/* your imports */
console.logTitle("Functions");
/* coding examples */

function addNumbers(n1, n2) {
  // start of function boddy
  // Define console.logic
  // 3 + 2
  var result = n1+n2;
  return result;
  // end of function boddy
}

var result = addNumbers(10, 20);
console.log(result)
