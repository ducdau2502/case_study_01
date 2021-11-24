class PipeNorth {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawPipeNorth(ctx) {

        let pN = document.getElementById("pipeNorth")
        ctx.drawImage(pN, this.x, this.y);

    }
}