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
export class Position{
    public X:number = 0;
    public Y:number = 0;
    constructor(x:number, y:number){
        this.X=x;
        this.Y=y;
    }
}
let p1= new Position(1,3);
let p2= new Position(5,5);

export class Cat{
    public moveUp():void{
        this.Position.Y=this.Position.Y+1;
    }
    public moveDown():void{
        this.Position.Y=this.Position.Y-1;
    }
    public moveLeft():void{
        this.Position.X=this.Position.X-1;
    }
    public moveRight():void{
        this.Position.X=this.Position.X+1;
    }
    public Position:Position = new Position(0,0);

    public Color:string = "";

    constructor(color:string='blue'){
        this.Color=color;
    }
    public HP:number = 100;
    public showHP():void{
        console.log("Color ", this.Color, " Cat HP ", this.HP, " Position:", this.Position);
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
let c1 = new Cat("red");
c1.Position = new Position(10,10);
c1.showHP();
// let c2 = new Cat("green");
// c2.Position = new Position(20,5);
// c2.showHP();

// while(d1.HP>=0 && c1.HP>=0){
//     c1.Attack(d1);
//     d1.ShowHP();
//     d1.Attack(c1);
//     c1.showHP();    
// }
c1.moveLeft();
console.log(c1.Position);