//problem reference https://practice.geeksforgeeks.org/problems/make-zeroes4042/1


// let matrix:number[]=[2,5,8,7,4]
// {{2,5,8,7,4},
//  {6,3,9,1,8},
//  {5,0,2,7,4},
//  {1,9,6,4,3}}

//let matrix:[2,5,8,7,6,3,9,1,5,0,2,7,1,9,6,4];

// function makeMatrix(l:number,w:number){
//     let matrix:number[]=[];
//     let iter:number=0;
//     while (iter<l*w){
//         matrix.push(Math.floor(Math.random()*9)+1);
//         iter++;
//     }
//     console.log(matrix.length);
// }
// makeMatrix(3,4);
// function makeZero(matrixArray:number[]){
//     let randompos:number=Math.random()*matrixArray.length()
//     matrixArray[randompos]
// }
function makeZero(w:number,l:number){
    let matrix:number[][]=makeMatrix(w,l);

}
function makeMatrix(width:number,length:number) {
    let testarray:any[][] = new Array(width);

    for (var i = 0; i < testarray.length; i++) {
        testarray[i]=new Array(length);
        for (var j = 0; j < testarray.length; j++) {
            testarray[i][j]=Math.floor(Math.random()*9)+1;
            //testarray[i][j]=`${j},${i}`;
        }
      }

    return testarray;
}
let testarray=makeMatrix(5,5);
console.log(testarray);
console.log(testarray[0][4]);
