import * as THREE from '../../node_modules/three/build/three.module.js'

// 렌더러 생성
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 씬(장면) 생성
const scene = new THREE.Scene()

// 카메라 생성
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// 텍스처 로드
const texture = new THREE.TextureLoader().load('./texture.png')
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping
texture.repeat.set( 4, 4 )


// 평면 지오메트리 생성
const geometry = new THREE.PlaneGeometry(5, 5)

// 텍스처를 사용하는 재질 생성
const material = new THREE.MeshBasicMaterial({ map: texture })

// 메시 생성
const plane = new THREE.Mesh(geometry, material)
scene.add(plane)

// 애니메이션 루프
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

// 애니메이션 시작
animate()
