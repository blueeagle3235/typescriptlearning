import { Ball } from "./Ball"
import { Turtle } from "./Turtle"

// let ball1 = new Ball(35, 35);
// ball1.draw();

// let ball2 = new Ball(350, 35);
// ball2.draw();

// for (let i=25;i<=500;i+=50)
// {
//     for (let j=25;j<=500;j+=50)
//     {
//         let ball = new Ball(i, j);
//         ball.draw();
//     }
// }

let turtle = new Turtle( 250, 250);
turtle.setPen(true);
turtle.savePos();
turtle.setWidth(20);
for (let i = 0; i < 36; i++) {
    turtle.setColor("hsl(" + 10 * i + ", 100%, 50%)");
    turtle.restorePos();
    turtle.rotateClockwise(10);
    turtle.savePos();
    for (let k = 0; k < 36; k++) {
        turtle.moveForward(5);
        turtle.rotateClockwise(3);
    }
}
// turtle.rotateClockwise(90);
// for (let i = 0; i < 50; i++) {
//     turtle.moveForward(i);
//     turtle.rotateClockwise(50 - i);
// }
// turtle.moveForward(50);
// turtle.rotateClockwise(90);
// turtle.moveForward(100);
// turtle.rotateClockwise(90);
// turtle.moveForward(150);
// turtle.rotateClockwise(90);
// turtle.moveForward(200);
// turtle.rotateClockwise(90);
// turtle.moveForward(250);

turtle.runAll();