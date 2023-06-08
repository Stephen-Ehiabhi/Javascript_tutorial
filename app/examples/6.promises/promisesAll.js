/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Promises');

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Anna', 'Jones', 'Ali', 'Jake']);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 5000);
});

Promise.all([namesPromise, surnamesPromise]).then(data => {
  const [names, surnames] = data;
  for (var i = 0; i < names.length; i++) {
    const name = names[i];
    const surname = surnames[i];
    console.log(`${name} ${surname}`);
  }

}).catch(error => {
  console.log(error);
});
