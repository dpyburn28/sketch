import { Figure } from "./Figures.js";

export default class Arc extends Figure {
    constructor(point, radius, startAngle, endAngle) {
        super("arc");
        this.point = point;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.arc(this.point.x, this.point.y, this.radius, this.startAngle, this.endAngle);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}