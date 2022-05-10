import * as THREE from './node_modules/three/build/three.module.js';
import RubiksCube from './rubikscube.js'

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)

const rc = new RubiksCube()
rc.colorCube()
scene.add(rc)
// rc.faceCubes.forEach(faceCube => scene.add(faceCube))

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 7;
camera.position.x = 3;
camera.position.y = 3;
camera.lookAt(scene.position)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// basic mouse event tracking
var mouseX = 0
var mouseY = 0
function mousemove(event){
    mouseX = event.clientX
    mouseY = event.clientY
}
window.addEventListener('mousemove', mousemove);

function animate() {

    // rotate cube on mouse movement - TODO: reduce speed 
    rc.rotation.y = THREE.MathUtils.lerp(rc.rotation.y, (mouseX * Math.PI) / 10, 0.1) 
    rc.rotation.x = THREE.MathUtils.lerp(rc.rotation.x, (mouseY * Math.PI) / 10, 0.1)  

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();