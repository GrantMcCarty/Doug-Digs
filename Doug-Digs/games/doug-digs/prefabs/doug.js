export default {
    name: "Doug", 
    components: [
      { name: "KeyboardMoveComponent", args: [0.05] },
      { name: "DrawGeometryComponent", args: ["red"] },
      { name: "CircleGeometryComponent", args: [0.5] },
      { name: "GravityComponent", args: [0.04]},
      { name: "InventoryComponent", args: [100, "Copper"]},
    ], children: [
      { prefabName: "Pickaxe", x:0.5, y:0 }
    ]
  }