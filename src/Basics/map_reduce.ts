import { users } from "./sampleData";

//console.log(users);

//console.log(users.map((u) => u.phone));

// one the right side of arrow function, there must be a () to wrap the {}
// otherwise, JavaScript will think it is a code block
console.log(
  users.map((u) => ({
    id: u.id,
    phone: u.phone
  }))
);

//https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
//users.map(({ id, phone }) => console.log(id, phone));
console.log(
  users.map(({ id, phone }) => ({
    id: id,
    phone: phone
  }))
);
