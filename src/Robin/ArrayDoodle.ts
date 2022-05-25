import { RandomRange, RandomColor } from "./Util"
export class ArrayDoodle {
    private r_numbers: Array<number> = [9, 6, 4, 0, 7, 1, 5, 2, 8, 3, 45, 3543, 5, 5, 345, 34, 5, 345, 345, 43, 543, 534, 5, 34];

    public even_array = new Array<number>();
    public odd_array = new Array<number>();

    public DivideArray(): void {
        for (let i = 0; i < this.r_numbers.length; i++) {
            if (this.r_numbers[i] % 2 == 0) {
                this.even_array.push(this.r_numbers[i]);
            } else {
                this.odd_array.push(this.r_numbers[i]);
            }
            // if(r_numbers[i] %2 == 1 ){
            //     odd_array.push(r_numbers[i]);
            // }
        }
    }
}

console.log(RandomRange(0, 100));

let doodle = new ArrayDoodle();
doodle.DivideArray();
console.log("even numbers are ", doodle.even_array);
console.log("odd numbers are ", doodle.odd_array);
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