import { World } from "./World.js";
import { Cube } from "./Cube.js";
// import '../css/style.css'

class Game {
  constructor() {

    this.dom = {
      game: document.querySelector("#game"),
      canvas: document.querySelector("#game"),
    };

    this.world = new World(this);
    this.cube = new Cube(this);
  
    this.init();
  
    this.controls = new THREE.OrbitControls(this.world.camera,this.world.renderer.domElement);
    this.controls.noZoom = true;
    this.world.update();

  }

  init() {
    this.cube.init();
  }

  game(show) {}
  /*showControls() {
    var controls_popup = document.getElementById("controlsPopup");
    controls_popup.classList.toggle("show");
  }
  showControls() {
    var controls_popup = document.getElementById("controlsPopup");
    controls_popup.classList.toggle("show");
  }*/
}

let startGame = () => {
  let game = new Game();
  game.world.animate();
};

startGame();
