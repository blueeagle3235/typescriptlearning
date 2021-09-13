//https://www.typescriptlang.org/play?strict=false&q=427#example/objects-and-arrays
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let origObjectOne = { a: 1, b: 2, c: 3 }; //{a: 1, b: 2, c: 3}
let origObjectTwo = { d: 4, e: 5, f: 6 }; //{d: 4, e: 5, f: 6}

//Create new object from existing object
let copyObject = { ...origObjectOne }; //{a: 1, b: 2, c: 3}

//Create new object from existing object + more elements
let newObject = { ...origObjectOne, g: 7, h: 8 }; //{a: 1, b: 2, c: 3, g: 7, h: 8}

//Create object by merging two objects
let mergedObject = { ...origObjectOne, ...origObjectTwo }; //{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// object as parameter

// object destructuring
