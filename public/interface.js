class Interface {
    constructor() {
        this.menuBackground = createGraphics(1, 1);
        this.menuBackground.background(70);
        this.menuModels = createGraphics(1, 1);
        this.menuModels.background(120);
    }

    draw() {

        texture(this.menuBackground);
        rect(-400, 230, 800, 170);
        texture(this.menuModels);
        rect(-220, 240, 610, 150); // menu models
        rect(-390, 240, 160, 150); // menu info
        // testando
        push();
        texture(txt_jinx);
        translate(createVector(-100, 330, 70));
        scale(0.6);
        rotate(PI, createVector(0, 1, 0))
        rotate(PI, createVector(1, 0, 0));
        model(obj_jinx);
        pop();
        //fim testando
    }
    // - 150 , 370
}