import * as Engine from "../../../engine/engine.js"

export default  class RotateComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    draw(ctx) {
        ctx.save();
        ctx.rotate(this.gameObject.transform.rotation * Math.PI/180);
        ctx.restore();
    }
    update(){
        this.gameObject.transform.rotation++;
    }
}