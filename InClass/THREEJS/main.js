// library ref: because we are loading a module
import * as THREE from 'three';

//All Three.js scenes are rendered inside an html canvas element. This is why we have one setup in our html page :)
//The scene is like a container. You place your objects, models, particles, lights, etc. in it, and at some point, you will ask Three.js to render that scene. To create a scene, we use the Scene class.

//texture


//SCENE
const scene = new THREE.Scene() 

// //A: the geometry
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// //B: the material
// const material = new THREE.MeshBasicMaterial({ color: 0x992050 })
// //C: put together
// const mesh = new THREE.Mesh(geometry, material)
// //D: ADD TO THE SCENE
// scene.add(mesh)

//camera
const sizes = {
    width: 800,
    height: 600
}
//Camera field of view:(angle of 75, 4/3 aspect ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

//Access the Canvas
const canvas = document.querySelector('canvas#three-ex') //from HTML import
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

//new material
const material = new THREE.MeshBasicMaterial()

//new meshes
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)
sphere.position.x = - 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.3, 16, 32),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)

//move camera
camera.position.z = 3;
// camera.position.y = 1;

//TURN ON AXES HELPER
//https://threejs.org/docs/?q=Axes#AxesHelper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

// //Mesh polygon
// const mesh_2 = new THREE.Mesh(geometry, material)
// scene.add(mesh_2)
// mesh_2.position.x = 1.5
// mesh_2.position.y = 1.25
// mesh_2.position.z = -1

// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25


// camera.lookAt(new THREE.Vector3(0, -1, 0))
//or
// camera.lookAt(mesh_2.position)

//render:
renderer.render(scene, camera)

