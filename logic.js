//=== Инициализация

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = 800;
const height = 600;

canvas.width = width;
canvas.height = height;

// Размеры ракетки
const racketWidth = 70;
const racketHeight = 5;

// Размеры мячика
const radiusBall = 6;

// Движение шарика
let movedBallX = 3;
let movedBallY = 3;

// Изначальная позиция шарика
let xBall = canvas.width / 2;
let yBall = canvas.height - 50;

// Движение ракетки
let movedRocket = 7;

// Изначальная позиция ракетки
let xRocket = canvas.width / 2 - racketWidth / 2;
const yRocket = canvas.height - 50 + radiusBall;

// Движения ракетки
let leftMovedRocket = false;
let rightMovedRocket = false;

//=== Работа

let id;
id = setInterval(run, 10);

//=== Функции
function racket(
  x = xRocket,
  y = yRocket,
  width = racketWidth,
  height = racketHeight
) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, width, height);
  ctx.closePat;
}

function ball(x = xBall, y = yBall, radius = radiusBall) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function keyDownFn(event) {
  if (event.key === "ArrowRight") {
    rightMovedRocket = true;
  }
  if (event.key === "ArrowLeft") {
    leftMovedRocket = true;
  }
}

function keyUpFn(event) {
  if (event.key === "ArrowRight") {
    rightMovedRocket = false;
  }
  if (event.key === "ArrowLeft") {
    leftMovedRocket = false;
  }
}

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();
  racket();

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, width, height);
  ctx.stroke();

  if (yBall <= 0 + radiusBall) {
    movedBallY = -movedBallY;
  }

  if (yBall >= height - radiusBall) {
    movedBallY = Math.abs(movedBallY);
  }

  if (xBall <= 0 + radiusBall) {
    movedBallX = -movedBallX;
  }

  if (xBall >= width - radiusBall) {
    movedBallX = Math.abs(movedBallX);
  }

  if (leftMovedRocket) {
    xRocket -= movedRocket;
  }

  if (rightMovedRocket) {
    xRocket += movedRocket;
  }

  if (
    xBall >= xRocket &&
    xBall <= xRocket + racketWidth &&
    yBall === yRocket - radiusBall
  ) {
    let random_boolean = Math.ceil(Math.random() * 10) < 5;
    if (random_boolean) {
      movedBallX = Math.abs(movedBallX);
      movedBallY = Math.abs(movedBallY);
    } else {
      movedBallX = -movedBallX;
      movedBallY = Math.abs(movedBallY);
    }
  }

  if (yBall === height - radiusBall - 5) {
    clearInterval(id);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "48px Monserat";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", width / 2, height / 2);
    setTimeout(() => {
      xBall = canvas.width / 2;
      yBall = canvas.height - 50;
      xRocket = canvas.width / 2 - racketWidth / 2;
      id = setInterval(run, 10);
    }, 2000);
  }

  yBall -= movedBallY;
  xBall -= movedBallX;
}

//=== Обработчик событий

document.addEventListener("keydown", keyDownFn);
document.addEventListener("keyup", keyUpFn);
