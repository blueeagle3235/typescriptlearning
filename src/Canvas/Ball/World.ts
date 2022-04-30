import { Ball } from "./Ball"
import { Turtle } from "./Turtle"

let ball1 = new Ball(35, 35, "1");
ball1.draw();
ball1.move();
// let ball2 = new Ball(350, 35,"2");
// ball2.draw();

// for (let i = 25; i <= 500; i += 50) {
//     for (let j = 25; j <= 500; j += 50) {
//         let x = (i - 25) / 50;
//         let y = (j - 25) / 50;
//         let ball = new Ball(i, j, `${x},${y}`);
//         ball.draw();
//         //ball.move();
//     }
// }

// let turtle = new Turtle( 250, 250);
// turtle.setPen(true);
// turtle.savePos();
// turtle.setWidth(20);
// for (let i = 0; i < 36; i++) {
//     turtle.setColor("hsl(" + 10 * i + ", 100%, 50%)");
//     turtle.restorePos();
//     turtle.turnRight(10);
//     turtle.savePos();
//     for (let k = 0; k < 36; k++) {
//         turtle.moveForward(5);
//         turtle.turnRight(3);
//     }
// }



// turtle.turnRight(90);
// turtle.moveForward(50);
// turtle.turnRight(90);
// turtle.moveForward(100);
// turtle.turnRight(90);
// turtle.moveForward(150);
// turtle.turnRight(90);
// turtle.moveForward(200);
// turtle.turnRight(90);
// turtle.moveForward(250);
// turtle.turnRight(90);

// for (let i = 0; i < 200; i++) {
//     turtle.moveForward(i*2);
//     turtle.turnRight(90);
// }

//turtle.runAll();