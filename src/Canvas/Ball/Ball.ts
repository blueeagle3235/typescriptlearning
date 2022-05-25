import { RandomRange, RandomColor } from "../../Robin/Util"
export class Ball {

    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    public x: number = 0;
    public y: number = 0;
    public radius: number = 25;
    private color: string = 'red';
    public label: string = "";

    private stepInterval: number = 0;

    private dx: number = Math.floor(Math.random() * 10);;
    private dy: number = Math.floor(Math.random() * 10);;

    constructor(x: number, y: number, label: string = "") {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = this.canvas.getContext("2d");
        this.context = context!;
        this.x = x;
        this.y = y;
        this.label = label;
    }

    public draw(): void {
        //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fillStyle = RandomColor();
        this.context.fill();
        this.context.font = "12pt Arial";
        this.context.strokeText(this.label, this.x - 5, this.y + 5);
    }

    public move(): void {
        this.stepInterval = window.setInterval(() => this.onEachStep(), 1000 / 60); // 60 fps
    }

    public stop(): void {
        window.clearInterval(this.stepInterval); // 60 fps
    }

    public greet(name: string): void {
        console.log("hello " + name);
    }

    private getRndInteger(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private onEachStep(): void {
        this.dx = this.getRndInteger(-20, 20);
        this.dy = this.getRndInteger(-20, 20);
        this.context.fillStyle = RandomColor();
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
};
