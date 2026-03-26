// library ref: because we are loading a module
import * as THREE from 'three';

//All Three.js scenes are rendered inside an html canvas element. This is why we have one setup in our html page :)
//The scene is like a container. You place your objects, models, particles, lights, etc. in it, and at some point, you will ask Three.js to render that scene. To create a scene, we use the Scene class.

//texture
const loader = new THREE.TextureLoader();
const water_texture = await loader.loadAsync( 'textures/Ice002_1K-JPG_Color.jpg' );
//need to ensure that the textures are encoded correctly - mapping the colors correctly.
water_texture.colorSpace = THREE.SRGBColorSpace;

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
// const material = new THREE.MeshBasicMaterial()
const material = new THREE.MeshBasicMaterial({
    map: water_texture
})
// material.color = new THREE.Color('#ad86dd') 
//or
material.color = new THREE.Color('rgb(154, 255, 238)')
//combine the material color and texture
// material.map = water_texture
// material.color = new THREE.Color('#f1b6fb')
material.transparent = true
material.opacity = 0.5

//new meshes
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(0.5, 16, 16),
//     material
// )
// sphere.position.x = - 1.5

// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// )

// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// )
// torus.position.x = 1.5

// scene.add(sphere, plane, torus)


// //TURN ON AXES HELPER
// //https://threejs.org/docs/?q=Axes#AxesHelper
// const axesHelper = new THREE.AxesHelper(1)
// scene.add(axesHelper)

// //groups
// const group = new THREE.Group()
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000,wireframe: true })
// )
// cube1.position.x = 1.5
// group.add(cube1)
// /*https://threejs.org/docs/#SphereGeometry*/
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry( .75, 32 , 16 ),
//     new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true})
// )
// //move it 
// axesHelper.position.x = -1;
// axesHelper.position.y = -1;

// sphere.position.y = 1.5
// sphere.position.x = 3
// group.add(sphere)

// group.position.x = -2
// group.rotation.x = Math.PI *.25
// // group.scale.x = .5
// // group.scale.y = .5
// // group.scale.z = .5
// group.scale.set(.5,.5,.5)
// //could do
// //camera.lookAt(group.position)
const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

window.requestAnimationFrame(animate)
let elapsedTime = 0
function animate(timer){ //makes it even for all rendering computers
    //calculate the difference since last frame
    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    mesh.rotation.y+=0.001*deltaTime
    mesh.rotation.x+=0.0001*deltaTime

    // Update objects -> elapsed time increases ...
    mesh_2.position.x = Math.cos(elapsedTime/1000)
    mesh_2.position.y = Math.sin(elapsedTime/1000)
    // mesh_2.rotation.x+=0.0005*deltaTime

    camera.position.z = 4 + Math.cos(elapsedTime/1000)
    // camera.position.x = Math.cos(elapsedTime/1000)
    // camera.position.y = Math.sin(elapsedTime/1000)
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}
const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2

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

//move camera
camera.position.z = 4
// camera.lookAt(0.25,-0.5,0)
// camera.position.y = 1;

// camera.lookAt(new THREE.Vector3(0, -1, 0))
//or
// camera.lookAt(torus.position)


//render:
renderer.render(scene, camera)

