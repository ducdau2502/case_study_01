let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let gap = 90;
let score = 0;
let highScore = 0;
let bird = new Bird(40, 120);
let fg = new Ground()
let pN = [new PipeNorth(cvs.width + 50, Math.floor(Math.random() * (-100 + 300) - 300))];
let pS = [new PipeSouth(cvs.width + 50, pN[0].y + pN[0].height + gap)];

function start() {
    clearCanvas();
    bird.drawBird();
    bird.moveDown();

    for (let i = 0; i < pN.length; i++) {
        pN[i].drawPipeNorth();
        pS[i].drawPipeSouth();
        fg.drawGround();
        pN[i].moveLeft();
        pS[i].moveLeft();
        ctx.fillStyle = "#090909";
        ctx.font = "20px Varela Round";
        ctx.fillText("Score : " + score, 10, cvs.height - 20);
        ctx.fillText("High Score : " + sessionStorage['high_score'], 170, cvs.height - 20);


        if (pN[i].x === cvs.width / 2) {
            let randomY = Math.floor(Math.random() * (-100 + 300) - 300);
            pN.push(new PipeNorth(cvs.width + 50, randomY));
            pS.push(new PipeSouth(cvs.width + 50, randomY + 380 + gap));
        }

        if (bird.y <= 0 || bird.y + bird.height >= fg.y ||
            bird.x + bird.width - 3 >= pN[i].x && bird.x <= pN[i].x + pN[i].width && bird.y - 3 <= pN[i].y + pN[i].height ||
            bird.x + bird.width - 3 >= pS[i].x && bird.x <= pS[i].x + pS[i].width && bird.y + bird.height - 3 >= pS[i].y) {
            stopGame();
            return
        }

        if (pN[i].x === bird.x - 50) {
            score++;
        }

        if (sessionStorage['high_score'] < score) {
            highScore = score
            sessionStorage.setItem('high_score', highScore)
        }

    }

    requestAnimationFrame(start);
}

start();
// function startGame() {
//     start();
//     document.getElementById('startGame').style.display = "none";
// }

function stopGame() {
    document.getElementById('restart').style.display = "flex";
}

function restart() {
    location.reload();
    document.getElementById('startGame').style.display = "none";
    start();

}


function moveBird() {
    bird.moveUp();
}

window.addEventListener("keydown", moveBird);

function clearCanvas() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

