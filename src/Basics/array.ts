let numbers: number[] = [1, 0, 7, 2, 3, 4, 9, 6, 5, 8, 10];

// #region iterate array with for loop
// array has length and each item has index,
// it's 0-indexed, iteration from 0 to length-1
// for (let i = 0; i <= numbers.length-1; i++) {...}
for (let i = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);
}

// for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const n of numbers) {
  console.log(n);
}

// change values inline / in-place
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] / 2;
}
//console.log(numbers);
// #endregion

// #region items in array
// array[index] or at(index) locate item by index, index is from 0 to array.length-1
// indexOf(item) to get the index of item in the array, first one
// push(),pop() add or remove items at bottom / right
// shift(),unshift() add or remove items at top / left
// slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// splice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// to clone an array
console.log("----------------clone an array--------------");
let shallowCopy = numbers.slice(); // this is how to make a copy
console.log(shallowCopy);
// use the spread syntax
console.log([...numbers]);
// https://stackoverflow.com/questions/597588/how-do-you-clone-an-array-of-objects-in-javascript
//const newArray = myArray.map(a => ({...a}));
// #endregion

// #region array sort and reverse
numbers.sort((a, b) => a - b); // order by asc
numbers.sort((a, b) => b - a); // order by desc
// if it's an array of objects, then obj.prop can be used in the condition
//console.log(numbers);
// #endregion

// #region array destructing

let input = [1, 2];
let [first, second] = input;
//console.log (first); // 1
//console.log (second); // 2
// swap values
[first, second] = [second, first];

let input2: number[] = [1, 2, 3];
const [one, , three] = input2; // 1 and 3

// common usage of array destructing is when a function getArray() returns an array of items with fixed index
// instead of arr=getArray();firstName=arr[0], lastName=arr[1],...
// use const[firstName, lastName, ...]=getArray();
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

// array has many useful utility methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

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
