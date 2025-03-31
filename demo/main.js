import * as sketch from '../src/index.js';

const canvas = new sketch.Canvas();
canvas.backgroundColor = 'gray';
canvas.fullscreen();
console.log(canvas);

const point = new sketch.Point(100, 100);
point.draw(canvas.ctx);

const line = new sketch.Line(point, 45, 100);
line.draw(canvas.ctx);

const line2 = new sketch.Line(line.end, 5, 100);
const path = new sketch.Path([line, line2]);
path.draw(canvas.ctx);

console.log(point);
