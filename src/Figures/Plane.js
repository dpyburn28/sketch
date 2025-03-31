import { Figure, Point, Line, Path } from './Figures.js';

export default class Plane extends Figure {
    constructor(path) {
        super('plane');
        this.path = path;
        
    }
}
