const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = 800;
const height = 600;

canvas.width = width;
canvas.height = height;

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.strokeRect(0, 0, width, height);
ctx.stroke();

function racket(x = 0, y = 0, width = 50, height = 5) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, width, height);
  ctx.closePat;
}

function ball(x = 0, y = 0, radius = 5) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

racket(200, 200);
ball(100, 100);
