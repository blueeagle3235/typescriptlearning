// matrix is a 2-d array
// n * n matrix, n=5
let matrix1: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
];

// n * m matrix, n=4,m=5
let matrix2: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19]
];

function printMatrix(matrix: any[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      process.stdout.write(`${matrix[i][j]}`.padStart(4));
    }
    process.stdout.write("\n");
  }
}

// inline transpose only works for n*n matrix
// function transpose(matrix: any[][]) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < i; j++) {
//             const temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
// }

//transpose with new instance works for n*m matrix
//https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
function transpose(matrix: any[][]) {
  const rows = matrix.length,
    cols = matrix[0].length;
  const newMatrix = [];
  for (let j = 0; j < cols; j++) {
    newMatrix[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
}

// use reduce
function transpose2(array: any[][]) {
  return array.reduce(
    (prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
    []
  );
}

printMatrix(matrix1);

printMatrix(transpose(matrix1));

//let newMatrix = transpose2(matrix2);
//newMatrix = transpose2(newMatrix);
//printMatrix(newMatrix);

// flatten a 2-d array to 1-d array
let flattenMatrix1 = matrix1.reduce(function (prev, next) {
  return prev.concat(next);
});
console.log(flattenMatrix1);

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(matrix1.flat());
