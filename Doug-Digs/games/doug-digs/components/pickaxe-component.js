import * as Engine from "../../../engine/engine.js"

export default class PickaxeComponent extends Engine.Component {

    constructor(gameObject, pickaxeType = "Copper") {
        super(gameObject);
        this.offsetX = 0.5;
        this.offsetY = -0.25;
        this.lastMovPos = "right";
        this.pickaxeType = pickaxeType;
        this.damage = 1;
    }

    update() {
        if (this.gameObject.parent) {
            if ((Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a'))) {
                this.lastMovPos = "left";
            } else if ((Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d'))) {
                this.lastMovPos = "right";
            }
            this.gameObject.transform.x = this.lastMovPos === "left" ?
                this.gameObject.parent.x - this.offsetX : this.gameObject.parent.x + this.offsetX;
            this.gameObject.transform.y = this.gameObject.parent.y + this.offsetY;
            if (Engine.Input.getKeyUp('p')) {
                this.upgradePickaxe();
            }
            if(Engine.Input.getMouseButtonDown(0)) {
                console.log(Engine.Input.getMousePosition());
                this.gameObject.transform.rotation = 1; // rotate pickaxe for swing
                
            }
        }
    }

    upgradePickaxe() {
        let color = "chocolate"
        switch (this.pickaxeType) {
            case "Copper": this.pickaxeType = "Iron"; color="DarkGrey"; this.damage++; break;
            case "Iron": this.pickaxeType = "Steel"; color="LightSlateGray"; this.damage++; break;
            case "Steel": this.pickaxeType = "Diamond"; color="DarkTurquoise"; this.damage++; break;
            default: this.pickaxeType = "Copper"; this.damage = 1; break;
        }
        this.gameObject.getComponent("DrawGeometryComponent").color = color;
        console.log(this.pickaxeType + ":" + color + ":"+ this.damage);
    }

}