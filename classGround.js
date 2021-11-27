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
        ctx.drawImage(document.getElementById("ground"), this.x, this.y, this.width, this.height);
    }
}