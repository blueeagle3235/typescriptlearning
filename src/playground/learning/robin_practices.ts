function sum(a:number,b:number):number{
    console.log("in sum");
    return a+b;
}

let result=sum(11,22);

console.log(result);


function greet(name:string):void{
    console.log("hello "+ name);
}

greet("Aaron");

greet("Robin");