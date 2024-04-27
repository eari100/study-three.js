import * as THREE from '../node_modules/three/build/three.module.js'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const controls = new OrbitControls( camera, renderer.domElement )
const loader = new GLTFLoader()