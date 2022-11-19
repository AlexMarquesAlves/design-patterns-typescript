const { log } = require("console");

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Luiz",
  lastName: "Miranda",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "Oie";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person("Leo", "Kusanagi", 22);
log(person1);
log(person1.fullName());

const person2 = new SubPerson("Helena", "Motoko", 30);
log(person2);
log(person2.fullName());
