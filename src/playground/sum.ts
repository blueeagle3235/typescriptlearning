/**
 * a sum function with export and type notation
 * https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 * @param a first number
 * @param b second number
 * @returns the sum
 */
// export default function sum(a: number, b: number): number {
//   return a + b;
//
// }

// the recursion version
export default function sum(...arr: number[]): number {
  if (arr.length === 0) return 0;

  let [head, ...tail] = arr;

  return head + sum(...tail);
}

// const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);
// export default sum;
