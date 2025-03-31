
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
        if (this.style.stroke === 'none') {
            ctx.strokeStyle = 'transparent';
        } else {
            ctx.strokeStyle = this.style.stroke;
        }
        if (this.style.fill === 'none') {
            ctx.fillStyle = 'transparent';
        } else {
            ctx.fillStyle = this.style.fill;
        }
        ctx.lineWidth = this.style.weight;
    }
}

