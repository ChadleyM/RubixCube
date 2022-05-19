class World {
  constructor(game) {
    //super( true );
    this.game = game;

    this.container = this.game.dom.game;

    this.scene = new THREE.Scene(); 

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.offsetWidth / this.container.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.z = 7;

    this.stage = { width: 2, height: 3 };

    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setClearColor("#000000");

    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight
    );

    this.createLights();
    this.container.appendChild(this.renderer.domElement);

    this.update();

    window.addEventListener("resize", () => this.resize(), false);
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.camera.aspect =
      this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight
    );
    this.update();
  }

  createLights() {
    this.lightHolder = new THREE.Object3D();

    this.lights = {
      ambient: new THREE.AmbientLight(0xffffff, 0.8),
      front: new THREE.DirectionalLight(0xffffff, 0.36),
      back: new THREE.DirectionalLight(0xffffff, 0.19),
    };

    Object.values(this.lights).forEach((light) => {
      this.lightHolder.add(light);
    });

    this.scene.add(this.lightHolder);
  }
}

export { World };
