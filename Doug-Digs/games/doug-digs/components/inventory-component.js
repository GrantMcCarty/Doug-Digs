import * as Engine from "/engine/engine.js"

export default class InventoryComponent extends Engine.Component {
    constructor(gameObject, pickaxe, money) {
        super(gameObject);
        this.pickaxe = pickaxe;
        this.money = money;
        //Potentially could move jetpack attributes in here
    }

    upgradePickaxe() {
        switch(this.pickaxe) {
            case "Copper": this.pickaxe = "Iron"; break;
            case "Iron": this.pickaxe = "Steel"; break;
            case "Steel": this.pickaxe = "Diamond"; break;
            default: this.pickaxe = "Copper"; break;
        }
    }

    removeMoney(amount) {
        if (amount > this.money) {
            console.log("Not enough money");
        }
        else {
            this.money - amount;
            return true;
        }
        return false;
    }
}