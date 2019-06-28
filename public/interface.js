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
    }

}