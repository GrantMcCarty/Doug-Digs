export default {
  name: "MainScene",
  children: [
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["white"] },
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }, x: 320, y: 340
    },
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero", x: 320, y: 340 },
    { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Dungeon Crawler Example", { color: "gray" }] }] }, x: 102, y: 42 },
    { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Dungeon Crawler Example", { color: "white" }] }] }, x: 100, y: 40 },
  ]
}