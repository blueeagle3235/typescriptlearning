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
//https://dmitripavlutin.com/javascript-object-destructuring/
// A simple usage:
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};

let { bread, meat } = sandwich;

//It's very convenient if we want to exact some properties of a json object.

const weight = "WeightKG";

const sam1 = {
  name: "Sam",
  age: 2,
  height: 110,
  address: { street: "404 Missing St." },
  shipping: { street: "500 NoName St." },
  [weight]: 15,
  [Symbol.for("favoriteColor")]: "Orange"
};

{
  const firstName = sam1.name;
  const theAge = sam1.age;
  console.log(`${firstName} ${theAge}`);
}

{
  const { name: firstName, age: theAge } = sam1;
  console.log(`${firstName} ${theAge}`);
}

// {
//   const { name: firstName, age: theAge } = { name: 'Sam', age: 2, height: 110 };
//   console.log(`${firstName} ${theAge}`);
// }

{
  const { name, age: theAge } = sam1;
  console.log(`${name} ${theAge}`);
}

{
  const { [weight]: wt, [Symbol.for("favoriteColor")]: favColor } = sam1;
  console.log(`${wt} ${favColor}`);
}

{
  const { lat, lon, favorite = true } = { lat: 84.45, lon: -114.12 };
  console.log(`${lat} ${lon} ${favorite}`);
}

{
  const printInfo = function (person: { name: any; age?: any }) {
    console.log(`${person.name} is ${person.age} years old`);
  };

  printInfo(sam1);
}

{
  const printInfo = function ({ name: theName, age: theAge }: any) {
    console.log(`${theName} is ${theAge} years old`);
  };

  printInfo(sam1);
}

{
  const printInfo = function ({ name, age }: any) {
    console.log(`${name} is ${age} years old`);
  };

  printInfo(sam1);
}

{
  const {
    name,
    address: { street }
  } = sam1;

  console.log(street);

  //   try {
  //     console.log(address);
  //   } catch (ex) {
  //     console.log(ex.message);
  //   }
}

{
  const {
    name,
    address: { street },
    shipping: { street: shipStreet }
  } = sam1;

  console.log(`${street} ${shipStreet}`);
}

{
  let theName = "--";
  ({ name: theName } = sam1);

  console.log(theName);
}

// Gotchas
const sam2 = {
  name: "Sam"
};

let theName = "--";
// { name: theName } = sam2; //error
//({ name: theName } = sam2;); //error
({ name: theName } = sam2);

console.log(theName);

const parker = {
  first: "Peter",
  last: "Parker",
  email: "spiderman@superheroes.example.com"
};

// poor implementation which takes out email
const addAge1 = function (
  person: { first: any; last: any; email?: string },
  theAge: number
) {
  return { first: person.first, last: person.last, age: theAge };
};

console.log(addAge1(parker, 15));

const addAge = function (
  person: { first?: string; last: any; email?: string },
  theAge: number
) {
  return { ...person, last: person.last.toUpperCase(), age: theAge };
};

console.log(addAge(parker, 15));

function address(address: any) {
  throw new Error("Function not implemented.");
}
