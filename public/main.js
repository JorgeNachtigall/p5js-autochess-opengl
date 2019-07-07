let diana;
let player;
let hexagon;
let brick;
let width = 800;
let height = 800;
let bounding = [];
let boundingInventory = [];
let boundingStore = [];
let mouse = 1;
let models = [];
let modelsMaxIndex = 2;
let gamePhase = 1;
let dragHero = -1;
let graph;

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
    clock = createDiv('Time: 20');
    clock.position(25, 690);
    clock.id = 'clock';
    clock.style('color', 'black');
    clock.style('font-size', '40px');
    createCanvas(width, height, WEBGL);
    chess = new Game();
    brick.resize(1000, 1000);
    setBoundings();
}

function draw() {
    background(200);
    angleMode(RADIANS);
    noStroke();
    //print(mouseX - (width / 2), mouseY - (height / 2));
    chess.draw();
    chess.mouseTrackerBoard();
    gameLogic();
    //print(mouse);
}

function mouseClicked() {
    if (gamePhase == 1) {
        if (chess.interface.store.slots[chess.mouseTrackerStore()] != undefined) {
            chess.interface.inventory.add(chess.interface.store.slots[chess.mouseTrackerStore()]);
            chess.interface.store.visibility = false;
            gamePhase = 2;
            chess.generateEnemies();
            setTimeout(addSec, 1000);
        }
    } else if (gamePhase == 2) {
        if (chess.interface.inventory.slots[chess.mouseTrackerInventory()] != undefined && chess.interface.inventory.slots[chess.mouseTrackerInventory()] != -1) {
            if (chess.heroesOnBoard < 3) {
                dragHero = chess.newHero(chess.interface.inventory.slots[chess.mouseTrackerInventory()], 10000, 100, false);
                chess.interface.inventory.slots[chess.mouseTrackerInventory()] = -1;
                gamePhase = 3;
            }
        } else if (chess.board.blocks[mouse][1] != -1) {
            dragHero = chess.board.blocks[mouse][1];
            chess.board.blocks[mouse][1] = -1;
            gamePhase = 3;
        }


    } else if (gamePhase == 3) {
        if (chess.board.blocks[mouse][1] == -1) {
            chess.board.blocks[mouse][1] = dragHero;
            chess.hero[dragHero].blockPos = mouse;
            dragHero = -1;
            gamePhase = 2;
            chess.interface.store.generate();
        }
    }

}

function gameLogic() {
    if (gamePhase == 3) {
        if (dragHero != -1) {
            chess.hero[dragHero].position = chess.board.blocks[mouse][0];
        }
    }
    if (gamePhase == 4) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (chess.hero[i] != -1 && chess.enemy[j] != -1) {
                    chess.attack(chess.hero[i], chess.enemy[j]);
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (chess.hero[j] != -1 && chess.enemy[i] != -1) {
                    chess.attack(chess.enemy[i], chess.hero[j]);
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            if (chess.enemy[i] != -1) {
                break;
            } else {
                chess.interface.store.visibility = true;
                gamePhase = 1;
            }
        }

    }
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

    boundingStore.push(new Bounding(-280, -390, 140));
    boundingStore.push(new Bounding(-55, -390, 140));
    boundingStore.push(new Bounding(160, -390, 140));
}

function addSec() {
    const prevSec = parseInt(clock.html().substring(6));
    if (prevSec > 0) {
        clock.html('Time: ' + (prevSec - 1));
        setTimeout(addSec, 1000);
    } else {
        gamePhase = 4;
        clock.html('Time: ' + 20);
    }
}