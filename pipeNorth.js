class PipeNorth {
    x;
    y;
    width;
    height;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 380;
    }

    drawPipeNorth() {
        ctx.drawImage(document.getElementById("pipeNorth"), this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (score >= 5) {
            this.x -= 2;
        } else {
            this.x -= 1;
        }
    }

}