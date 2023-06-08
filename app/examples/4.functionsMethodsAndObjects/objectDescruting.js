/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Object Descruturing');

const getUser = () => {
  return {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    address: {
      country: 'United States',
      city: 'California',
      postCode: 'CA',
      fullAddress: {
        doorNumber: 22,
        street: 'LA st'
      }
    },
    age: 29
  }
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
const doorNumber = user.address.fullAddress.doorNumber;

const { name : theName, age : theAge, address : { country : theCountry } } = user;
const { address : { fullAddress : { doorNumber : number } } } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
console.log(number);
