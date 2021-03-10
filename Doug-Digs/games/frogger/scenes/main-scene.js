export default {
  name: "MainScene",
  children: [
    { gameObject: { name: "SafetyZone", components: [{ name: "DrawGeometryComponent", args: ["brown"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: 320, y: 480 },
    { gameObject: { name: "RoadOne", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: 320, y: 380 },
    { gameObject: { name: "RoadTwo", components: [{ name: "DrawGeometryComponent", args: ["darkgray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: 320, y: 280 },
    { gameObject: { name: "RoadTwo", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: 320, y: 180 },
    { gameObject: { name: "WinArea", components: [{ name: "DrawGeometryComponent", args: ["brown"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: 320, y: 80 },
    {
      gameObject: {
        name: "MainController", components: [
          { name: "ScreenTextComponent", args: ["0", { color: "white" }] },
          { name: "MainControllerComponent", },
          { name: "ScoreComponent" },
          { name: "SceneChangerComponent" }
        ]
      }, x: 20, y: 40
    },
    { prefabName: "frog", x: 320, y: 480 },
    { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["'Frogger' Game Example", { color: "gray" }] }] }, x: 102, y: 42 },
    { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["'Frogger' Game Example", { color: "white" }] }] }, x: 100, y: 40 },
  ]
}