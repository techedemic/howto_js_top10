const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// console.log(person);

// 1. This works in most versions of JS
// for (const key in person) {
//   console.log(`${key} -> ${person[key]}`);
// }

// 2. Introduced in ES6
// const keys = Object.keys(person);
// console.log(keys);

// const values = Object.values(person);
// console.log(values);

// keys.forEach((key) => {
//   console.log(`${key} -> ${person[key]}`);
// });

//3. Introduced in ES8
//const entries = Object.entries(person);
//console.log(entries);
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} -> ${value}`);
}
