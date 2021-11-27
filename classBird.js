class Bird {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 38;
        this.height = 26;
    }

    drawBird() {
        ctx.drawImage(document.getElementById("bird"), this.x, this.y, this.width, this.height);

    }

    moveUp() {
        this.y -= 32;
    }

    moveDown() {
        if (score < 10) {
            this.y += 1.5;
        } else {
            this.y += 2;
        }
    }
}
