let cvs = document.getElementById("myCanvas");
let ctx = cvs.getContext("2d");
let gap = 85;
let score = 0;
let spacePipe;
let highScore = 0;
sessionStorage.setItem('high_score0', highScore);
let bird = new Bird(40, 120);
let ground = new Ground();
let pipeNorths = [new PipeNorth(cvs.width + 50, Math.floor(Math.random() * (-100 + 300) - 300))];
let pipeSouths = [new PipeSouth(cvs.width + 50, pipeNorths[0].y + pipeNorths[0].height + gap)];

function start() {
    clearCanvas();
    bird.drawBird();
    bird.moveDown();
    window.addEventListener("keydown", moveBird);
    window.addEventListener('keydown', musicPlay);

    for (let i = 0; i < pipeNorths.length; i++) {
        drawPipe(i);
        if (checkContact(i) === false) {
            return;
        }
        if (pipeNorths[i].x === bird.x - 40) {
            score++;
            getScore.play();
        }
    }
    ctx.fillStyle = "#090909";
    ctx.font = "24px Dancing Script";
    ctx.fillText("Score : " + score, 20, cvs.height - 50);
    ctx.fillText("High Score : " + sessionStorage['high_score' + (sessionStorage.length - 1)], 140, cvs.height - 50);
    checkHighScore();
    requestAnimationFrame(start);
}


function drawPipe(i) {
    pipeNorths[i].drawPipeNorth();
    pipeSouths[i].drawPipeSouth();
    ground.drawGround();
    pipeNorths[i].moveLeft();
    pipeSouths[i].moveLeft();

    if (score < 10) {
        spacePipe = 150;
    } else {
        spacePipe = 120;
    }

    if (pipeNorths[i].x === spacePipe) {
        let randomY = Math.floor(Math.random() * (-110 + 310) - 310);
        pipeNorths.push(new PipeNorth(cvs.width + 50, randomY));
        pipeSouths.push(new PipeSouth(cvs.width + 50, randomY + 380 + gap));
    }
}

function checkContact(i) {
    if (bird.y <= 0 || bird.y + bird.height >= ground.y ||
        bird.x + bird.width - 3 >= pipeNorths[i].x && bird.x <= pipeNorths[i].x + pipeNorths[i].width - 3 && bird.y - 3 <= pipeNorths[i].y + pipeNorths[i].height ||
        bird.x + bird.width - 3 >= pipeSouths[i].x && bird.x <= pipeSouths[i].x + pipeSouths[i].width - 3 && bird.y + bird.height - 3 >= pipeSouths[i].y) {
        stopGame();
        window.removeEventListener('keydown', moveBird);
        window.removeEventListener('keydown', musicPlay);
        return false;
    }
}

function checkHighScore() {
    for (let j = 0; j < sessionStorage.length; j++) {
        if (sessionStorage['high_score' + (sessionStorage.length - 1)] < score) {
            highScore = score;
            sessionStorage.setItem('high_score' + (j + 1), highScore);
        }
    }
}

function startGame() {
    start();
    document.getElementById('startGame').style.display = "none";
}

function stopGame() {
    document.getElementById('score__title').innerHTML = `${score}`;
    document.getElementById('body__score').style.display = "block";
    document.getElementById('music').pause();
}

function restart() {
    score = 0;
    bird = new Bird(40, 120);
    pipeNorths = [new PipeNorth(cvs.width + 50, Math.floor(Math.random() * (-100 + 300) - 300))];
    pipeSouths = [new PipeSouth(cvs.width + 50, pipeNorths[0].y + pipeNorths[0].height + gap)];
    document.getElementById('body__score').style.display = "none";
    start();
}

function moveBird() {
    bird.moveUp();
    flyBird.play();
}

function clearCanvas() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

function musicPlay() {
    document.getElementById('music').play();
    window.removeEventListener('keydown', musicPlay);
}

let flyBird = new Audio();
let getScore = new Audio();

flyBird.src = "sounds/fly.mp3";
getScore.src = "sounds/score.mp3";