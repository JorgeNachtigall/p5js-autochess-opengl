class Hero {
    constructor(id, life, attack, range, isEnemy) {
        this.id = id;
        this.position = createVector(0, 0, 0);
        this.visibility = true;
        this.life = life;
        this.attack = attack;
        this.range = range;
        this.followMouse = false;
        this.isEnemy = isEnemy;
        this.blockPos = 0;
    }

    draw() {
        push();
        texture(models[this.id].texture);
        translate(this.position);
        scale(models[this.id].inventoryScale);
        rotate(PI / 2, createVector(1, 0, 0));
        if (this.isEnemy)
            rotate(PI, createVector(0, 1, 0));
        model(models[this.id].model);
        pop();
    }
}