// it's good for materializing data from database
// but it can be done using object array and object destructuring
let hat1: [string, number] = ["bonnet", 100];
let hat2: [string, number] = ["baseball cap", 10];
let hats: [string, number][] = [hat1, hat2];
hats.forEach((hat) => {
  let [hatName, hatPrice] = hat;
  console.log(hatName, hatPrice);
});

// ofter the case, tuple is handy to return multiple values
type MyInterval = [number, number];

function MyIntervalTest() {
  let myInterval1: MyInterval = [1, 2];
  let myInterval2: MyInterval = [2, 3];

  let intervals: MyInterval[] = [myInterval1, myInterval2];

  for (const interval of intervals) {
    let [start, end] = interval;
    console.log(`${start} - ${end}`);
  }
}
MyIntervalTest();
