class Board {
    constructor() {
        this.blocks = [];
        this.posY = 100;
        this.offsetX = -300;
        this.padding = 100;

        for (let i = 0; i < 7; i++) {
            if (i % 2 == 0)
                this.blocks[i] = [createVector(this.offsetX + i * this.padding, 0, 0), 0];
            else
                this.blocks[i] = [createVector(this.offsetX + i * this.padding, -50, 0), 0];
        }

        for (let i = 7; i < 14; i++) {
            if (i % 2 == 0)
                this.blocks[i] = [createVector(this.offsetX + (i - 7) * this.padding, -150, 0), 0];
            else
                this.blocks[i] = [createVector(this.offsetX + (i - 7) * this.padding, -100, 0), 0];
        }

        for (let i = 14; i < 18; i++) {
            this.blocks[i] = [createVector(this.offsetX + (i - 14) * (this.padding * 2), -200, 0), 0];
        }

    }

    draw() {
        for (let i = 0; i < 18; i++) {
            push();
            translate(this.blocks[i][0]);
            texture(brick);
            model(hexagon);
            pop();
        }
    }
}