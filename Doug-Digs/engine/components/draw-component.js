import Component from "../component.js"
export default  class DrawComponent extends Component{
    constructor(gameObject, color){
        super(gameObject);
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.gameObject.transform.x, this.gameObject.transform.y, 100, 200);//fillRect expects the upper left-hand coordinates and then the width and height of the rectangle

    }
}