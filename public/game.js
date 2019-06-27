class Game {
    constructor() {
        this.board = new Board();
        this.hero = [0, 0, 0];
        this.maxHero = 3;
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
        push();
        rotate(-150, createVector(1, 0, 0));
        translate(createVector(0, 150, -50));
        this.board.draw();
        for (let i = 0; i < this.maxHero; i++) {
            if (this.hero[i].visibility == true && this.hero[i].visibility != 0) {
                this.hero[i].draw();
            }
        }
        pop();
    }

}