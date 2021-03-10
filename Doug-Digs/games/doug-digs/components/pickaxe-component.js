import * as Engine from "../../../engine/engine.js"

export default class PickaxeComponent extends Engine.Component {

    constructor(gameObject, pickaxeType = "Copper") {
        super(gameObject);
        this.lastMovPos = "right";
        this.pickaxeType = pickaxeType;
        this.damage = 1;
        this.currentRotation = 16;
        this.restPosX = 0.5;
        this.restPosY = 0;
    }

    update() {
        if (this.gameObject.parent) {
            if (Engine.Input.getKeyUp('p')) {
                this.upgradePickaxe();
            }
            if (Engine.Input.getMouseButton(0)) {
                // console.log(Engine.Input.getMousePosition());
                if (this.currentRotation > 0) {
                    this.currentRotation -= 0.4
                    this.gameObject.transform.rotation = Math.PI / this.currentRotation; // rotate pickaxe for swing
                    this.gameObject.transform.position.x += 0.005;
                    this.gameObject.transform.position.y += 0.005; //TODO Fix this based on mousePos
                }
                else {
                    this.reset();
                }
            } else if (Engine.Input.getMouseButtonUp(0)) {
                this.reset();
            }
        }
    }

    reset() {
        this.gameObject.transform.rotation = 0;
        this.currentRotation = 16;
        this.gameObject.transform.position.x = this.restPosX;
        this.gameObject.transform.position.y = this.restPosY;
    }

    upgradePickaxe() {
        let color = "chocolate"
        switch (this.pickaxeType) {
            case "Copper": this.pickaxeType = "Iron"; color = "DarkGrey"; this.damage++; break;
            case "Iron": this.pickaxeType = "Steel"; color = "LightSlateGray"; this.damage++; break;
            case "Steel": this.pickaxeType = "Diamond"; color = "DarkTurquoise"; this.damage++; break;
            default: this.pickaxeType = "Copper"; this.damage = 1; break;
        }
        this.gameObject.getComponent("DrawGeometryComponent").color = color;
        console.log(this.pickaxeType + ":" + color + ":" + this.damage);
    }

}