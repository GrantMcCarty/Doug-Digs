import * as Engine from "../../../engine/engine.js"

export default class InventoryComponent extends Engine.Component {
    constructor(gameObject, pickaxe, money) {
        super(gameObject);
        this.money = money;
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