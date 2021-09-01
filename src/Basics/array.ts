let numbers: number[] = [0, 2, 4, 6, 8, 10];
console.log(numbers);

// change values inline
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] / 2;
}
console.log(numbers);

// #region foreach() related

// forEach does not change values inline, and is void so it returns undefined
let newNumbers1 = numbers.forEach((n) => {
  n = n * 2;
  console.log(n);
});
console.log(numbers);
console.log(newNumbers1); //undefined
// #endregion

// #region map() related
// map() takes in an expression and the array with same length but updated values
let newNumbers2 = numbers.map((n) => n * 2);
//let newNumbers2 = numbers.map((n) => (n = n * 2)); //wrong
//let newNumbers2 = numbers.map((n) => {n * 2;}); //wrong
console.log(numbers);
console.log(newNumbers2);

// #endregion
