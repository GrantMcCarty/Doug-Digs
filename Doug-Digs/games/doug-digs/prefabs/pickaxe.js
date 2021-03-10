export default {
    name: "Pickaxe", 
    components: [
      { name: "DrawGeometryComponent", args: ["chocolate"] },
      { name: "RectangleGeometryComponent", args: [0.15, 0.8] },
      { name: "PickaxeComponent", args:["Copper"] },
    ], children: [
      {
        gameObject:{
          name:"PickaxeHead",
          components:[
            {
              name:"DrawGeometryComponent", args:["brown"]
            },
            {
              name:"PolygonGeometryComponent", args:[[{x:-0.6,y:0},{x:0.6,y:0},{x:0,y:-0.2}]]
            }
          ]
        },x:0,y:-0.4
      }
    ]
  }