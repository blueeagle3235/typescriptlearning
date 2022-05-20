let r_numbers = [9,6,4,0,7,1,5,2,8,3,45,3543,5,5,345,34,5,345,345,43,543,534,5,34];

let even_array = new Array<number>();
let odd_array = new Array<number>();

for(let i=0; i<r_numbers.length; i++){
    if(r_numbers[i] %2 == 0 ){
        even_array.push(r_numbers[i]);
    } else {
        odd_array.push(r_numbers[i]);
    }
    // if(r_numbers[i] %2 == 1 ){
    //     odd_array.push(r_numbers[i]);
    // }
}
console.log("even numbers are " ,even_array);
console.log("odd numbers are " ,odd_array);
//let r_array = new Array<number>();

// console.log(r_array.length);
// r_array.push(1);
// console.log(r_array.length);
// r_array.push(2);
// console.log(r_array.length);
// r_array.push(3);
// console.log(r_array.length);
// r_array.push(4);
// console.log(r_array.length);

// r_array.unshift(1);
// r_array.unshift(2);
// r_array.unshift(3);
// r_array.unshift(4);

//console.log(r_array);