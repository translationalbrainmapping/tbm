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
      brain,
      targetboxes,
      targets

  // Build the Three.js Instance
  self.build = function(w, document, id) {
    // save container reference for later
    window = w
    container = document.getElementById(id)
    targetboxes = {
      Occipital: document.getElementById('targetBoxOccipital'),
      Parietal: document.getElementById('targetBoxParietal'),
      Frontal: document.getElementById('targetBoxFrontal'),
      Temporal_L: document.getElementById('targetBoxTemporal_L'),
      Temporal_R: document.getElementById('targetBoxTemporal_R'),
    }

    // loader object to load 3D Models
    loader = new THREE.ObjectLoader()

    // Init Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xdddddd)

    // Init camera
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(0, 2, -8)

    // Create renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)

    // Init Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement, document)
    controls.addEventListener('change', self.render) // call this only in static scenes (i.e., if there is no animation loop)
    controls.enablePan = false
    controls.enableKeys = false
    controls.minDistance = 10
    controls.maxDistance = 100

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
        self.render()
      },
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'), // onProgress callback
      (err) => console.log('Error loading brain: ' + err) // onError callback
    )

    // Setup 3D Targets
    targets = []

    // Create target 1 (frontal)
    targets[0] = new THREE.Vector3(2.8, 2.8, 0)
    targets[0].target = 'Frontal'

    // Create target 2 (left temporal)
    targets[1] = new THREE.Vector3(0.2, 1, -2.5)
    targets[1].target = 'Temporal_L'

    // Create target 3 (right temporal)
    targets[2] = new THREE.Vector3(0.2, 1, 2.5)
    targets[2].target = 'Temporal_R'

    // Create target 4 (occipital)
    targets[3] = new THREE.Vector3(-3.5, 0.8, 0)
    targets[3].target = 'Occipital'

    // Create target 5 (parietal)
    targets[4] = new THREE.Vector3(-1.1, 3.8, 0)
    targets[4].target = 'Parietal'

    // Setup lighting
    scene.add(new THREE.DirectionalLight(0xffcccc, .5))
    scene.add(new THREE.AmbientLight(0xffcccc, .4))
  }

  // Append to document and setup responsive behaviour
  self.append = function () {
    // Append THREE.js to our document + listeners
    container.appendChild(renderer.domElement)
    window.addEventListener('resize', self.onWindowResize)

    // render for the first time
    self.render()
  }

  // Helper to resize view when window is resized
  self.onWindowResize = function () {
    // Update camera
  	camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    // Update renderer
  	renderer.setSize(container.clientWidth, container.clientHeight)
    self.render()
  }

  // Render world
  self.render = function() {
    // Update the 2d coordinates for each of the 3d target objects
    for (let i = 0; i < targets.length; i++) {
      let vector = targets[i].clone()
      vector.project(camera)

      let widthHalf = container.clientWidth / 2.0
      let heightHalf = container.clientHeight / 2.0
      targetboxes[targets[i].target].style.left = ((widthHalf + vector.x * widthHalf) + container.getBoundingClientRect().left) + 'px'
      targetboxes[targets[i].target].style.top = ((heightHalf - vector.y * heightHalf) + container.getBoundingClientRect().top) + 'px'
    }

    // Rerender scene
    renderer.render(scene, camera)
  }

  return self
})()

// Export module
export default world
