export class Calculator {
    public add(number1: number, number2: number): number {
        return number1 + number2;
    }
}

export class Dog{
    private HP : number=100;

    public ShowHP():void{
        console.log(this.HP);
    }

    public GetHit():void{
        console.log("woof, woof!");
        if  (this.HP>0){
            this.HP = this.HP-1;
        }
    }
    public Sleep():void{
        console.log("zzz...");
        if (this.HP<100){
            this.HP = this.HP+1;
        }
    }
}

let d1 = new Dog();
let d2 = new Dog();
d1.ShowHP();
d1.GetHit();
d1.ShowHP();
d1.Sleep();

//d1.HP=50000;
//console.log(d1.HP)


// let calculator = new Calculator();
// let result = calculator.add(1, 1);
// console.log(result);

