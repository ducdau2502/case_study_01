let ctx;
let fg;
let bird
let pipeSouth
let pipeNorth

    let cvs = document.getElementById("myCanvas");
    ctx = cvs.getContext("2d");
    let bX = 10;
    let bY = 150;
    bird = new Bird(bX, bY);
    pipeSouth = new PipeSouth(90, 400)
    pipeNorth = new PipeNorth(90, 0)
    fg = document.getElementById('fg')

ctx.drawImage(fg, 0, 400);

bird.drawBird(ctx)
pipeSouth.drawPipeSouth(ctx)
pipeNorth.drawPipeNorth(ctx)