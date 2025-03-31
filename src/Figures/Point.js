import Figure from './Figure.js';

export default class Point extends Figure {
    constructor(x, y) {
        super('point');
        this.x = x;
        this.y = y;
    }
    draw(ctx) {
        this.setStyle(ctx);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

