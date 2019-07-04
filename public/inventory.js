class Inventory {
    constructor() {
        this.pos = {
            first: createVector(-100, 330, 70),
            second: createVector(90, 330, 70),
            third: createVector(250, 330, 70)
        };
        this.slots = [-1, -1, -1];
    }

    add(modelNumber) {
        for (let i = 0; i < 3; i++) {
            if (this.slots[i] == -1) {
                this.slots[i] = modelNumber;
                break;
            }
        }
    }

    draw() {
        if (this.slots[0] != -1) {
            push();
            texture(models[this.slots[0]].texture);
            translate(this.pos.first);
            scale(models[this.slots[0]].inventoryScale);
            rotate(PI, createVector(0, 1, 0))
            rotate(PI, createVector(1, 0, 0));
            model(models[this.slots[0]].model);
            pop();
        }
        if (this.slots[1] != -1) {
            push();
            texture(models[this.slots[1]].texture);
            translate(this.pos.second);
            scale(models[this.slots[1]].inventoryScale);
            rotate(PI, createVector(0, 1, 0))
            rotate(PI, createVector(1, 0, 0));
            model(models[this.slots[1]].model);
            pop();
        }
        if (this.slots[2] != -1) {
            push();
            texture(models[this.slots[2]].texture);
            translate(this.pos.third);
            scale(models[this.slots[2]].inventoryScale);
            rotate(PI, createVector(0, 1, 0))
            rotate(PI, createVector(1, 0, 0));
            model(models[this.slots[2]].model);
            pop();
        }

    }
}