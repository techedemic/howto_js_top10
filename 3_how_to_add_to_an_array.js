// const cars = ["Toyota", "Ford"];
// cars.push("Tesla");
// cars.push(10);
// console.log(cars);

// lottery number picker
const NUMBER_COUNT = 6;
const NUMBER_MAX = 49;
const lottoNumbers = [];

while (lottoNumbers.length < NUMBER_COUNT) {
  const x = Math.floor(Math.random() * NUMBER_MAX);
  if (x !== 0 || lottoNumbers.indexOf(x) === -1) {
    lottoNumbers.push(x);
  }
}

console.log(lottoNumbers);
