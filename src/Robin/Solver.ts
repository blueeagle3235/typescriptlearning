export class Solver{
    public add(number1:number, number2:number):number{
        return number1 + number2;
    }

    public sum(array:Array<number>):number{
        let result = 0;
        for(let i=0; i<array.length; i++){
            result = result + array[i];
        }
        return result;
    }

    public findMax(array:Array<number>):number{
        let result=array[0];
        for(let i=0; i<array.length; i++){
            if(result<array[i]){
                result = array[i];
            }
        }
        return result;
    }
    
    public findMin(array:Array<number>):number{
        let result=array[0];
        for(let i=0; i<array.length; i++){
            if(result>array[i]){
                result = array[i];
            }
        }
        return result;
    }
}

let solver = new Solver();
let test_numbers = [7,2,4,3,9,5];

console.log(solver.add(535.3535,75757577.57));
console.log(solver.sum(test_numbers));
console.log(solver.findMax(test_numbers));
console.log(solver.findMin(test_numbers));
