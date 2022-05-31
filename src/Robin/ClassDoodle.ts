export function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }
export class Calculator {
    public add(number1: number, number2: number): number {
        return number1 + number2;
    }
}

export class Dog{
    public HP : number=100;

    public ShowHP():void{
        console.log("Dog HP ", this.HP);
    }

    public GetHit():void{
        console.log("woof, woof!");
        if  (this.HP>0){
            this.HP = this.HP - getRandomInt(20);
        }
    }
    public Sleep():void{
        console.log("zzz...");
        if (this.HP<100){
            this.HP = this.HP+1;
        }
    }
    public Attack(cat:Cat):void{
        cat.GetHit();
    }
}

let d1 = new Dog();
// let d2 = new Dog();
//d1.ShowHP();
// d1.GetHit();
// d1.ShowHP();
// d1.Sleep();

//d1.HP=50000;
//console.log(d1.HP)


// let calculator = new Calculator();
// let result = calculator.add(1, 1);
// console.log(result);
export class Cat{
    public HP:number = 100;
    public showHP():void{
        console.log("Cat HP ", this.HP);
    }
    public Attack(dog:Dog):void{
        dog.GetHit();
    }
    public GetHit():void{
        console.log("meow, meow!");
        if  (this.HP>0){
            this.HP = this.HP - getRandomInt(20);
        }
    }

}
let c1 = new Cat();
while(d1.HP>=0 && c1.HP>=0){
    c1.Attack(d1);
    d1.ShowHP();
    d1.Attack(c1);
    c1.showHP();    
}
