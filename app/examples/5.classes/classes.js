/* styling */
require('styles/main.scss');
/* js */
import { console.log, console.logTitle } from 'console.logger';
/* your imports */
console.logTitle('ES6 Classes');

class Animal {
  constructor(name, age) {
    console.log(`${name} is an animal and was created`);
    this.name = name;
    this.age = age;
  }

  static iAmAstaticMethod() {
    console.log('I am a static method inside of an Animal class');
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  wakeUp() {
    console.log(`${this.name} is waking up`);
  }

  console.logAge() {
    console.log(`${this.name} is ${this.age} year old`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed;
  }

  console.logBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }

  console.logAgeFromDog() {
    super.console.logAge();
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }

  console.logAgeFromCat() {
    super.console.logAge();
  }
}

const mike = new Dog('Mike', 4, 'Bulldog');
mike.console.logBreed();
mike.console.logAgeFromDog();

console.log('----------')

const josh = new Cat('Josh', 1);
josh.console.logAgeFromCat();
josh.eat();
josh.sleep();
josh.wakeUp();
josh.console.logAge();

/*
Animal.iAmAstaticMethod();

const bobby = new Animal("bobby", 2);
bobby.eat();
bobby.sleep();
bobby.wakeUp();
bobby.sleep();
bobby.wakeUp();
bobby.console.logAge();

console.log('---------------');

const marshall = new Animal("marshall", 3);
marshall.eat();
marshall.sleep();
marshall.wakeUp();
marshall.sleep();
marshall.wakeUp();
marshall.console.logAge();
*/
