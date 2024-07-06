import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



// global variables
let scene;
let camera;
let renderer;
const canvas1 = document.querySelector('.webgl');

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = (window.innerWidth) / (window.innerHeight+115);
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);


camera.position.z = 2.3;
scene.add(camera);

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas1,
    antialias: true,
});
renderer.setSize(window.innerWidth , window.innerHeight +115);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
const earthTexture = new THREE.TextureLoader().load('texture/earthimg.jpg');
const spaceTexture = new THREE.TextureLoader().load('texture/galaxy.png');
const bumpTexture = new THREE.TextureLoader().load('texture/earthbump.jpg');
const cloudTexture = new THREE.TextureLoader().load('texture/earthCloud.png');

// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;


// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.6 , 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: earthTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.3
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// cloud Geometry
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

// cloud metarial
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
});

// cloud mesh
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
    map : spaceTexture,
    side: THREE.BackSide
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 0.6)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

// point light helper
// const Helper = new THREE.PointLightHelper(pointLight);
// scene.add(Helper);

// handling resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);





// spinning animation
const animate = () => {
    requestAnimationFrame(animate);
    starMesh.rotation.y -= 0.00098  ;
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.002;
    // galaxyMesh.rotation.y-=0.005;
    // hgMesh.rotation.y -= 0.01;
    controls.update();
    render();
    
};

// rendering
const render = () => {
    renderer.render(scene, camera);
}

animate();




function movecamera(){
    const t = document.body.getBoundingClientRect().top;
    starMesh.rotation.y -= 0.009;
    earthMesh.rotation.y -= 0.005;
    cloudMesh.rotation.y -= 0.009;

}
document.body.onscroll = movecamera;
movecamera();


