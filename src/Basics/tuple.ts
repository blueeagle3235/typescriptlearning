let hat1: [string, number] = ["bonnet", 100];
let hat2: [string, number] = ["baseball cap", 10];
let hats: [string, number][] = [hat1, hat2];
hats.forEach((hat) => {
  let [hatName, hatPrice] = hat;
  console.log(hatName, hatPrice);
});
