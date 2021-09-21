//  find max [4,6,7,8,3,2] =>8
// [3,2,6,8,4,3,5,7,8] => find a+b=10, [[2,8],[3,7]]
let array: number[] = [4, 6, 7, 8, 3, 2];

// max
//console.log(maxarray.reduce((prev, curr) => { return prev > curr ? prev : curr }));
console.log(array.reduce((prev, curr) => (prev > curr ? prev : curr)));

//sum
// console.log(
//   maxarray.reduce((prev, curr) => {
//     return prev + curr;
//   })
// );
console.log(array.reduce((prev, curr) => prev + curr));

// average
console.log(array.reduce((prev, curr) => prev + curr) / array.length);

// function getMax(array: any) {
//   let temp: number = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     console.log(array[i], array[i + 1]);
//     if (array[i] > array[i + 1]) {
//       temp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//       console.log(array);
//     }
//   }
// }
//getMax(maxarray);

function getMax2(array: any) {
  let temp: number = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > temp) {
      temp = array[i];
    }
  }
  return temp;
}
console.log(getMax2(array));
// 4 6
