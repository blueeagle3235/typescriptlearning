let a;
console.log(a); //undefined
let b: number;
//console.log(b); //Variable 'b' is used before being assigned.ts(2454)
let c = 0;
console.log(typeof c); //number

//variables can be declared and initialized in destructuring
const [a1, b1, c1 = "3"] = [1, 2, 3, 4];
