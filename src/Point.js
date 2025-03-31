import Figure from './Figure.js';

export default class Point extends Figure {
    constructor(x, y, r) {
        super('point');
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

