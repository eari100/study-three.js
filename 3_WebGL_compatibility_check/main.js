import WebGL from 'three/addons/capabilities/WebGL.js'

if ( WebGL.isWebGLAvailable() ) {
    alert('WebGL 호환성 검사 이상무')
} else {
    const warning = WebGL.getWebGLErrorMessage()
    document.getElementById( 'container' ).appendChild( warning )
}