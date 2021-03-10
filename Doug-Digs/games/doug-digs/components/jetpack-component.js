import * as Engine from "/engine/engine.js"

export default  class JetpackComponent extends Engine.Component {
 constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
    this.fuel = 100;
    this.maxFuel = 100;
    this.offsetX = 0.25;
    this.offsetY = 0;
    this.lastMovPos = "right";
  }
  update() {
    if(this.gameObject.parent) {
      if((Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a'))) {
        this.lastMovPos = "left";
      } else if((Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d'))) {
        this.lastMovPos = "right";
      }
      this.gameObject.transform.x = this.lastMovPos === "left" ? 
        this.gameObject.parent.x + this.offsetX : this.gameObject.parent.x - this.offsetX;
      this.gameObject.transform.y = this.gameObject.parent.y + this.offsetY;
    }
    if ((Engine.Input.getKey("ArrowUp") || Engine.Input.getKey('w')) && this.fuel > 0) {
      this.gameObject.parent.y -= 0.10;
      this.fuel -= this.speed * 0.5;
      this.offsetY = -0.1;
    } else {
      this.offsetY = 0;
    }
    if (Engine.Input.getKey(" ")) {
      this.fuel = this.maxFuel;
    }
  }
  upgradeFuel() {
    this.maxFuel += this.maxFuel * 0.5;
  }
}
