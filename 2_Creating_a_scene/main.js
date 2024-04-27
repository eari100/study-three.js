import * as THREE from '../node_modules/three/build/three.module.js'

const scene = new THREE.Scene()
// PerspectiveCamera
// pov: 시야각, aspect: 화면 비율, near: 카메라 계산하는 최소 거리, far: 카메라가 계산하는 최대 거리
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

// BoxGeometry: 정육면체 객체
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
const cube = new THREE.Mesh( geometry, material )
scene.add( cube )

// 카메라의 위치를 큐브 바깥쪽으로 이동, 큐브의 위치(0,0,0)
camera.position.z = 5

function animate() {
    // 1초에 60번 렌더링
    requestAnimationFrame( animate )

    // 큐브 회전
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render( scene, camera )
}

animate()