import { users } from "./sampleData";

interface IUser {
  id: number;
  phone: string;
}
//console.log(users);

// often the case, an array of object is returned in JSON
// map is extremely useful to reshape the data to your needs
//console.log(users.map((u) => u.phone));

// to map to a new array of objects
// on the right side of arrow function, there must be a () to wrap the {}
// otherwise, JavaScript will think it is a code block
console.log(
  users.map((u) => ({
    id: u.id,
    phone: u.phone
  }))
);
let idandphone:IUser[]=users.map((u)=>({
    id:u.id,
    phone: u.phone
}))
console.log(idandphone);
// use object destructing in map
//https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
//users.map(({ id, phone }) => console.log(id, phone));
console.log(
  users.map(({ id, phone }) => ({
    id: id,
    phone: phone
  }))
);
