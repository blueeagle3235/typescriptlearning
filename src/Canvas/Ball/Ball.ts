import { VoidExpression } from "typescript";

export class Ball {

    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    public x: number = 0;
    public y: number = 0;
    public radius: number = 25;
    private color: string = 'orange';
    public label: string = "";

    private stepInterval: number = 0;

    private dx: number = 2;
    private dy: number = 1;

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
        this.context.fillStyle = this.color;
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

    private onEachStep(): void {
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
