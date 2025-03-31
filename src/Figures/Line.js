import Figure from './Figure.js';
import Point from './Point.js';

export default class Line extends Figure {
    constructor(point, angle, length) {
        super('line');
        this.start = point;
        this.angle = angle;
        this.length = length;
    }
    get end() {
        const x = this.start.x + this.length * Math.cos(this.angle);
        const y = this.start.y + this.length * Math.sin(this.angle);
        return new Point(x, y);
    }
    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
}