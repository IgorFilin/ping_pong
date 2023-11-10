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
let movedBallX = 1.5;
let movedBallY = 1.5;

// Изначальная позиция шарика
let xBall = canvas.width / 2;
let yBall = canvas.height - 50;

// Движение ракетки
let movedRocket = 3;

// Изначальная позиция ракетки
let xRocket = canvas.width / 2 - racketWidth / 2;
const yRocket = canvas.height - 50 + radiusBall;

// Движения ракетки
let leftMovedRocket = false;
let rightMovedRocket = false;

// Кубики
let squareArray = [];
let xPositionSquare = 0;
let yPositionSquare = 1;
let countSquared = 220;
let widthSquare = 20;
let heightSquare = 20;
let paddingSquare = 6;

//=== Работа

for (let i = 0; i <= countSquared; i++) {
  if (!i) {
    xPositionSquare = 0 + paddingSquare;
  } else {
    xPositionSquare += widthSquare + paddingSquare;
  }
  if (xPositionSquare + widthSquare >= width) {
    yPositionSquare += heightSquare + paddingSquare;
    xPositionSquare = 0 + paddingSquare;
  }
  const coord = {
    x: xPositionSquare,
    y: yPositionSquare + paddingSquare,
  };
  squareArray.push(coord);
}

let id;
id = setInterval(run, 1);

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

function coob(x, y, w, h) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x + paddingSquare, y + paddingSquare, w, h);
  ctx.closePath();
}
let test;
function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball();
  racket();

  for (let i = 0; i < squareArray.length; i++) {
    coob(squareArray[i].x, squareArray[i].y, widthSquare, heightSquare);
  }

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
    const random_boolean = Math.ceil(Math.random() * 10) < 5;
    movedBallY = Math.abs(movedBallY);
    movedBallX = random_boolean ? -movedBallX : movedBallX;
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
      id = setInterval(run, 1);
    }, 2000);
  }

  for (let i = 0; i < squareArray.length; i++) {
    if (
      xBall + radiusBall > squareArray[i].x &&
      xBall - radiusBall < squareArray[i].x + widthSquare &&
      yBall + radiusBall > squareArray[i].y &&
      yBall - radiusBall < squareArray[i].y + heightSquare
    ) {
      squareArray.splice(i, 1);
      movedBallY = -movedBallY;
      movedBallX = -movedBallX;
    }
  }

  yBall -= movedBallY;
  xBall -= movedBallX;
}
console.log(squareArray);
//=== Обработчик событий

document.addEventListener("keydown", keyDownFn);
document.addEventListener("keyup", keyUpFn);
