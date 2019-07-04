class Hero {
    constructor(id, life, mana, attack, range) {
        this.id = id;
        this.position = createVector(0, 0, 0);
        this.visibility = true;
        this.life = life;
        this.mana = mana;
        this.attack = attack;
        this.range = range;
        this.scale = 0.5;
        this.followMouse = false;
    }

    draw() {
        if (this.id == 'diana') {
            push();
            texture(models[0].texture);
            translate(this.position);
            scale(0.7);
            rotate(PI / 2, createVector(1, 0, 0));
            model(models[0].model);
            pop();
        }
    }
}