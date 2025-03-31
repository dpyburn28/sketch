import Figure from './Figure.js';

export default class Line extends Figure {
    constructor(p1, p2) {
        super('line');
        this.p1 = p1;
        this.p2 = p2;
    }
}