import * as THREE from 'three'
import OrbitControls from '@/assets/js/orbit'
import Targets from '@/assets/js/targets'

let world = (function () {
  let self = {} // export container
  // boolean to flag if should detect input
  self.touching = false;

  // Global variables
  let window,
      container,
      scene,
      camera,
      renderer,
      controls,
      light,
      lightControls,
      raycaster,
      mouse,
      loader,
      brain,
      targets,
      oldTargets,
      targetbox

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
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(0, 2, -8)

    // Create renderer
    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)

    // create lighting
    light = new THREE.DirectionalLight(0xffbbbb, .45)
    light.position.set(0, 4, -10)
    lightControls = new OrbitControls(light, renderer.domElement, document)
    lightControls.addEventListener('change', self.render) // call this only in static scenes (i.e., if there is no animation loop)
    lightControls.enablePan = false
    lightControls.enableKeys = false
    lightControls.enableZoom = false
    lightControls.minDistance = 10
    lightControls.maxDistance = 100

    // Init Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement, document)
    controls.addEventListener('change', self.render) // call this only in static scenes (i.e., if there is no animation loop)
    controls.enablePan = false
    controls.enableKeys = false
    controls.enableZoom = false
    controls.minDistance = 10
    controls.maxDistance = 100

    // Setup Raycasting
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

    // Create 3D Targets
    targets = Targets.all()
    oldTargets = []
    for (let t of targets) {
      scene.add(t)
    }

    // Setup lighting
    scene.add(light)
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
  	camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()

    // Update renderer
  	renderer.setSize(container.clientWidth, container.clientHeight)
    self.render()
  }

  // Handle mouse movement for painting color
  self.onMouseMove = function (event) {
    if (!self.touching) return // bail if not touching the world
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
    mouse.x = ((x - container.getBoundingClientRect().left) / container.clientWidth) * 2 - 1
    mouse.y = -((y - container.getBoundingClientRect().top) / container.clientHeight) * 2 + 1

    // Update Raycaster
    raycaster.setFromCamera(mouse, camera)

    // Handle intersections
    let hitTargets = raycaster.intersectObjects(targets)

    // Make old targets almost invisible
    if (oldTargets.length > 0) {
      oldTargets.pop().object.material.opacity = 0.1
      targetbox.style.display = 'none'
    }

    if (hitTargets.length > 0) {
      // Highlight hovered target
      hitTargets[0].object.material.opacity = 0.3
      oldTargets.push(hitTargets[0])

      // Update targetbox data with the current hittarget
      targetbox.dataset.name = hitTargets[0].object.info.name
      targetbox.dataset.dest = hitTargets[0].object.info.dest
      targetbox.dataset.functions = hitTargets[0].object.info.functions.join(';')

      // Get 2d mouse position from 3d intersection
      let vector = hitTargets[0].point.clone()
      vector.project(camera)

      // Update targetbox location to mouse position
      let widthHalf = container.clientWidth / 2.0
      let heightHalf = container.clientHeight / 2.0
      // Grab container offsets
      let contLeft = container.getBoundingClientRect().left
      let contTop = container.getBoundingClientRect().top
      // Get X/Y coordinates to put targetbox
      let left = ((widthHalf + vector.x * widthHalf) + contLeft)
      let top = ((heightHalf - vector.y * heightHalf) + contTop)

      // Get Center lines to see what quadrant we are in
      let cHoriz = contLeft + widthHalf
      let cVert = contTop + heightHalf
      // Put Corner coordinates depending on quadrant
      targetbox.dataset.l = (left < cHoriz)
      targetbox.dataset.t = (top < cVert)
      targetbox.dataset.popLeft = (left < cHoriz) ? (left - 240) : (left + 30)
      targetbox.dataset.popTop = (top < cVert) ? (top - 55) : (top)

      // Update styles to put box at point
      targetbox.style.left = left + 'px'
      targetbox.style.top = top + 'px'
      targetbox.style.display = 'block'
    }

    // Redraw scene (to repaint highlights)
    self.render()
  }

  // Render world
  self.render = function() {
    renderer.render(scene, camera)
  }

  return self
})()

// Export module
export default world
