var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ball = {
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    positionX: 0,
    positionY: 0,
    positionZ: 0,
};

const gui = new dat.GUI();
gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.0001);
gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.0001);
gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.0001);
gui.add(ball, 'positionX').min(-0.2).max(0.2).step(0.0001);
gui.add(ball, 'positionY').min(-0.2).max(0.2).step(0.0001);
gui.add(ball, 'positionZ').min(-0.2).max(0.2).step(0.0001);

var geometry = new THREE.SphereGeometry(5, 32, 32);
var material = new THREE.MeshBasicMaterial( { color: 0xf00ff00, vertexColors:THREE.FaceColors} );

geometry.faces.forEach((el)=>{
    console.log(el);
    el.color.setRGB(Math.random(), Math.random(), Math.random());
});

var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 16;

var animate = function () {
    requestAnimationFrame( animate );

    mesh.rotation.x += ball.rotationX;
    mesh.rotation.y += ball.rotationY;
    mesh.rotation.z += ball.rotationZ;

    mesh.position.x += ball.positionX;
    mesh.rotation.y += ball.positionY;
    mesh.rotation.x += ball.positionZ;

    renderer.render( scene, camera );
};

animate();