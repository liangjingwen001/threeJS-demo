~function() {
    
    // 创建场景
    const scene = new THREE.Scene();

    // 创建摄像机
    // const camera = new THREE.PerspectiveCamera('视角', '窗口长宽比', '表示距离摄像机多远的位置进行渲染', '距离摄像机多远结束渲染，默认1000')
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器场景的大小
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 把渲染器添加到页面中去
    document.body.appendChild(renderer.domElement);

    // 创建基础几何模型
    // const geometry = new THREE.BoxGeometry('x轴的长', 'y轴的长', 'z轴的长')
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // 创建材质
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    // 创建网格对象
    const cube = new THREE.Mesh(geometry, material)
    //把网格对象添加到场景中去
    scene.add(cube);

    function animate() {
        requestAnimationFrame(animate);
        // 网格对象自旋专
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
    }
    animate()
    // 摄像机距离物体的位置
    camera.position.z = 6

    window.addEventListener('resize', () => {
        // 初始化摄像机
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        // 初始化渲染器尺寸
        renderer.setSize(window.innerWidth, window.innerHeight);
    })
}()