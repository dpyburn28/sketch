import { Figure, Point, Line, Path, Shape } from "./Figures.js";

export default class Box extends Figure {
    constructor(point, width, height) {
        super("box");
        this.point = point;
        this.width = width;
        this.height = height;
    }
    get path() {
        const tl = new Point(this.point.x - this.width / 2, this.point.y - this.height / 2);
        const tr = new Point(this.point.x + this.width / 2, this.point.y - this.height / 2);
        const br = new Point(this.point.x + this.width / 2, this.point.y + this.height / 2);
        const bl = new Point(this.point.x - this.width / 2, this.point.y + this.height / 2);
        const left = new Line(tl, bl);
        const right = new Line(tr, br);
        const top = new Line(tl, tr);
        const bottom = new Line(bl, br);
        const path = new Path([left, top, right, bottom]);
        path.style = this.style;
        return path;
    }

    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.moveTo(this.path.points[0].x, this.path.points[0].y);
        for (let i = 1; i < this.path.points.length-1; i++) {
            ctx.lineTo(this.path.points[i].x, this.path.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}