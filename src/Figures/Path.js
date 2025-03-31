import Figure from './Figure.js';
import Point from './Point.js';
import Line from './Line.js';

export default class Path extends Figure {
    constructor(lines) {
        super('path');
        this.lines = lines;
        this.points = [];
        for (const line of lines) {
            const i = lines.indexOf(line);
            this.points.push(line.start);
            this.points.push(line.end);
            
        }
    }
    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.stroke();
        ctx.closePath();
    }
}
