var geometry = new THREE.BoxGeometry(5, 5, 5);

var scene = new THREE.Scene();
const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

var renderer = new THREE.WebGLRenderer()



const ctx = document.createElement('canvas').getContext('2d');
document.body.appendChild(ctx.canvas);
ctx.canvas.width = 256;
ctx.canvas.height = 256;
ctx.fillStyle = '#FFF';
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

function randInt(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min | 0;
}

function drawRandomDot() {
    ctx.fillStyle = `#${randInt(0x1000000).toString(16).padStart(6, '0')}`;
    ctx.beginPath();

    const x = randInt(256);
    const y = randInt(256);
    const radius = randInt(10, 64);
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function render() {
    drawRandomDot();
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

const cubes = [];  // just an array we can use to rotate the cubes
const loader = new THREE.TextureLoader();

const ctx2 = document.createElement('canvas').getContext('2d');
ctx2.canvas.width = 256;
ctx2.canvas.height = 256;
ctx2.fillStyle = '#FFF';
ctx2.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
const texture = new THREE.CanvasTexture(ctx.canvas);

const material = new THREE.MeshBasicMaterial({
    map: texture,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cubes.push(cube);  // add to our list of cubes to rotate

function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    drawRandomDot();
    texture.needsUpdate = true;

    cubes.forEach((cube, ndx) => {
        const speed = .2 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

