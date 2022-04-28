export class Ball {

    private context: CanvasRenderingContext2D;

    public x: number = 0;
    public y: number = 0;
    public radius: number = 25;
    private color: string = 'orange';
    public label: string = "";

    constructor(x: number, y: number, label: string = "") {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        let context = canvas.getContext("2d");
        this.context = context!;
        this.x = x;
        this.y = y;
        this.label=label;
    }

    public draw(): void {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.font = "12px Arial";
        this.context.strokeText(this.label, this.x - 5, this.y + 5);
    }
};
