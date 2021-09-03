let numbers: number[] = [0, 2, 4, 6, 8, 10];
numbers.sort((a, b) => b - a); // order by desc
//console.log(numbers);

// #region array use for loop to iterate

for (let i = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);
}

// change values inline
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] / 2;
}
//console.log(numbers);
// #endregion

// #region array and spread operator
console.log("---------------array and spread operator...---------------");

// rest parameter has to be the last parameter in the parameter list
function foo(...args: number[]) {
  console.log(args);
}

function foo1(a: number, ...args: number[]) {
  console.log(args);
}

// all extra arguments will be in the rest parameters
foo(6, 5, 4, 3, 2, 1); //[ 6, 5, 4, 3, 2, 1 ]
foo1(6, 5, 4, 3, 2, 1); //[ 5, 4, 3, 2, 1 ]
let origArrayOne = [1, 2, 3];
let origArrayTwo = [4, 5, 6];

//Create new array from existing array
let copyArray = [...origArrayOne];
// even we change origArrayOne, it won't affect copyArray
foo(...copyArray); // [1, 2, 3];
//Create new array from existing array + more elements
let newArray = [...origArrayOne, 7, 8];
foo(...newArray); //[ 1, 2, 3, 7, 8 ]

//Create array by merging two arrays
let mergedArray = [...origArrayOne, ...origArrayTwo]; //1,2,3,4,5,6
foo(...mergedArray); //[ 1, 2, 3, 4, 5, 6 ]

// recursion with rest parameter
function sum(...array: number[]): number {
  if (array.length === 0) return 0;
  //console.log(array.length);
  let [head, ...rest] = array;
  //console.log(head);
  //console.log(rest);
  return head + sum(...rest);
}
let result1 = sum(1, 2, 3, 4, 5);
let mynumbers = [1, 2, 3, 4, 5];
// use the ...operator in arguments so to convert the array to rest argument
let result2 = sum(...mynumbers);
console.log(result1);
console.log(result2);

let [x, y, ...remaining] = [1, 2, 3, 4, 5, 6, 7];
console.log(x); //1
console.log(y); //2
console.log(remaining); //[3, 4, 5, 6, 7];

// #endregion

// #region foreach() related
console.log("---------------foreach() related---------------");
// forEach does not change values inline, and is void so it returns undefined
let newNumbers1 = numbers.forEach((n) => {
  n = n * 2;
  console.log(n);
});
console.log(numbers);
console.log(newNumbers1); //undefined

// #endregion

// #region map() related

// map() builds a new array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// map() takes in an expression and the array with same length but updated values
let newNumbers2 = numbers.map((n) => n * 2);
//let newNumbers2 = numbers.map((n) => (n = n * 2)); //wrong
//let newNumbers2 = numbers.map((n) => {n * 2;}); //wrong
console.log(numbers);
console.log(newNumbers2);

// #endregion
