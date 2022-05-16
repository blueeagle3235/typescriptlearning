export class Graph {

	private context: CanvasRenderingContext2D;
	private canvas: HTMLCanvasElement;

	// location of origin (in pixels) in parent document
	private x_orig: number;
	private y_orig: number;
	// overall width and height of graph in pixels
	private x_width: number;
	private y_width: number;
	// min and max of x and y relative to origin (in pixels)
	private x_min_rel: number;
	private x_max_rel: number;
	private y_min_rel: number;
	private y_max_rel: number;
	// obvious
	private x_tick_major: number = 0;
	private x_tick_minor: number = 0;
	private y_tick_major: number = 0;
	private y_tick_minor: number = 0;
	// scaling used in displaying values on the axes 
	private x_displ_scal: number;
	private y_displ_scal: number;
	// width and height of textbox used for displaying values on the axes
	// this should not have to be tampered with (I hope)
	private tw = 15;
	private th = 20;
	// declarations for quantities to be used later
	private x_min: number;
	private x_max: number;
	private y_min: number;
	private y_max: number;
	private xx: number = 0;
	private yy: number = 0;
	private x_displ: number = 0;
	private y_displ: number = 0;
	private txpos: number;
	private typos: number;

	constructor(xmin: number, xmax: number, ymin: number, ymax: number, x0: number, y0: number, xwidth: number, ywidth: number) {
		this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
		let context = this.canvas.getContext("2d");
		this.context = context!;
		this.x_orig = x0;
		this.y_orig = y0;
		this.x_width = xwidth;
		this.y_width = ywidth;
		//			
		this.x_displ_scal = (xmax - xmin) / xwidth;
		this.y_displ_scal = (ymax - ymin) / ywidth;
		//		
		this.x_min_rel = xmin / this.x_displ_scal;
		this.x_max_rel = xmax / this.x_displ_scal;
		this.y_min_rel = ymin / this.y_displ_scal;
		this.y_max_rel = ymax / this.y_displ_scal;
		// convert to absolute coordinates				
		this.x_min = this.x_min_rel + this.x_orig;
		this.x_max = this.x_max_rel + this.x_orig;
		this.y_min = this.y_orig - this.y_min_rel;
		this.y_max = this.y_orig - this.y_max_rel;
		this.txpos = this.x_orig - this.tw;
		this.typos = this.y_orig;

	}

	public drawtest(): void {
		//this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
		this.context.arc(100, 100, 25, 0, Math.PI * 2, true);
		this.context.closePath();
		this.context.fillStyle = 'blue';
		this.context.fill();
	}

	// DRAW GRID: draw major, minor lines and display values
	public drawgrid(xmajor: number, xminor: number, ymajor: number, yminor: number): void {
		this.x_tick_major = xmajor / this.x_displ_scal;
		this.x_tick_minor = xminor / this.x_displ_scal;
		this.y_tick_major = ymajor / this.y_displ_scal;
		this.y_tick_minor = yminor / this.y_displ_scal;
		// draw major grid lines
		this.context.strokeStyle = '#999999';
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.yy = this.y_max;
		do {
			this.context.moveTo(this.x_min, this.yy);
			this.context.lineTo(this.x_max, this.yy);
			this.yy += this.y_tick_major;
		} while (this.yy <= this.y_min);
		this.xx = this.x_min;
		do {
			this.context.moveTo(this.xx, this.y_min);
			this.context.lineTo(this.xx, this.y_max);
			this.xx += this.x_tick_major;
		} while (this.xx <= this.x_max);
		this.context.stroke();
		// draw minor grid lines			
		this.context.strokeStyle = '#cccccc';
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.yy = this.y_max;
		do {
			this.context.moveTo(this.x_min, this.yy);
			this.context.lineTo(this.x_max, this.yy);
			this.yy += this.y_tick_minor;
		} while (this.yy <= this.y_min);
		this.xx = this.x_min;
		do {
			this.context.moveTo(this.xx, this.y_min);
			this.context.lineTo(this.xx, this.y_max);
			this.xx += this.x_tick_minor;
		} while (this.xx <= this.x_max);
		this.context.stroke();
		//display values
		this.context.font = "10pt Arial";
		this.context.fillStyle = '#000000';
		this.context.textAlign = "right";
		this.context.textBaseline = "top";
		this.yy = this.y_max;
		do {
			this.y_displ = (this.y_orig - this.yy) * this.y_displ_scal;
			this.context.fillText(this.y_displ.toString(), this.txpos + 5, this.yy - this.th / 2);
			this.yy += this.y_tick_major;
		} while (this.yy <= this.y_min);
		this.context.textAlign = "left";
		this.context.textBaseline = "top";
		this.xx = this.x_min;
		do {
			this.x_displ = (this.xx - this.x_orig) * this.x_displ_scal;
			this.context.fillText(this.x_displ.toString(), this.xx - this.tw + 10, this.typos + 5);
			this.xx += this.x_tick_major;
		} while (this.xx <= this.x_max);
	};

	// DRAW AXES: draw axes and labels		
	public drawaxes(xlabel: string, ylabel: string): void {
		if (typeof (xlabel) === 'undefined') xlabel = 'x';
		if (typeof (ylabel) === 'undefined') ylabel = 'y';
		this.context.strokeStyle = '#000000';
		this.context.lineWidth = 2;
		this.context.beginPath();
		this.context.moveTo(this.x_min, this.y_orig);
		this.context.lineTo(this.x_max, this.y_orig);
		this.context.moveTo(this.x_orig, this.y_min);
		this.context.lineTo(this.x_orig, this.y_max);
		this.context.stroke();
		//axis labels
		this.context.font = "12pt Arial";
		this.context.fillStyle = '#000000';
		this.context.textAlign = "left";
		this.context.textBaseline = "top";
		this.context.fillText(xlabel, this.x_max + 0.75 * this.tw, this.typos - this.th / 2);
		this.context.fillText(ylabel, this.txpos + this.tw / 2 + 5, this.y_max - 1.5 * this.th);
	};

	// PLOT DATA: plot data
	public plot(xArr: Array<number>, yArr: Array<number>, pColor: string = "red", pDots: boolean = true, pLine: boolean = true): void {
		// the last three arguments have default values
		if (typeof (pColor) === 'undefined') pColor = '#0000ff';
		if (typeof (pDots) === 'undefined') pDots = true;
		if (typeof (pLine) === 'undefined') pLine = true;
		var xpos = this.x_orig + xArr[0] / this.x_displ_scal;
		var ypos = this.y_orig - yArr[0] / this.y_displ_scal;
		this.context.strokeStyle = pColor;
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.moveTo(xpos, ypos);
		this.context.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);
		for (var i = 1; i < xArr.length; i++) {
			xpos = this.x_orig + xArr[i] / this.x_displ_scal;
			ypos = this.y_orig - yArr[i] / this.y_displ_scal;
			if (pLine) {
				this.context.lineTo(xpos, ypos);
			} else {
				this.context.moveTo(xpos, ypos);
			}
			if (pDots) {
				this.context.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);
			}
		}
		this.context.stroke();
	};

}

