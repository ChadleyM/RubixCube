class Cube {
  constructor(game) {
    this.game = game;
    this.object = new THREE.Object3D();
    this.game.world.scene.add(this.object);
  }
  init() {
    this.generateModel();
  }
  generateModel() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshLambertMaterial({
      color: "#433F81",
      reflectivity: 1,
    });
    let cube = new THREE.Mesh(geometry, material);

    cube.rotation.x += 0.5;
    cube.rotation.y += 0.5;

    this.object.add(cube);
    this.game.world.update();
  }
}
export { Cube };
