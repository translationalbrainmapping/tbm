import * as THREE from 'three'

let world = (function () {
  let self = {} // export container

  // Global variables
  let window,
      scene,
      camera,
      renderer,
      loader

  // Helper for grabbing element to append to DOM
  self.getDomElement = function() {
    return renderer.domElement
  }

  // Build the Three.js Instance
  self.build = function(w) {
    window = w // save window reference for later
    loader = new THREE.ObjectLoader() // loader object to load 3D Models

    // Init Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xdddddd)

    // Init camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Create renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  // Draw the objects into our world
  self.create = function() {
    // Import Brain model
    loader.load(
      '/models/brain-simple-mesh.json', // filename
      (brain) => { // onLoad callback
        //brain.position.rotation.y = 20
        brain.matrixAutoUpdate = false
        scene.add(brain)
      },
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'), // onProgress callback
      (err) => console.log('Error loading brain: ' + err) // onError callback
    )

    // Setup lighting
    let light = new THREE.DirectionalLight(0xffffff, .5)
    scene.add(light)

    // Setup camera position
    camera.position.z = 10
    camera.position.y = 2
  }

  // Logic applied every frame
  self.render = function() {
    // Do stuff
  }

  // Method called each frame
  self.animate = function() {
    requestAnimationFrame(self.animate)
    self.render()
    renderer.render(scene, camera)
  }

  // Helper to resize view when window is resized
  self.onWindowResize = function () {
  	camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  	renderer.setSize(window.innerWidth, window.innerHeight)
  }

  return self
})()

export default world
