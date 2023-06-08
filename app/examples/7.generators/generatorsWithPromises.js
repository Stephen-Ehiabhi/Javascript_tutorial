/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */

import { coroutine as co } from 'bluebird';

console.logTitle('Generators & Promises');


const getRandomUsers = co(function* (n) {
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10).then(randomUsers => {
  randomUsers.results.forEach(user => {
    const {gender, email} = user;
    console.log(`${gender} - ${email}`);
  });
}).catch(err => console.log);
