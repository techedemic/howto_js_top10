// 1 - Using the functions' name, with parenthesis, e.g. 'logToTerminal()'

function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(1, 2);

// console.log(sum);

// 2 Use an object method;

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (age) {
    return `${this.firstName} ${this.lastName} is ${age} years old`;
  },
};

console.log(person.fullName(30));
