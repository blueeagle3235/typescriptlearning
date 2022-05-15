export class Calculator{
public sum (number1:number, number2:number):number{
    return number1 + number2;
}
}

let calculator = new Calculator();
let result =calculator.sum(1, 1);
console.log(result)
