//=== Инициализация

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = 800;
const height = 600;

let movedBallX = 2;
let movedBallY = 2;

canvas.width = width;
canvas.height = height;

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(0, 0, width, height);
ctx.stroke();

// Размеры ракетки
const racketWidth = 50;
const racketHeight = 5;

// Размеры мячика
const radiusBall = 6;

// Изначальная позиция шарика
let xBall = canvas.width / 2;
let yBall = canvas.height - 50;

// Изначальная позиция ракетки
const xRocket = canvas.width / 2 - racketWidth / 2;
const yRocket = canvas.height - 50 + radiusBall;

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

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();

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

  // yBall -= movedBallY;
  xBall -= movedBallX;
  console.log(movedBallY);
}

//=== Работа

setInterval(run, 10);

//=== Вызовы функций
racket();
