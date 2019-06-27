let diana;
let player;
let hexagon;
let brick;
let width = 800;
let height = 800;
let bounding = [];

function preload() {
    obj_diana = loadModel('src/obj_diana.obj');
    txt_diana = loadImage('src/txt_diana.png')
    hexagon = loadModel('src/obj_hexagon.obj');
    brick = loadImage('src/txt_hexagon.png');
}

function setup() {
    createCanvas(width, height, WEBGL);
    chess = new Game();
    brick.resize(1000, 1000);
}

function draw() {
    background(200);
    angleMode(RADIANS);
    noStroke();
    chess.draw();
    //stroke('red');
    //rect(bounding.position.x, bounding.position.y, bounding.size, bounding.size);
    //print(mouseX - (width / 2), mouseY - (height / 2));
    setBoundings();
    //for (let i = 0; i < 4; i++)
    //bounding[i].debug();
    if (mouseX - (width / 2) < bounding[0].right && mouseX - (width / 2) > bounding[0].left &&
        mouseY - (height / 2) > bounding[0].top && mouseY - (height / 2) < bounding[0].bottom) {
        print('OLAAAAA');
    }
}

function setBoundings() {
    bounding.push(new Bounding(-370, 120, 80));
    bounding.push(new Bounding(-245, 80, 70));
    bounding.push(new Bounding(-150, 120, 80));
    bounding.push(new Bounding(-40, 75, 80));
}