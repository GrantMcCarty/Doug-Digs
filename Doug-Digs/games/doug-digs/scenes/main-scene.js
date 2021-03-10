export default {
    name: "MainScene",
    children: [
      {
        gameObject: {
          name: "MainCamera", components: [
            { name: "WorldCameraComponent" }
          ]
        },sx:60,sy:60
      },
      {
        gameObject:{
          name:"ScreenCamera",components:[
            {name:"ScreenCameraComponent"}
          ],children:[
            { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Dig Doug!", { color: "gray" }] }] }, x: 0, y: 40 },
      { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Dig Doug!", { color: "white" }] }] }, x: 2, y: 42 },
          ]
        }
      },
      {
        gameObject: {
          name: "Ground",
          components: [
            { name: "DrawGeometryComponent", args: ["peru"] },
            { name: "RectangleGeometryComponent", args: [30, 15] },
          ]
        }, x: 0, y: 0
      },
      {
        gameObject: {
          name: "Sky",
          components: [
            { name: "DrawGeometryComponent", args: ["aquamarine"] },
            { name: "RectangleGeometryComponent", args: [30, 12] },
          ]
        }, x: 0, y: -8
      },
      {
            gameObject: { 
            name: "Sun",
            components: [
            { name: "DrawGeometryComponent", args: ["orange"] },
            { name: "CircleGeometryComponent", args: [0.5] },
          ]}, x: -6, y: -4
      },
      {
        prefabName: "MainController"
      },
      { prefabName: "Doug", x: 0, y:-2.5 },
      { prefabName: "Jetpack", x: 3, y:-2.3 },
    ]
  }