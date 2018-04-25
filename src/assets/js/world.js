import * as THREE from 'three'
import OrbitControls from '@/assets/js/orbit'

let world = (function () {
  let self = {} // export container

  // Global variables
  let window,
      container,
      scene,
      camera,
      renderer,
      controls,
      loader,
      brain

  // Helper for grabbing element to append to DOM
  self.getDomElement = function () {
    return renderer.domElement
  }

  // Build the Three.js Instance
  self.build = function(w, document, id) {
    // save container reference for later
    window = w
    container = document.getElementById(id)

    // loader object to load 3D Models
    loader = new THREE.ObjectLoader()

    // Init Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xdddddd)

    // Init camera
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000)
    camera.position.set(0, 2, -8)

    // Create renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.offsetWidth, container.offsetHeight)

    // Init Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement, document)
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop) (render just calls the renderer.render)
    controls.screenSpacePanning = false
    controls.minDistance = 10
    controls.maxDistance = 100
    controls.maxPolarAngle = Math.PI / 2

    self.populate()
    self.append()
  }

  // Draw the objects into our world
  self.populate = function() {
    // Import Brain model
    loader.load(
      '/models/brain-simple-mesh.json', // filename
      (brainModel) => { // onLoad callback
        brain = brainModel
        brain.matrixAutoUpdate = false

        scene.add(brain)
      },
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'), // onProgress callback
      (err) => console.log('Error loading brain: ' + err) // onError callback
    )

    // Setup lighting
    scene.add(new THREE.DirectionalLight(0xffcccc, .5))
    scene.add(new THREE.AmbientLight(0xffcccc, .4))
  }

  // Append to document and setup responsive behaviour
  self.append = function () {
    // Append THREE.js to our document
    container.appendChild(self.getDomElement())
    window.addEventListener('resize', self.onWindowResize)
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
  	camera.aspect = container.offsetWidth / container.offsetHeight
    camera.updateProjectionMatrix()
  	renderer.setSize(container.offsetWidth, container.offsetHeight)
  }

  return self
})()

// Export module
export default world
