class Bounding {
    constructor(x, y, size) {
        this.position = createVector(x, y);
        this.size = size;
        this.top = this.position.y;
        this.right = this.position.x + this.size;
        this.bottom = this.position.y + this.size;
        this.left = this.position.x;
    }

    debug() {
        rect(this.position.x, this.position.y, this.size, this.size);
    }
}