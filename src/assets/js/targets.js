import * as THREE from 'three'

const targets = (function () {
  let self = {}

  // LeftInferiorFrontalGyrus: Speech Comprehension, Formation
  self.lifg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.05 })

    // Build target
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
      dest: 'LeftInferiorFrontalGyrus',
      functions: [
        'Speech and Word Formation',
        'Language Comprehension',
        'A.K.A. Left Inferior Frontal Gyrus'
      ]
    }

    return target
  }

  // LeftInferiorParietalLobule: Emotions and Senses
  self.lipl = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.4, 2.1, -2.3),
      new THREE.Vector3(-1.4, 2.4, -2.3),
    	new THREE.Vector3(-0.6, 1.9, -2.4),
    	new THREE.Vector3(-0.8, 2.6, -2.2),
    	new THREE.Vector3(-1.0, 3.0, -1.8),
    	new THREE.Vector3(-1.6, 2.4, -2.1),
    	new THREE.Vector3(-1.6, 2.8, -1.8),
    	new THREE.Vector3(-2.2, 2.6, -1.2),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.25, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Left Inferior Parietal Lobule',
      dest: 'LeftInferiorParietalLobule',
      functions: [
        'Perception of Emotions',
        'Sensory Interpretation',
        'Math, Language, and Body Image'
      ]
    }

    return target
  }

  // LeftInferiorTemporalGyrus: Object/Facial Recognition
  self.litg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.6, 0.3, -2.0),
      new THREE.Vector3(-0.7, 0.3, -2.2),
      new THREE.Vector3(0.7, 0.1, -1.7),
    	new THREE.Vector3(1.3, 0.0, -1.0),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.25, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Left Inferior Temporal Gyrus',
      dest: 'LeftInferiorTemporalGyrus',
      functions: [
        'Object Recognition',
        'Facial Recognition',
      ]
    }

    return target
  }

  // LeftMiddleFrontalGyrus: Cognitive Control
  self.lmfg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.6, 3.0, -1.3),
      new THREE.Vector3(1.5, 2.9, -1.2),
      new THREE.Vector3(2.0, 2.1, -1.6),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.45, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Left Middle Frontal Gyrus',
      dest: 'LeftMiddleSuperiorFrontalGyrus',
      functions: [
        'Cognitive Control',
        'Working Memory'
      ]
    }

    return target
  }

  // LeftSuperiorFrontalGyrus: Self Awareness
  self.lsfg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.6, 3.5, -0.5),
      new THREE.Vector3(1.8, 3.1, -0.5),
      new THREE.Vector3(2.4, 2.6, -0.5),
      new THREE.Vector3(2.7, 2.1, -0.5),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.5, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Left Superior Frontal Gyrus',
      dest: 'LeftMiddleSuperiorFrontalGyrus',
      functions: [
        'Self-Awareness',
        'Laughter',
      ]
    }

    return target
  }

  // LeftSuperiorTemporalGyrus: Sound / Speech Comprehension
  self.lstg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.1, 1.4, -2.5),
      new THREE.Vector3(0.7, 1.2, -2.2),
    	new THREE.Vector3(1.3, 1.1, -1.8),
    	new THREE.Vector3(1.6, 0.6, -1.7),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.35, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Left Superior Temporal Gyrus',
      dest: 'LeftSuperiorTemporalGyrus',
      functions: [
        'Sound Processing',
        'Speech Comprehension',
      ]
    }

    return target
  }

  // RightPreCentralGyrus: Motor Functions
  self.rpcg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.05 })

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
      dest: 'RightPreCentralGyrus',
      functions: [
        'Movement and Motor Functions',
        'A.K.A. Right Pre-Central Gyrus'
      ]
    }

    return target
  }

  // RightSuperiorTemporalGyrus: Sound / Speech Comprehension
  self.rstg = function () {
    let material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.05 })

    // Build target
    let curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.1, 1.4, 2.5),
      new THREE.Vector3(0.7, 1.2, 2.2),
    	new THREE.Vector3(1.3, 1.1, 1.8),
    	new THREE.Vector3(1.6, 0.6, 1.7),
    ])
    let geometry = new THREE.TubeGeometry(curve, 20, 0.35, 8, false)
    let target = new THREE.Mesh(geometry, material)
    target.updateMatrix()
    target.matrixAutoUpdate = false

    // Add info block to the target elements
    target.info = {
      name: 'Right Superior Temporal Gyrus',
      dest: 'RightSuperiorTemporalGyrus',
      functions: [
        'Sound Processing',
        'Speech Comprehension',
      ]
    }

    return target
  }

  // Create and consolidate all targets to iterate over
  self.all = function () {
    return [
      self.lifg(),
      self.lipl(),
      self.litg(),
      self.lmfg(),
      self.lsfg(),
      self.lstg(),
      self.rpcg(),
      self.rstg(),
    ]
  }

  return self
})()

export default targets
