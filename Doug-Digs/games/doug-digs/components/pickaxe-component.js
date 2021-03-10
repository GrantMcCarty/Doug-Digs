import * as Engine from "/engine/engine.js"

export default class PickaxeComponent extends Engine.Component {
  
  constructor(gameObject, pickaxeType = "Copper") {
    super(gameObject);
    this.offsetX = 0.45;
    this.offsetY = 0;
    this.lastMovPos = "right";
    this.pickaxeType = pickaxeType
  }

  update() {
    if(this.gameObject.parent) {
      if((Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a'))) {
        this.lastMovPos = "left";
      } else if((Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d'))) {
        this.lastMovPos = "right";
      }
      this.gameObject.transform.x = this.lastMovPos === "left" ? 
        this.gameObject.parent.x - this.offsetX : this.gameObject.parent.x + this.offsetX;
      this.gameObject.transform.y = this.gameObject.parent.y + this.offsetY;
      
    }
  }

}