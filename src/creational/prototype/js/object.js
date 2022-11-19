const { log } = require("console");

const personPrototype = {
  firstName: "Luiz",
  lastName: "Miranda",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "Joanna";
log(anotherPerson);
log(anotherPerson.firstName);
log(anotherPerson.fullName());
