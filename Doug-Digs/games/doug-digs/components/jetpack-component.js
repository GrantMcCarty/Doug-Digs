import * as Engine from "../../../engine/engine.js"

export default  class JetpackComponent extends Engine.Component {
 constructor(gameObject) {
    super(gameObject);
    this.fuel = 100;
    this.maxFuel = 100;
  }
  update() {
    if (Engine.Input.getKey(" ")) {
      this.fuel = this.maxFuel;
    }
  }
  upgradeFuel() {
    this.maxFuel += this.maxFuel * 0.5;
  }
}
