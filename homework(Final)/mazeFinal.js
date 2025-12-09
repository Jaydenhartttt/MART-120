let playerX = 20;
let playerY = 20;
let playerSize = 20;
let speed = 3;

let hasKey = false;
let keyX = 362;
let keyY = 120;
let keySize = 15;

let unlockIndex = 8;

let goalX = 355;
let goalY = 355;
let goalSize = 30;

let walls = [
  {x: 0, y: 0, w: 400, h: 10},
  {x: 0, y: 0, w: 10, h: 400},
  {x: 0, y: 390, w: 400, h: 10},
  {x: 390, y: 0, w: 10, h: 400},

  {x: 0, y: 50, w: 100, h: 10},
  {x: 250, y: 50, w: 50, h: 10},
  {x: 300, y: 100, w: 50, h: 10},
  {x: 350, y: 150, w: 50, h: 10},
  {x: 300, y: 250, w: 50, h: 10}, 
  {x: 150, y: 150, w: 50, h: 10},
  {x: 100, y: 240, w: 60, h: 10},
  {x: 50, y: 200, w: 50, h: 10},
  {x: 150, y: 200, w: 50, h: 10},
  {x: 50, y: 290, w: 50, h: 10},
  {x: 50, y: 50, w: 10, h: 100},
  {x: 290, y: 50, w: 10, h: 50},
  {x: 350, y: 10, w: 10, h: 50},
  {x: 200, y: 10, w: 10, h: 50},
  {x: 150, y: 50, w: 10, h: 100},
  {x: 50, y: 250, w: 10, h: 100},
  {x: 100, y: 340, w: 200, h: 10},
  {x: 340, y: 100, w: 10, h: 60},
  {x: 340, y: 250, w: 10, h: 100},
  {x: 150, y: 100, w: 150, h: 10},
  {x: 250, y: 150, w: 50, h: 10},
  {x: 300, y: 200, w: 40, h: 10},
  {x: 350, y: 340, w: 40, h: 10},
  {x: 100, y: 100, w: 10, h: 200},
  {x: 290, y: 200, w: 10, h: 100},
  {x: 240, y: 200, w: 10, h: 100},
  {x: 150, y: 300, w: 10, h: 40},
  {x: 150, y: 200, w: 10, h: 40},
  {x: 190, y: 150, w: 10, h: 100},
  {x: 200, y: 350, w: 10, h: 40},
  {x: 150, y: 290, w: 150, h: 10},
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);

  drawGoal();
  drawPlayer();
  drawKey();
  drawMaze();
  movePlayer();
  checkKey();
  checkWin();
}

function drawPlayer() {
  fill(0, 200, 255);
  rect(playerX, playerY, playerSize, playerSize);
}

function drawGoal() {
  fill(0, 255, 100);
  rect(goalX, goalY, goalSize, goalSize);
}

function drawKey() {
  if (!hasKey) {
    fill(400, 400, 400);
    rect(keyX, keyY, keySize, keySize);
  }
}

function drawMaze() {
  for (let i = 0; i < walls.length; i++) {
    if (i === unlockIndex && !hasKey) {
      fill(255); 
    } else {
      fill(355, 20, 250);
    }
    let w = walls[i];
    rect(w.x, w.y, w.w, w.h);
  }
}

function movePlayer() {
  let newX = playerX;
  let newY = playerY;

  if (keyIsDown(LEFT_ARROW)) newX -= speed;
  if (keyIsDown(RIGHT_ARROW)) newX += speed;
  if (keyIsDown(UP_ARROW)) newY -= speed;
  if (keyIsDown(DOWN_ARROW)) newY += speed;

  if (!collides(newX, playerY)) playerX = newX;
  if (!collides(playerX, newY)) playerY = newY;
}

function collides(x, y) {
  for (let w of walls) {
    if (x < w.x + w.w &&
        x + playerSize > w.x &&
        y < w.y + w.h &&
        y + playerSize > w.y) {
      return true;
    }
  }
  return false;
}

function checkKey() {
  if (!hasKey &&
      playerX < keyX + keySize &&
      playerX + playerSize > keyX &&
      playerY < keyY + keySize &&
      playerY + playerSize > keyY) {
    hasKey = true;
    walls.splice(unlockIndex, 1);
  }
}

function checkWin() {
  if (playerX + playerSize > goalX &&
      playerX < goalX + goalSize &&
      playerY + playerSize > goalY &&
      playerY < goalY + goalSize) {

    noLoop();
    fill(255);
    textSize(32);
    text("You Win!", 130, 200);
  }
}
