
export default class Figure {
    constructor(type) {
        this.type = type;
        this.visible = true;
        this.style = {
            fill: 'black',
            stroke: 'black',
            weight: 1
        }
    }
    setStyle(ctx) {
        ctx.strokeStyle = this.style.stroke;
        ctx.lineWidth = this.style.weight;
        ctx.fillStyle = this.style.fill;
    }
}

