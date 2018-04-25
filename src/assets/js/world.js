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
      raycaster,
      mouse,
      loader,
      brain,
      targetbox,
      targets

  // Build the Three.js Instance
  self.build = function(w, document, id) {
    // save container reference for later
    window = w
    container = document.getElementById(id)
    targetbox = document.getElementById('targetBox')

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
    controls.addEventListener('change', self.render) // call this only in static scenes (i.e., if there is no animation loop) (render just calls the renderer.render)
    controls.screenSpacePanning = false
    controls.minDistance = 10
    controls.maxDistance = 100
    controls.maxPolarAngle = Math.PI / 2

    // Init Target Detection
    mouse = new THREE.Vector2()
    raycaster = new THREE.Raycaster()

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

    // Setup Target resources
    let targetgeo = new THREE.SphereGeometry(0.5, 8, 8)
    let targetmat = new THREE.MeshBasicMaterial({ color: 0x00ffff })
    targets = []

    // Create target 1 (frontal)
    targets[0] = new THREE.Mesh(targetgeo, targetmat)
    targets[0].position.set(2.1, 3.1, 0)
    targets[0].name = 'frontal'
    targets[0].target = 'Frontal'
    scene.add(targets[0])

    // Create target 2 (left temporal)
    targets[1] = new THREE.Mesh(targetgeo, targetmat)
    targets[1].position.set(0, 1, -2.3)
    targets[1].name = 'temporal_l'
    targets[1].target = 'Temporal'
    scene.add(targets[1])

    // Create target 3 (right temporal)
    targets[2] = new THREE.Mesh(targetgeo, targetmat)
    targets[2].position.set(0, 1, 2.3)
    targets[2].name = 'temporal_r'
    targets[2].target = 'Temporal'
    scene.add(targets[2])

    // Create target 4 (occipital)
    targets[3] = new THREE.Mesh(targetgeo, targetmat)
    targets[3].position.set(-3.1, 1, 0)
    targets[3].name = 'occipital'
    targets[3].target = 'Occipital'
    scene.add(targets[3])

    // Create target 5 (parietal)
    targets[4] = new THREE.Mesh(targetgeo, targetmat)
    targets[4].position.set(-1.1, 3.5, 0)
    targets[4].name = 'parietal'
    targets[4].target = 'Parietal'
    scene.add(targets[4])

    // Setup lighting
    scene.add(new THREE.DirectionalLight(0xffcccc, .5))
    scene.add(new THREE.AmbientLight(0xffcccc, .4))
  }

  // Append to document and setup responsive behaviour
  self.append = function () {
    // Append THREE.js to our document + listeners
    container.appendChild(renderer.domElement)
    window.addEventListener('resize', self.onWindowResize)
    window.addEventListener('mousemove', self.onMouseMove)
    window.addEventListener('touchmove', self.onMouseMove)

    // render for the first time
    self.render()
  }

  // Helper to resize view when window is resized
  self.onWindowResize = function () {
    // Update camera
  	camera.aspect = container.offsetWidth / container.offsetHeight
    camera.updateProjectionMatrix()

    // Update renderer
  	renderer.setSize(container.offsetWidth, container.offsetHeight)
    self.render()
  }

  // Handle mouse movement for painting color
  self.onMouseMove = function (event) {
    event.preventDefault()

    // Capture mouse/touch location
    let x, y
    if (event.changedTouches) {
      x = event.changedTouches[0].pageX
      y = event.changedTouches[0].pageY
    } else {
      x = event.clientX
      y = event.clientY
    }

    // Save location to mouse object
    mouse.x = ((x - container.offsetLeft) / container.clientWidth) * 2 - 1
    mouse.y = -((y - container.offsetTop) / container.clientHeight) * 2 + 1

    // Update Raycaster
    raycaster.setFromCamera(mouse, camera)

    // Handle intersections
    let intersected = raycaster.intersectObjects(targets)
    if (intersected.length > 0){
      let vector = intersected[0].point.project(camera)

      targetbox.style.left = container.offsetLeft + Math.round((1 + vector.x) * container.clientWidth / 2.0) + 'px'
      targetbox.style.top = container.offsetTop + Math.round((1 - vector.y) * container.clientHeight / 2.0) + 'px'
      targetbox.dataset.target = intersected[0].object.target
      console.log(intersected[0].object.name)
    }
  }

  self.updateTargetBox = function (point) {


    targetbox.style.left = container.offsetLeft + Math.round((1 + vector.x) * container.clientWidth / 2.0) + 'px'
    targetbox.style.top = container.offsetTop + Math.round((1 - vector.y) * container.clientHeight / 2.0) + 'px'
  }

  // Render world
  self.render = function() {
    renderer.render(scene, camera)
  }

  return self
})()

// Export module
export default world
