class Bird {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 30;
    }

    drawBird() {
        ctx.drawImage(document.getElementById("bird"), this.x, this.y, this.width, this.height);
    }

    moveUp() {
        this.y -= 30;
    }
    moveDown() {
        this.y += 2;

    }
}



class Ground {
    x;
    y;
    width;
    heigth;

    constructor() {
        this.x = 0;
        this.y = cvs.height - 120;
        this.width = cvs.width;
        this.heigth = 120;
    }

    drawGround() {
        ctx.drawImage(document.getElementById("fg"), this.x, this.y, this.width, this.heigth);
    }
}
