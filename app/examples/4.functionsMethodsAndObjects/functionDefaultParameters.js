/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('Function Default Parameters');

const calculatePay = (yearSalary, bonus = {
  teamBonus: 0,
  employeeBonus: 0
}) => {
  return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculatePay(22000, {teamBonus: 10000, employeeBonus: 6000 }));
