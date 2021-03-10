import Component from "../component.js"

export default class TransformComponent extends Component {
    constructor(name) {
        super(name);
        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
}