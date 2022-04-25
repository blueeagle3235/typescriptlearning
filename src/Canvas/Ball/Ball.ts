export class Ball {

    private context: CanvasRenderingContext2D;

    public x: number = 0;
    public y: number = 0;
    public radius: number = 25;
    private color: string = 'blue';

    constructor(x: number, y: number) {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        this.context = context!;
        this.x = x;
        this.y = y;
    }

    public draw(): void {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fillStyle = this.color;
        this.context.fill();
    }
};
