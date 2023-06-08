/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Promises & Fetch Api');

const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchRandomUsers.then(data => {
    data.json().then(randomUsers => {
      console.log(JSON.stringify(randomUsers.results.length));
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
        console.log(`${gender} - ${email}`);
      });
    })
  });
}

getRandomUsers(100);
