/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { console.log, console.logTitle } from "console.logger";
/* your imports */
console.logTitle("Equality without type coercion and 3 equals sign");
/* coding examples */
console.log("With type coercion")
console.log(typeof 0 + " " + typeof false);
console.log(0 == false);

console.log(typeof "0" + " " + typeof false);
console.log("0" == false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 == "1");

console.log("Without type coercion")

console.log(typeof 0 + " " + typeof false);
console.log(0 === false);

console.log(typeof "0" + " " + typeof false);
console.log("0" === false);

console.log(typeof 1 + " " + typeof "1");
console.log(1 === "1");

// != !==
