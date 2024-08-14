

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 100 );
var controls;

scene.background = new THREE.Color(0x196f3d)


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 1,1,1 );
var material = new THREE.MeshBasicMaterial(  );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


camera.position.z = 15;



let loader =  new THREE.GLTFLoader();
loader.load('./recursos/model/base/Base.gltf', 
function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
},
function (xhr) {
      console.log((xhr.loaded / xhr.total * 100 ) + '% cargado');
},
function (error) {
    console.error('Un error ocurrió', error);
}
);

let loader1 =  new THREE.GLTFLoader();
loader.load('./recursos/model/motor/Motor1.gltf', 
function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
},
function (xhr) {
      console.log((xhr.loaded / xhr.total * 100 ) + '% cargado');
},
function (error) {
    console.error('Un error ocurrió', error);
}
);



let loader2 =  new THREE.GLTFLoader();
loader.load('./recursos/model/helices/Helice1.gltf', 
function (gltf) {
    gltf.scene.traverse(function (child) {
    if (child.isMesh) {
        child.name = 'helice1';
    }
    });
    scene.add(gltf.scene);
},
function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% cargado');
},
function (error) {
    console.error('Un error ocurrió', error);
}
);


const light = new THREE.PointLight( 0xffffff,  10);
light.position.set( 50, 50, 50 );
scene.add( light );

const light2 = new THREE.PointLight( 0xffffff, 10);
light2.position.set( -50, -50, -50 );
scene.add( light2 );


function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    cube.rotation.x += 0.05;
    cube.rotation.z += 0.05;
    

}

scene.traverse(function (child) {
    if (child.name === 'helice1') {
    child.rotation.x += 0.1;
    }
});



render()
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.autoRotate = true;
