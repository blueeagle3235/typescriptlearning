function sum(array) {
  if (array.length === 0) return 0;
  //console.log(array.length);
  let [head, ...rest] = array;
  //console.log(head);
  //console.log(rest);
  return head + sum(rest);
}
var result = sum([1, 2, 3]);
console.log(result);
