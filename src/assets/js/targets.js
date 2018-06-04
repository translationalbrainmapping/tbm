import * as THREE from 'three'

const targets = (function () {
  let self = {}

  // Broca's Area: Speech Formation
  self.brocas = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.1 })

    // Part 1
    let curve = new THREE.CatmullRomCurve3([
    	new THREE.Vector3(0.75, 1.9, -2.2),
    	new THREE.Vector3(0.95, 2.4, -1.9),
    	new THREE.Vector3(1.3, 2.5, -1.7),
    	new THREE.Vector3(1.35, 2.4, -1.8),
    	new THREE.Vector3(1.2, 2.0, -2.1),
    	new THREE.Vector3(1.7, 2.0, -1.9),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.2, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Broca\'s Area',
      dest: 'Brocas',
      functions: [
        'Speech and Word Formation'
      ]
    }

    return target
  }

  // Motor Cortex: Motor Functions
  self.motor = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.1 })

    // Create curve
    let curve = new THREE.CatmullRomCurve3([
    	new THREE.Vector3(0.3, 1.9, -2.3),
    	new THREE.Vector3(0.44, 2.7, -1.7),
    	new THREE.Vector3(0.2, 3.1, -1.4),
    	new THREE.Vector3(0.1, 3.6, -0.8),
    	new THREE.Vector3(0.2, 3.7, -0.3),
    	new THREE.Vector3(-0.5, 3.7, -0.2)
    ])
    let geometry = new THREE.TubeGeometry(curve, 30, 0.3, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // add info block to the target
    target.info = {
      name: 'Motor Cortex',
      dest: 'MotorCortex',
      functions: [
        'Movement and Motor Functions'
      ]
    }

    return target
  }

  // Create and consolidate all targets to iterate over
  self.all = function () {
    return [
      self.brocas(),
      self.motor(),
    ]
  }

  return self
})()

export default targets
