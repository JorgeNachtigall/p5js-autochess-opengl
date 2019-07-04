let diana;
let player;
let hexagon;
let brick;
let width = 800;
let height = 800;
let bounding = [];
let boundingInventory = [];
let mouse = 0;
let models = [];
let modelsMaxIndex = 2;

function preload() {
    models[0] = {
        model: loadModel('src/obj_diana.obj'),
        texture: loadImage('src/txt_diana.png'),
        inventoryScale: 0.65
    };

    models[1] = {
        model: loadModel('src/obj_volibear.obj'),
        texture: loadImage('src/txt_volibear.png'),
        inventoryScale: 0.45
    };

    models[2] = {
        model: loadModel('src/obj_jinx.obj'),
        texture: loadImage('src/txt_jinx.png'),
        inventoryScale: 0.6
    };

    hexagon = loadModel('src/obj_hexagon.obj');
    brick = loadImage('src/txt_hexagon.png');
}

function setup() {
    createCanvas(width, height, WEBGL);
    chess = new Game();
    //chess.newHero('diana');
    brick.resize(1000, 1000);
    setBoundings();
}

function draw() {
    background(200);
    angleMode(RADIANS);
    noStroke();
    print(mouseX - (width / 2), mouseY - (height / 2));
    chess.draw();
    chess.mouseTrackerBoard();
    //chess.mouseTrackerStore();
}

function mouseClicked() {

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

    boundingInventory.push(new Bounding(-185, 245, 140));
    boundingInventory.push(new Bounding(10, 245, 140));
    boundingInventory.push(new Bounding(195, 245, 140));
}