import * as Engine from "/engine/engine.js"

export default  class JetpackComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
    this.fuel = 100;
  }
  update() {
    if ((Engine.Input.getKey("ArrowUp") || Engine.Input.getKey('w')) && this.fuel > 0) {
        this.fuel -= this.speed * 0.5;
        // console.log(this.fuel);
    }
    if(Engine.Input.getKey(" ")) {
        this.fuel = 100;
    }
  }
  upgradeFuel(){
      this.fuel += this.fuel*0.5;
  }

}