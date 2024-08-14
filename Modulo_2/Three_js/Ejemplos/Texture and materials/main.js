
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry(1, 32, 32);


const material = new THREE.MeshBasicMaterial();


const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

const loader = new THREE.TextureLoader()

loader.load("earthmap1k.jpg",(texture)=>{
    material.map = texture
    animate()
})




function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.001;
    renderer.render(scene, camera);
}

