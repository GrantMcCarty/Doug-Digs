import * as Engine from "../../../engine/engine.js"

export default  class GravityComponent extends Engine.Component {
  constructor(gameObject, gravity = 0.05) {
    super(gameObject);
    this.gravity = gravity;
    this.usesGravity = false;
  }
  update() {
    // if(!colliding.bottom) {
    if(this.usesGravity) {
        this.gameObject.transform.y += this.gravity;
    }
    if(Engine.Input.getKeyUp("g")) {
        this.usesGravity = !this.usesGravity;
    }
    // }
  }

}