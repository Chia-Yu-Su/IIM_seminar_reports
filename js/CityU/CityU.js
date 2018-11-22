////////////////////dadada
////////////////////dadada
////////////////////dadada


function chsvg() {
    var svgObject = document.getElementById('object').contentDocument;
    var test = svgObject.getElementsByTagName('svg');
    //test[0].setAttribute("viewBox", "10 20 904 604");
    //test[0].setAttribute("width", "100%");
    //test[0].setAttribute("height", "800");
}


function Getsvg(svg) {
    document.getElementById("svgarea").innerHTML =
        "<object id='object' data='" + svg + "' type='image/svg+xml'  ></object>";


}


function bgcolor() {
    var container = document.getElementById('container');
    var containerdiv = container.getElementsByTagName('div');
    containerdiv[0].style.backgroundColor = "rgba(255,255,255,0.7)";
}

////////////////////dadada
////////////////////dadada
////////////////////dadada


var table = [
    //Technology
    "Prof Bai Chunli", "Technology", "", 5, 1, "html/CityU/Bai_Chunli.html", "img/Bai_Chunli.png", "rgba(255, 194, 224,0.7)",
    "Prof Jochen Feldmann", "Technology", "", 6, 1, "html/CityU/Jochen_Feldmann.html", "img/Jochen_Feldmann.png", "rgba(255, 194, 224,0.7)",
    "Prof H T Kung", "Technology", "", 7, 1, "html/CityU/H_T_Kung.html", "img/H_T_Kung.png", "rgba(255, 194, 224,0.7)",
    "Prof Akihisa Inoue", "Technology", "", 8, 1, "html/CityU/Inoue.html", "img/Akihisa_Inoue.png", "rgba(255, 194, 224,0.7)",
    "Prof Wei Zhao", "Technology", "", 9, 1, "#", "img/Wei_Zhao.png", "rgba(255, 194, 224,0.7)",
    "Prof Martyn Poliakoff", "Technology", "", 10, 1, "#", "img/Martyn_Poliakoff.png", "rgba(255, 194, 224,0.7)",
    "Prof Andrew Yao", "Technology", "", 11, 1, "#", "img/Andrew_Yao.png", "rgba(255, 194, 224,0.7)",
    "Prof Gao Wen", "Technology", "", 12, 1, "html/CityU/Gao_Wen.html", "img/Gao_Wen.png", "rgba(255, 194, 224,0.7)",
    "Prof Herbert Gleiter", "Technology", "", 13, 1, "#", "img/Herbert_Gleiter.png", "rgba(255, 194, 224,0.7)",
    "Prof Ziyuan Ouyang", "Technology", "", 14, 1, "#", "img/Ziyuan_Ouyang.png", "rgba(255, 194, 224,0.7)",
    "Prof Yi-long Huang", "Technology", "", 5, 2, "#", "img/Yi_long_Huang.png", "rgba(255, 194, 224,0.7)",
    "Prof Serge Haroche", "Technology", "", 6, 2, "http://140.113.73.194/cityU/Fifty-Years-of-Revolutions-in-Laser-Physics.htm", "img/Serge_Haroche.png", "rgba(255, 194, 224,0.7)",
    "Prof Li-jun Wan", "Technology", "", 7, 2, "#", "img/Li_jun_Wan.png", "rgba(255, 194, 224,0.7)",
    "Prof Chen Hesheng", "Technology", "", 8, 2, "#", "img/Chen_Hesheng.png", "rgba(255, 194, 224,0.7)",
    "Dr Jeffrey Wadsworth", "Technology", "", 9, 2, "html/CityU/Jeffrey_Wadsworth.html", "img/Jeffrey_Wadsworth.png", "rgba(255, 194, 224,0.7)",
    "Prof George Fu Gao", "Technology", "", 10, 2, "#", "img/George_Fu_Gao.png", "rgba(255, 194, 224,0.7)",
    "", "Technology", "", 11, 2, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Technology", "", 12, 2, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Technology", "", 13, 2, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Technology", "", 14, 2, "#", "", "rgba(255, 194, 224,0.7)",

    //Humanity
    "Prof Thomas J Sargent", "Humanity", "", 5, 3, "html/CityU/Thomas_Sargent.html", "img/Thomas_J_Sargent.png", "rgba(255, 194, 224,0.7)",
    "Prof Huang Chin-shing", "Humanity", "", 6, 3, "html/CityU/Huang_Chin_Shing.html", "img/Huang_Chin_shing.png", "rgba(255, 194, 224,0.7)",
    "Dr Yukio Hatoyama", "Humanity", "", 7, 3, "html/CityU/Yukio_Hatoyama.html", "img/Yukio_Hatoyama.png", "rgba(255, 194, 224,0.7)",
    "Mr Hau Pei-tsun", "Humanity", "", 8, 3, "#", "img/Hau_Pei_tsun.png", "rgba(255, 194, 224,0.7)",
    "Prof Zhang Jie", "Humanity", "", 9, 3, "#", "img/Zhang_Jie.PNG", "rgba(255, 194, 224,0.7)",
    "Mr Robert CY Wu", "Humanity", "", 10, 3, "#", "img/Robert_CY_Wu.png", "rgba(255, 194, 224,0.7)",
    "Prof Yuan Ming", "Humanity", "", 11, 3, "#", "img/Yuan_Ming.png", "rgba(255, 194, 224,0.7)",
    "Fung Ming-chu", "Humanity", "", 12, 3, "#", "img/Fung_Ming_chu.png", "rgba(255, 194, 224,0.7)",
    "Prof Loren W. Crabtree", "Humanity", "", 13, 3, "html/CityU/Loren.html", "img/Loren_W_Crabtree.png", "rgba(255, 194, 224,0.7)",
    "Prof Peter Burke", "Humanity", "", 14, 3, "#", "img/Peter_Burke.png", "rgba(255, 194, 224,0.7)",
    "Dr Liu Chao-shiuan", "Humanity", "", 5, 4, "#", "img/Liu_Chao_shiuan.png", "rgba(255, 194, 224,0.7)",
    "Prof Torbjörn Lodén", "Humanity", "", 6, 4, "#", "img/Torbjörn_Lodén.png", "rgba(255, 194, 224,0.7)",
    "Prof Noriko Mizuta", "Humanity", "", 7, 4, "#", "img/Noriko_Mizuta.png", "rgba(255, 194, 224,0.7)",
    "Prof Arden L Bement Jr", "Humanity", "", 8, 4, "#", "img/Arden_L_Bement_Jr.png", "rgba(255, 194, 224,0.7)",
    "伍東揚博士", "Humanity", "", 9, 4, "#", "img/伍東揚博士.png", "rgba(255, 194, 224,0.7)",
    //dada
    "Prof Chao Han Liu", "Humanity", "(244)", 10, 4, "html/CityU/24-07-2015 Prof. Chao Han Liu.svg", "img/Chao_Han_Liu.png", "rgba(255, 194, 224,0.7)",
    "Prof Rogers Smith", "Humanity", "(272)", 11, 4, "html/CityU/28-10-2014 Prof. Roger Wets.svg", "img/Rogers_Smith.png", "rgba(255, 194, 224,0.7)",
    //dada
    "", "Humanity", "", 12, 4, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Humanity", "", 13, 4, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Humanity", "", 14, 4, "#", "", "rgba(255, 194, 224,0.7)",

    //Environment
    "Dr Thomas E Mason", "Environment", "140.116", 5, 5, "", "img/Thomas_E_Mason.png", "rgba(255, 194, 224,0.7)",
    "Prof Pan Zi-qiang", "Environment", "186.207", 6, 5, "#", "img/Pan_Zi_qiang.png", "rgba(255, 194, 224,0.7)",
    "Prof Roger Wets", "Environment", "192.217", 7, 5, "#", "img/Roger_Wets.png", "rgba(255, 194, 224,0.7)",
    "Prof Liang Di-gang", "Environment", "158.92535", 8, 5, "#", "img/Liang_Di_gang.png", "rgba(255, 194, 224,0.7)",
    "Professor Frank Shu", "Environment", "58.933195", 9, 5, "http://140.113.73.194/cityU/Reversing-Climate-change-Using-Carbon-Tech-to-Fight-Carbon-Em.htm", "img/Frank_Shu.png", "rgba(255, 194, 224,0.7)",
    //dada
    "Prof Sidney Yip", "Environment", "", 10, 5, "html/CityU/03-03-2015 Prof Sidney Yip.svg", "img/Sidney_Yip.png", "rgba(255, 194, 224,0.7)",
    "Prof Stephen Forrest", "Environment", "", 11, 5, "html/CityU/09-01-2015 Prof Forrest.svg", "img/Stephen_Forrest.png", "rgba(255, 194, 224,0.7)",
    //dada
    "Prof David R. Clarke", "Environment", "", 12, 5, "#", "img/David_R_Clarke.png", "rgba(255, 194, 224,0.7)",
    "Prof Roger Cashmore", "Environment", "", 13, 5, "html/CityU/Roger_Cashmore.html", "img/Roger_Cashmore.png", "rgba(255, 194, 224,0.7)",

    //Economics
    "Prof Myron S Scholes", "Economics", "", 14, 5, "#", "img/Myron_S_Scholes.png", "rgba(255, 194, 224,0.7)",
    "Prof John R. Birge", "Economics", "", 5, 6, "html/CityU/John_R_Birge.html", "img/John_R_Birge.png", "rgba(255, 194, 224,0.7)",
    "Dr Chang Chia Juch", "Economics", "", 6, 6, "#", "img/Chang_Chia_Juch.png", "rgba(255, 194, 224,0.7)",
    "Dr Lee Kai-fu", "Economics", "", 7, 6, "http://140.113.73.194/cityU/Betting-on-Chinas-Innovation-A-Perspective-from-Innovation-Works.htm", "img/Lee_Kai_fu.png", "rgba(255, 194, 224,0.7)",
    "Dr Seppo Honkapohja", "Economics", "", 8, 6, "#", "img/Seppo_Honkapohja.png", "rgba(255, 194, 224,0.7)",

    //Art
    "Prof Yu Kwang-chung", "Art", "", 9, 6, "html/CityU/Yu_Kwang_chung.html", "img/Yu_Kwang_chung.png", "rgba(255, 194, 224,0.7)",
    "Fung Ming-chu", "Art", "", 10, 6, "#", "img/Fung_Ming_chu.png", "rgba(255, 194, 224,0.7)",
    "Prof Ovid J. L. Tzeng", "Art", "", 11, 6, "#", "img/Ovid_J_L_Tzeng.png", "rgba(255, 194, 224,0.7)",
    "Dr Francesco Vossilla", "Art", "", 12, 6, "#", "img/Francesco_Vossilla.png", "rgba(255, 194, 224,0.7)",
    "", "Art", "", 13, 6, "#", "", "rgba(255, 194, 224,0.7)",
    "", "Art", "", 14, 6, "#", "", "rgba(255, 194, 224,0.7)",

    //Biology
    "Professor Prof GUO Lei", "Biology", "", 5, 7, "html/CityU/GUO_Lei.html", "img/GUO_Lei.png", "rgba(255, 194, 224,0.7)",
    "Prof Robert H Austin", "Biology", "", 6, 7, "html/CityU/Robert_Austin.html", "img/Robert_H_Austin.png", "rgba(255, 194, 224,0.7)",
    "Prof Herbert Waldmann", "Biology", "", 7, 7, "#", "img/Herbert_Waldmann.png", "rgba(255, 194, 224,0.7)",
    "Prof Michael Waterman", "Biology", "", 8, 7, "#", "img/Michael_Waterman.png", "rgba(255, 194, 224,0.7)",
    "Professor David D. Ho", "Biology", "", 9, 7, "http://140.113.73.194/cityU/Novel-Approaches-to-HIV-Prevention.htm", "img/David_D_Ho.png", "rgba(255, 194, 224,0.7)",
    "Prof Maxime Schwartz", "Biology", "", 10, 7, "html/CityU/Maxime.html", "img/Maxime_Schwartz.png", "rgba(255, 194, 224,0.7)",
    //dada
    "Prof Hung Mien-chie", "Biology", "", 11, 7, "html/CityU/29-09-2015 Prof. Hung Mien-chie.svg", "img/Hung_Mien_chie.png", "rgba(255, 194, 224,0.7)",
    //dada
    "Prof Wing Hung Wong", "Biology", "", 12, 7, "#", "img/Wing_Hung_Wong.png", "rgba(255, 194, 224,0.7)",
    "Professor Poo Mu-ming", "Biology", "", 13, 7, "http://140.113.73.194/cityU/NeuralPlasticityFromSynapsetoCognition.htm", "img/Poo_Mu_ming.png", "rgba(255, 194, 224,0.7)",
    "Prof Ada Yonath", "Biology", "", 14, 7, "html/CityU/Ada_Yonath.html", "img/Ada_Yonath.png", "rgba(255, 194, 224,0.7)",
    "Prof Dennis Lo", "Biology", "", 5, 8, "#", "img/Dennis_Lo.png", "rgba(255, 194, 224,0.7)",

    //Law
    //dada
    "Prof Thomas Wilhelmsson", "Law", "", 6, 8, "html/CityU/13-10-2015 Prof. Thomas Wilheimsson.svg", "img/Thomas_Wilhelmsson.png", "rgba(255, 194, 224,0.7)",
    //dada
    "賀榮大法官", "Law", "", 7, 8, "html/CityU/Justice_He_Rong.html", "img/賀榮大法官.png", "rgba(255, 194, 224,0.7)",

    //Math
    "Professor Pierre-Louis Lions", "Math", "", 8, 8, "http://140.113.73.194/cityU/On-Mean-Field-Games.htm", "img/Pierre_Louis_Lions.png", "rgba(255, 194, 224,0.7)",

    "", "", "", 9, 8, "#", "", "rgba(255, 194, 224,0.7)",
    "", "", "", 10, 8, "#", "", "rgba(255, 194, 224,0.7)",
    "", "", "", 11, 8, "#", "", "rgba(255, 194, 224,0.7)",
    "", "", "", 12, 8, "#", "", "rgba(255, 194, 224,0.7)",
    "", "", "", 13, 8, "#", "", "rgba(255, 194, 224,0.7)",
    "", "", "", 14, 8, "#", "", "rgba(255, 194, 224,0.7)",

];

