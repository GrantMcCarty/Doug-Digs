import * as Engine from "../../../engine/engine.js"
import * as Prefabs from "../prefabs/game-prefabs.js"

const SceneManager = Engine.SceneManager;

export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    this.doug = SceneManager.currentScene.getGameObject("Doug");
    this.jetpack = SceneManager.currentScene.getGameObject("Jetpack");
    this.level = [[]];
    this.generateLevel(1);
  }

  update() {
    if(Engine.Input.getKeyDown("j") && !this.jetpack.markedDestroy) { //TODO make sure doug doesn't have one already
      this.jetpack.destroy();
      let jet = Engine.GameObject.deserialize(Prefabs.Jetpack);
      this.doug.transform.addChild(jet);
      jet.transform.position.x -= 0.5

    }
  }

  generateLevel(levelNum) {
      let sizeX = 25 * levelNum;
      let sizeY = 36 * levelNum;
      for(let x = 0; x < sizeX; x++) {
          this.level[x] = [];
        for(let y = 0; y < sizeY; y++) {
            let num = Math.floor(Math.random(1) * 3);
            let tile;
            switch(num) {
                case 0: tile = Engine.GameObject.deserialize(Prefabs.GoldBlock); break;
                case 1: tile = Engine.GameObject.deserialize(Prefabs.MineableBlock); break;
                case 2: tile = Engine.GameObject.deserialize(Prefabs.UnmineableBlock); break;
                default: tile = Engine.GameObject.deserialize(Prefabs.MineableBlock); break;
            }
            tile.transform.position.x = -12.25+ y*1.05;
            tile.transform.position.y =-1.4+ x*1.05;
            this.level[x].push(tile);
        }
        if(!this.allUnmineable(this.level[x])) {
            for(let tile of this.level[x]) {
                SceneManager.currentScene.children.push(tile);     
            }
        }
        else { // you were so unlucky that you are now lucky!
            console.log("All were unminable!");
            for(let y = 0; y < sizeY; y++) {
                let tile = Engine.GameObject.deserialize(Prefabs.GoldBlock);
                SceneManager.currentScene.children.push(tile);   
            }
        }
      }
  }
  allUnmineable(level) {
    for(let tile of level) {
        if(tile.name != Prefabs.UnmineableBlock.name)
            return false;     
    }
    return true;
  }

}
