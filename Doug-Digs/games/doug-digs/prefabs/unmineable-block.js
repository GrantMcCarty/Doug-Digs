export default {
    name: "UnmineableBlock", 
    health: -1,
    components: [
      { name: "DrawGeometryComponent", args: ["black"] },
      { name: "RectangleGeometryComponent", args: [1, 1] },
    ]
}