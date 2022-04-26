import { Ball } from "./Ball"

// let ball1 = new Ball(35, 35);
// ball1.draw();

// let ball2 = new Ball(350, 35);
// ball2.draw();

for (let i=25;i<=500;i+=50)
{
    for (let j=25;j<=500;j+=50)
    {
        let ball = new Ball(i, j);
        ball.draw();
    }
}
