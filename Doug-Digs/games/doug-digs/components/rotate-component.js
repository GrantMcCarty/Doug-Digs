import * as Engine from "/engine/engine.js"

export default  class RotateComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.rotation = 0;
    }
    draw(ctx) {
        ctx.save();
        ctx.rotate(this.rotation * Math.PI/180);
        ctx.restore();
    }
    update(){
        this.rotation++;
    }
}