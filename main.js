let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let gap = 85;
let score = 0;
let highScore = 0;
sessionStorage.setItem('high_score0', 0)
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
        ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 170, cvs.height - 20);


        if (pN[i].x === (cvs.width / 2 - 40)) {
            let randomY = Math.floor(Math.random() * (-110 + 310) - 310);
            // let gap = Math.floor(Math.random() * (90 - 80) + 80);
            pN.push(new PipeNorth(cvs.width + 50, randomY));
            pS.push(new PipeSouth(cvs.width + 50, randomY + 380 + gap));
        }

        if (bird.y <= 0 || bird.y + bird.height >= fg.y ||
            bird.x + bird.width - 3 >= pN[i].x && bird.x <= pN[i].x + pN[i].width - 3 && bird.y - 3 <= pN[i].y + pN[i].height ||
            bird.x + bird.width - 3 >= pS[i].x && bird.x <= pS[i].x + pS[i].width - 3 && bird.y + bird.height - 3 >= pS[i].y) {
            stopGame();
            return
        }

        if (pN[i].x === bird.x - 40) {
            score++;
            getScore.play();
        }
        for (let j = 0; j < sessionStorage.length; j++) {

            if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
                highScore = score;
                sessionStorage.setItem('high_score' + (j + 1), highScore)
            }
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
    document.getElementById('score__title').innerHTML = `${score}`;
    document.getElementById('body__score').style.display = "block";
    document.getElementById('music').pause();

}

function restart() {
    location.reload();
    document.getElementById('body__score').style.display = "none";
    start();
}


function moveBird() {
    bird.moveUp();
    flyBird.play();
}

window.addEventListener("keydown", moveBird);

function clearCanvas() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

window.addEventListener('keydown', musicPlay);

function musicPlay() {
    document.getElementById('music').play();
    window.removeEventListener('keydown', musicPlay);
}

let flyBird = new Audio();
let getScore = new Audio();

flyBird.src = "sounds/fly.mp3";
getScore.src = "sounds/score.mp3";