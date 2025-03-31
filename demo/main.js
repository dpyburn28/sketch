import * as sketch from '../src/index.js';

const canvas = new sketch.Canvas();
canvas.backgroundColor = 'gray';
canvas.fullscreen();
console.log(canvas);

const figures = []
    
const point = new sketch.Point(100, 100);
figures.push(point);
point.style = {
    fill: 'blue'
}

const point2 = new sketch.Point(300, 300);
figures.push(point2);
point2.style = {
    fill: 'red'
}

const line = new sketch.Line(point, 45, 100);
figures.push(line);
line.style = {
    stroke: 'red',
    weight: 10
}

const line2 = new sketch.Line(line.end, 5, 100);
figures.push(line2);
line2.style = {
    stroke: 'red',
    weight: 10
}

const path = new sketch.Path([line, line2]);
figures.push(path);
path.style = {
    stroke: 'blue',
    weight: 5,
    fill: 'red',
}

const shape = new sketch.Shape(path);
figures.push(shape);
shape.style = {
    stroke: 'black',
    weight: 1,
    fill: 'white',
}

const arc = new sketch.Arc(point, 50, 0, Math.PI * 2);
figures.push(arc);
arc.style = {
    stroke: 'black',
    weight: 1,
    fill: 'none',
}

const box = new sketch.Box(point2, 100, 100);
figures.push(box);
box.style = {
    stroke: 'black',
    weight: 5,
    fill: 'none',
}

figures.forEach(figure => {
    figure.draw(canvas.ctx);
});

console.log(point);
