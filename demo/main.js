import * as sketch from '../src/index.js';

const canvas = new sketch.Canvas();
canvas.backgroundColor = 'gray';
canvas.fullscreen();
console.log(canvas);

const point = new sketch.Point(10, 10, 10);

canvas.ctx.beginPath();
canvas.ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
canvas.ctx.fill();

console.log(point);

