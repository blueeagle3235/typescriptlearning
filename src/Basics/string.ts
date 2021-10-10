// string interpolation
const hello = "Hello";
const world = "World";
let helloWorld: string = `${hello} ${world}!`;
console.log(helloWorld);

// to char array
const hithere = "hi there";

const usingSplit = hithere.split("");
const usingSpread = [...hithere];
const usingArrayFrom = Array.from(hithere);
const usingObjectAssign = Object.assign([], hithere);
