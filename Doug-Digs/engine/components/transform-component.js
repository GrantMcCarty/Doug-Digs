import Component from "../component.js"

export default class TransformComponent extends Component {
    constructor(name) {
        super(name);
        this.position = {x:0,y:0}
        this.scale = {x:1, y:1}
        this.rotation = 0;
        this.children = [];
    }
    addChild(child) {
        child.parent = this; 
        this.children.push(child);
    }
}
