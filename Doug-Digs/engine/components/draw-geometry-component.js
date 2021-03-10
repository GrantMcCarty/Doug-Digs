import Component from "../component.js"
export default class DrawGeometryComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);
    this.color = color;
  }
  draw(ctx) {
    let rectangleGeometry = this.gameObject.getComponent("RectangleGeometryComponent")
    if (rectangleGeometry) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.gameObject.transform.x - rectangleGeometry.width/2, this.gameObject.transform.y - rectangleGeometry.height/2, rectangleGeometry.width, rectangleGeometry.height);
    }
    let circleGeometry = this.gameObject.getComponent("CircleGeometryComponent");
    if(circleGeometry) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.gameObject.transform.x, this.gameObject.transform.y, circleGeometry.radius, 0, Math.PI*2);
      ctx.fill();
    }
  }
}