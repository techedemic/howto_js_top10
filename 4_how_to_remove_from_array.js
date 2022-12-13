const cars = ["Mercedes", "Toyota", "Ford", "Volkswagen"];
console.log("Before modifying the array", cars);
// Remove the first element
// cars.shift();

// Remove the last element from an array
// cars.pop();

// Remove a specific element from an array (Toyota in this case)
cars.splice(1, 3);

console.log("After modifying the array", cars);
