class Game {
    constructor() {
        this.board = new Board();
        this.interface = new Interface();
        this.hero = [0, 0, 0];
        this.maxHero = 3;
        this.isSelecting = false;
        this.modelSelected = 0;
    }

    newHero(id) {
        for (let i = 0; i < 3; i++) {
            if (this.hero[i] == 0) {
                this.hero[i] = new Hero(id);
                break;
            }
        }
    }

    draw() {
        this.interface.draw();
        push();
        rotate(-150, createVector(1, 0, 0));
        translate(createVector(0, 150, -50));
        this.board.draw();
        for (let i = 0; i < this.maxHero; i++) {
            if (this.hero[i].visibility) {
                this.hero[i].draw();
            }
        }
        this.refreshPosition();
        pop();
    }

    mouseTrackerBoard() {
        for (let i = 0; i < 18; i++) {
            if (mouseX - (width / 2) < bounding[i].right && mouseX - (width / 2) > bounding[i].left &&
                mouseY - (height / 2) > bounding[i].top && mouseY - (height / 2) < bounding[i].bottom) {
                mouse = i;
            }
        }
    }

    refreshPosition() {
        for (let i = 0; i < this.maxHero; i++) {
            if (this.hero[i].followMouse)
                this.hero[i].position = this.board.blocks[mouse][0];
        }
    }
}