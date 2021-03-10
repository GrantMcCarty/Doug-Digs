export default {
    name: "GoldBlock", 
    health: 3,
    components: [
      { name: "DrawGeometryComponent", args: ["yellow"] },
      { name: "RectangleGeometryComponent", args: [1, 1] },
    ]
}