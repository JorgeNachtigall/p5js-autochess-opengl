let diana;
let player;
let hexagon;
let brick;
let width = 800;
let height = 800;
let bounding = [];
let mouse = 0;

function preload() {
    obj_diana = loadModel('src/obj_diana.obj');
    txt_diana = loadImage('src/txt_diana.png');
    obj_volibear = loadModel('src/obj_volibear.obj');
    txt_volibear = loadImage('src/txt_volibear.png');
    obj_jinx = loadModel('src/obj_jinx.obj');
    txt_jinx = loadImage('src/txt_jinx.png');
    hexagon = loadModel('src/obj_hexagon.obj');
    brick = loadImage('src/txt_hexagon.png');
}

function setup() {
    createCanvas(width, height, WEBGL);
    chess = new Game();
    chess.newHero('diana');
    brick.resize(1000, 1000);
    setBoundings();
}

function draw() {
    background(200);
    angleMode(RADIANS);
    noStroke();
    chess.draw();
    print(mouseX - (width / 2), mouseY - (height / 2));
    for (let i = 0; i < 18; i++) {
        //bounding[i].debug();
        if (mouseX - (width / 2) < bounding[i].right && mouseX - (width / 2) > bounding[i].left &&
            mouseY - (height / 2) > bounding[i].top && mouseY - (height / 2) < bounding[i].bottom) {
            mouse = i;
        }
    }
    chess.hero[0].position = chess.board.blocks[mouse][0];
}

function setBoundings() {
    bounding.push(new Bounding(-370, 120, 80));
    bounding.push(new Bounding(-245, 80, 70));
    bounding.push(new Bounding(-150, 120, 80));
    bounding.push(new Bounding(-40, 75, 80));
    bounding.push(new Bounding(70, 120, 80));
    bounding.push(new Bounding(170, 75, 75));
    bounding.push(new Bounding(290, 120, 80));
    bounding.push(new Bounding(-340, 40, 65));
    bounding.push(new Bounding(-220, 0, 60));
    bounding.push(new Bounding(-135, 40, 65));
    bounding.push(new Bounding(-35, 0, 65));
    bounding.push(new Bounding(65, 35, 70));
    bounding.push(new Bounding(160, 0, 60));
    bounding.push(new Bounding(270, 40, 60));
    bounding.push(new Bounding(-310, -30, 60));
    bounding.push(new Bounding(-125, -30, 58));
    bounding.push(new Bounding(60, -30, 58));
    bounding.push(new Bounding(245, -30, 58));
}