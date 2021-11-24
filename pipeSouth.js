class PipeSouth {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawPipeSouth(ctx) {

        let pS = document.getElementById("pipeSouth")
        ctx.drawImage(pS, this.x, this.y);

    }
}