/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Promises');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data back from the server");
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 5000);
});

promise.then(response => {
  console.log(response);
}).catch(error => {
  console.log(error);
})