var camera, scene, renderer;
var controls;

var objects = [];
//var objects1 = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 2800;

    scene = new THREE.Scene();

    // table

    for (var i = 0; i < table.length; i += 8) {



        var element = document.createElement('div');
        element.className = 'element';
        //element.style.backgroundColor = 'rgba(255,187,0,' + ( Math.random() * 0.5 + 0.25 ) + ')';


        var bg = document.createElement('div');

        //各分類顏色
        var bgcolor = table[i + 7] //預設顏色
        if (table[i + 1] == 'Technology') {
            var bgcolor = "rgba(255, 51, 51,0.7)";
        }
        if (table[i + 1] == 'Humanity') {
            var bgcolor = "rgba(255, 136, 136,0.7)";
        }
        if (table[i + 1] == 'Environment') {
            var bgcolor = "rgba(255, 255, 119,0.7)";
        }
        if (table[i + 1] == 'Economics') {
            var bgcolor = "rgba(102, 255, 102,0.7)";
        }
        if (table[i + 1] == 'Art') {
            var bgcolor = "rgba(153, 187, 255,0.7)";
        }
        if (table[i + 1] == 'Biology') {
            var bgcolor = "rgba(153, 153, 255,0.7)";
        }
        if (table[i + 1] == 'Law') {
            var bgcolor = "rgba(176, 136, 255,0.7)";
        }


        element.setAttribute('style', "background-color:" + bgcolor);
        element.appendChild(bg);

        //dadadadada
        //dadadadada
        //dadadadada
        var link = document.createElement('a'); // + url
        //link.setAttribute('href', table[i + 5]);
        //link.setAttribute('target', "_blank");
        element.appendChild(link);

        var Img = document.createElement('img');
        Img.setAttribute('class', 'done');
        Img.setAttribute('style', 'background-image:url(' + table[i + 6] + ');background-size:100px 100px;background-repeat:no-repeat;background-position:center');
        var intobox = 'Getsvg("' + table[i + 5] + '");'
        Img.setAttribute('onclick', intobox);
        link.appendChild(Img);

        //dadadadada
        //dadadadada
        //dadadadada

        var number = document.createElement('div');
        number.className = 'number'; //右上角小字
        number.textContent = (i / 8);
        element.appendChild(number);


        var symbol = document.createElement('div');
        symbol.className = 'symbol'; //大字
        symbol.textContent = table[i];
        element.appendChild(symbol);
        link.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details'; //下面兩行小字
        details.innerHTML = table[i + 1] // + '<br>' + table[ i + 2 ];
        element.appendChild(details);
        link.appendChild(details);

        var object = new THREE.CSS3DObject(element);

        scene.add(object);


        objects.push(object);



        //

        var object = new THREE.Object3D();
        object.position.x = (table[i + 3] * 185) - 1790;
        object.position.y = - (table[i + 4] * 300) + 1620;



        targets.table.push(object);


    }
    // sphere

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

    }
    // helix

    var vector = new THREE.Vector3();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 1300 * Math.sin(phi);
        object.position.y = - (i * 12) + 600;
        object.position.z = 1300 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

    }

    // grid

    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i % 4) * 310) - 400;
        object.position.y = (- (Math.floor(i / 4) % 3) * 310) + 400;
        object.position.z = (Math.floor(i / 12)) * 500 - 1000;

        targets.grid.push(object);

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild(renderer.domElement);

    //

    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 200;
    controls.maxDistance = 100000;
    controls.addEventListener('change', render);

    var button = document.getElementById('table');
    button.addEventListener('click', function (event) {
        controls.reset();
        transform(targets.table, 20);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 5000;
    }, false);

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (event) {
        controls.reset();
        transform(targets.sphere, 20);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3000;
    }, false);


    var button = document.getElementById('helix');
    button.addEventListener('click', function (event) {
        controls.reset();
        transform(targets.helix, 20);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 5000;
    }, false);

    var button = document.getElementById('grid');
    button.addEventListener('click', function (event) {
        controls.reset();
        transform(targets.grid, 20);
        camera.position.x = 2000;
        camera.position.y = 0;
        camera.position.z = 3000;
    }, false);


    var button = document.getElementById('+');
    button.addEventListener('click', function (event) {
        
        controls.reset();
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3000;

        
    }, false);

    var button = document.getElementById('-');
    button.addEventListener('click', function (event) {
        controls.reset();
        renderer.setSize(300, 300);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 3000;
    }, false);

    transform(targets.sphere, 20);
    controls.reset();
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 3000;
    //

    window.addEventListener('resize', onWindowResize, false);

}

