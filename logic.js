//=== Инициализация

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = 800;
const height = 600;

canvas.width = width;
canvas.height = height;

// Размеры ракетки
const racketWidth = 50;
const racketHeight = 5;

// Размеры мячика
const radiusBall = 6;

// Движение шарика
let movedBallX = 2;
let movedBallY = 10;

// Изначальная позиция шарика
let xBall = canvas.width / 2;
let yBall = canvas.height - 50;

// Движение ракетки
let movedRocket = 20;

// Изначальная позиция ракетки
let xRocket = canvas.width / 2 - racketWidth / 2;
const yRocket = canvas.height - 50 + radiusBall;

// Движения ракетки
let leftMovedRocket = false;
let rightMovedRocket = false;

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(0, 0, width, height);
ctx.stroke();

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

  yBall -= movedBallY;
  // xBall -= movedBallX;
}

//=== Работа

setInterval(run, 10);

//=== Обработчик событий

document.addEventListener("keydown", keyDownFn);
document.addEventListener("keyup", keyUpFn);
