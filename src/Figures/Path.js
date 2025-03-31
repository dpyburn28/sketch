import Figure from './Figure.js';
import Point from './Point.js';
import Line from './Line.js';

export default class Path extends Figure {
    constructor(lines) {
        super('path');
        this.lines = lines;
        this.points = [];
        for (const line of lines) {
            this.points.push(line.start);
            this.points.push(line.end);
        }
    }
    draw(ctx) {
        this.setStyle(ctx);
        this.lines.forEach(line => {
            line.draw(ctx);
        });
    }
}
