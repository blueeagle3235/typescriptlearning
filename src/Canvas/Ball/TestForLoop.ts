// for (let i=0; i<=10; i=i+1){
//   if (i%2 == 0){console.log(`${i} is even number`)}
// }

let r_numbers = [9,6,4,0,7,1,5,2,8,3];

let r_min=r_numbers[0];
// console.log( r_numbers.length);
for (let i=0; i<r_numbers.length; i++){
   if (r_min<r_numbers[i]){
       r_min=r_numbers[i];
   }
}
console.log(r_min);
//let counter = 0;
//let r_sum=0;


//for (let i=r_numbers.length-1; i>=0; i--){
  //console.log(i, r_numbers[i]);
//}
  
    //if (r_numbers[i]>3){
        //counter=counter+1;
        //r_sum = r_sum+r_numbers[i];
        //console.log(r_numbers[i]);
    //}

//console.log(counter)
//console.log(r_sum)