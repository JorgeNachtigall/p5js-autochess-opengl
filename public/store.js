class Store {
    constructor() {
        this.pos = [];
        this.pos[0] = createVector(-200, -250, 50);
        this.pos[1] = createVector(0, -250, 50);
        this.pos[2] = createVector(200, -250, 50);
        this.background = createGraphics(1, 1);
        this.background.background(120);
        this.slots = [-1, -1, -1];
        this.visibility = true;
        this.generate();
    }

    draw() {
        if (this.visibility) {
            texture(this.background);
            rect(-400, -400, 800, 150);
            for (let i = 0; i < 3; i++) {
                push();
                texture(models[this.slots[i]].texture);
                translate(this.pos[i]);
                scale(models[this.slots[i]].inventoryScale);
                rotate(PI, createVector(0, 1, 0))
                rotate(PI, createVector(1, 0, 0));
                model(models[this.slots[i]].model);
                pop();
            }
        }
    }

    generate() {
        let min = 0;
        let max = modelsMaxIndex + 1;
        for (let i = 0; i < 3; i++) {
            let random = Math.floor(Math.random() * (max - min)) + min;
            this.slots[i] = random;
        }
    }

}