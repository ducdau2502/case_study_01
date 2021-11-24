class Bird {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawBird(ctx) {

        ctx.drawImage(document.getElementById("bird"), this.x, this.y);

    }
}
