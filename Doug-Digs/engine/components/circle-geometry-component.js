import Component from "../component.js"
export default  class CircleGeometryComponent extends Component{
    constructor(gameObject, radius) {
        super(gameObject);
        this.radius = radius;
    }
}