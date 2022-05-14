import { World } from "./World.js";
import { Cube } from "./Cube.js";
// import '../css/style.css'

class Game {
  constructor() {
    this.dom = {
      game: document.querySelector("#game"),
    };

    this.world = new World(this);
    this.cube = new Cube(this);

    this.init();
    this.cube.init();
  }

  init() {}

  game(show) {}
}

let startGame = () => {
  let game = new Game();
};

startGame();
