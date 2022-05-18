
const FACES = {
  "FORWARD": 0,
  "LEFT": 1,
  "RIGHT": 2,
  "UP": 3,
  "DOWN": 4,
  "BACKWARD": 5
};  

const dimensions = 3;

class Cube {

  constructor(game) {
    this.game = game;
    this.object = new THREE.Object3D();
    this.game.world.scene.add(this.object);
    this.cubeFaces = Array()
    
  }

  init() { 
    this.generateModel(); 
    this.colorCube()
  }
  
  generateModel() {       

    // set positional update constants
    let positionOffset = (dimensions - 1) / 2;
    let cubeSize = 1.0;

    // set geometry of this cube
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new THREE.MeshBasicMaterial( {color: 0x444444 } );
    
    for (let i = 0; i < dimensions; i++) { // sides
        
        for (let j = 0; j < dimensions; j++) { // rows

            for (let k = 0; k < dimensions; k++) { // columns

                // create cube
                const cube = new THREE.Mesh(geometry, material);

                // set world position of this cube
                let x = i - positionOffset,
                    y = j - positionOffset,
                    z = k - positionOffset;
                cube.position.set(x, y, z);
            
                // add cube to rubik's cube                          
                this.object.add(cube);
                this.game.world.update();
    
            }
    
        }
    
    }

    // this.object.rotation.x += 0.5;
    // this.object.rotation.y += 0.5;

  }


  colorCube(colors = [0x00ff00, 0xffff00, 0x0000ff, 0xffffff, 0xFFA500, 0xff0000]) {

      function colorFace(object, game, cubeFaces, face, color) {

          /**
           * params:
           *  - cubeFaces: 3D array of cube faces (axises = face, row, column)
           *  - face: the face we wish to colour
           *  - the colour
           */

          // define face parameters
          let innerCubeScale = 0.89;
          let offset = 1 + (1 - innerCubeScale) + 0.01;
          let geometry = new THREE.BoxGeometry(innerCubeScale, innerCubeScale, innerCubeScale);
          let material = new THREE.MeshBasicMaterial({color: color});

          cubeFaces[face] = new Array() // init 2D array for this face (rows, cols)

          for (let i = 0; i < dimensions; i++) { // rows
              
              cubeFaces[face][i] = new Array() // init 1D array of elements for this row in the face

              for (let j = 0; j < dimensions; j++) { // columns

                  // create cube face
                  let cubeFace = new THREE.Mesh(geometry, material);

                  // set position in the scene
                  switch (face) {
                      
                      case FACES.FORWARD:
                          cubeFace.position.set(i - 1, j - 1, offset);
                          break;

                      case FACES.BACKWARD:
                          cubeFace.position.set(i - 1, j - 1, -offset);
                          break;

                      case FACES.UP:
                          cubeFace.position.set(i - 1, offset, j - 1);
                          break;

                      case FACES.DOWN:
                          cubeFace.position.set(i - 1, -offset, j - 1);
                          break;

                      case FACES.LEFT:
                          cubeFace.position.set(offset, i - 1, j - 1);
                          break;

                      case FACES.RIGHT:
                          cubeFace.position.set(-offset, i - 1, j - 1);
                          break;

                  }

                  // add cube face to 3D array (faces, rows, columns)
                  cubeFaces[face][i][j] = cubeFace;
                  object.add(cubeFace);
                  game.world.update();
                  
              }
          }

      }

      // colour each face
      Object.values(FACES).forEach(face => colorFace(this.object, this.game, this.cubeFaces, face, colors[face]) )

      // add all coloured faces to rubik's cube
      this.cubeFaces.forEach(face => face.forEach(row => row.forEach(cubeFace => this.object.add(cubeFace))))
  }   

  static get FACES() { return FACES; }

  static get dimensions() { return dimensions; }


}
export { Cube };




//                          0
//                      00  01  02
//                      10  11  12
//                      20  21  22
//
//         1                2               3
//    00   01  02       00  01  02     00  01  02
//    10   11  12       10  11  12     10  11  12
//    20   21  22       20  21  22     20  21  22
//
//                          4
//                      00  01  02
//                      10  11  12
//                      20  21  22
//
//                          5
//                      00  01  02
//                      10  11  12
//                      20  21  22


//         0                1              2
//    00     01  02       00  01  02     00  01  02
//    10   11  12       10  11  12     10  11  12
//    20   21  22       20  21  22     20  21  22

// const stateMappings = []
// stateMappings[0][0][0] = ['F', 'U', 'L']

// colorMappings[0][0][0] = ['blue', 'red', 'green']

// faceMappings = {
//     'F': 0,
//     'U': 1,
//     'L': 2,
//     'B': 3,
//     'R': 4,
//     'D': 5

// }