function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }


    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}



function transformPos(targets, duration, iX, iY, iZ) {

    TWEEN.removeAll();
    camera.position.x = iX;
    camera.position.y = iY;
    camera.position.z = iZ;
    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

function animate() {

    requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render(scene, camera);

}















//select控制球的轉動

function k1Onchange() {
    var selectBox = document.getElementById("Art");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";


    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
}
function k2Onchange() {
    var selectBox = document.getElementById("Biology");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";

    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
    if (selectedValue == 68) {
    }
    else if (selectedValue == 64) {
    }
}
function k3Onchange() {
    var selectBox = document.getElementById("Economics");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";

    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
}
function k4Onchange() {
    var selectBox = document.getElementById("Environment");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";

    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
}
function k5Onchange() {
    var selectBox = document.getElementById("Humanity");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";

    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);

}
function k6Onchange() {
    var selectBox = document.getElementById("Technology");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Law and Math").selectedIndex = "0";

    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
}
function k7Onchange() {
    var selectBox = document.getElementById("Law and Math");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    document.getElementById("Art").selectedIndex = "0";
    document.getElementById("Biology").selectedIndex = "0";
    document.getElementById("Economics").selectedIndex = "0";
    document.getElementById("Environment").selectedIndex = "0";
    document.getElementById("Humanity").selectedIndex = "0";
    document.getElementById("Technology").selectedIndex = "0";
    controls.reset();
    var phi = Math.acos(-1 + (2 * selectedValue) / 80);
    var theta = Math.sqrt(80 * Math.PI) * phi;
    x = 3000 * Math.cos(theta) * Math.sin(phi);
    y = 3000 * Math.sin(theta) * Math.sin(phi);
    z = 3000 * Math.cos(phi);
    transformPos(targets.sphere, 20, x, y, z);
    //					$('body').css('background-image', 'url(img/pll.PNG)');
}
