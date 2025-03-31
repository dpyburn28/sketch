import { Figure, Point, Line, Path } from "./Figures.js";

export default class Shape extends Figure {
    constructor(path) {
        super("shape");
        this.path = path;
    }

    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.moveTo(this.path.points[0].x, this.path.points[0].y);
        for (let i = 1; i < this.path.points.length; i++) {
            ctx.lineTo(this.path.points[i].x, this.path.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}
