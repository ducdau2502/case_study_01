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
        this.y -= 34;
    }

    moveDown() {
        if (score < 10) {
            this.y += 1.5;
        } else {
            this.y += 2;
        }
    }
}



class Ground {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = 0;
        this.y = cvs.height - 120;
        this.width = cvs.width;
        this.height = 120;
    }

    drawGround() {
        ctx.drawImage(document.getElementById("fg"), this.x, this.y, this.width, this.height);

    }
}