for (let i = 0; i <= 20; i++) {
	console.log("Hi " + i);
}
let graph = new Graph(-10, 10, -10, 10, 350, 350, 600, 600);
graph.drawgrid(1, 0.2, 1, 0.2);
graph.drawaxes('x', 'y');

let xvals = new Array<number>();
let yvals = new Array<number>();

// xvals[0]=1;
// yvals[0]=1;
// xvals[1]=3;
// yvals[1]=5;
// xvals[2]=2;
// yvals[2]=7;
// xvals[3]=1;
// yvals[3]=1;
let angle = -1;
for (let x = -10; x <= 10; x = x + 0.2) {
	xvals.push(x);
	// y=angle*x+1;
	//let y = x * x * x + x * x + x;
	// y = Math.abs(x);
	//y = Math.sin(x);
	y = Math.sqrt(100 - x * x);
	yvals.push(y);
}

graph.plot(xvals, yvals, "#ff0000", false, true);
for (let x = -10; x <= 10; x = x + 0.2) {
	xvals.push(x);
	// y=angle*x+1;
	//let y = x * x * x + x * x + x;
	// y = Math.abs(x);
	//y = Math.sin(x);
	y = Math.sqrt(100 - x * x);
	yvals.push(-y);
}

graph.plot(xvals, yvals, "#ff0000", false, true);
//graph.plot(xvals, yvals);
