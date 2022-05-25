export class Calculator{
    public add (number1:number, number2:number):number{
        return number1 + number2;
    }
}

let calculator = new Calculator();
let result =calculator.add(1, 1);
console.log(result)

