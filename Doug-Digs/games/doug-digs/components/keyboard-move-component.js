import * as Engine from "../../../engine/engine.js"

export default class KeyboardMoveComponent extends Engine.Component {

  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
  }

  update() {
    if (Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a')) {
      this.gameObject.transform.position.x -= 1 * this.speed;
      this.gameObject.transform.scale.x = -1
    }
    if (Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d')) {
      this.gameObject.transform.position.x += 1 * this.speed;
      this.gameObject.transform.scale.x = 1
    }
    if (Engine.Input.getKey("ArrowUp") || Engine.Input.getKey('w')) {
      let jetObj = this.gameObject.getGameObject("Jetpack");
      let jet = undefined;
      if(jetObj)
        jet = jetObj.getComponent("JetpackComponent");
      if (jet && jet.fuel > 0) {
        this.gameObject.transform.position.y -= 0.10;
        jet.fuel -= this.speed * 1.5;
      }
    }
    if (Engine.Input.getKey("ArrowDown") || Engine.Input.getKey('s')) {
      this.gameObject.transform.position.y += 1 * this.speed;
    }
  }

}