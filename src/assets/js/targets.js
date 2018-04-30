import * as THREE from 'three'

const targets = (function () {
  let self = {}

  // Broca's Area: Speech Formation
  self.brocas = function () {
    let geometry = new THREE.SphereGeometry(0.6, 16, 16, 0, Math.PI)
    let material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.1 })
    let target = new THREE.Mesh(geometry, material)
    target.position.set(1.1, 2.1, -1.8)
    target.rotateX(Math.PI / 6)
    target.rotateY(Math.PI)
    target.updateMatrix()
    target.matrixAutoUpdate = false

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
    let geometry = new THREE.TorusGeometry(2.1, 0.3, 8, 16, Math.PI / 2.0)
    let material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.1 })
    let target = new THREE.Mesh(geometry, material)
    target.position.set(0.2, 1.6, -0.1)
    target.rotateZ(Math.PI / 24.0)
    target.rotateY(Math.PI / 2.2)
    target.updateMatrix()
    target.matrixAutoUpdate = false

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
