class Hero {
    constructor(id, isEnemy) {
        this.id = id;
        this.name = models[this.id].name;
        this.position = createVector(0, 0, 0);
        this.visibility = true;
        this.life = models[this.id].life;
        this.attack = models[this.id].attack;
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