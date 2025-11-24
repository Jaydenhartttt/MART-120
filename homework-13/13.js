let playerX = 50;
let playerY = 50;
let playerSpeed = 5;

let obstacles = [];
let exitX, exitY, exitSize = 40;

let gameWon = false;

let extraObstacle = null;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 60),
      color: color(random(255), random(255), random(255)),
      xSpeed: random(-3, 3),
      ySpeed: random(-3, 3)
    });
  }

  exitX = width - 60;
  exitY = height - 60;
}

function draw() {
  background(0);

  noFill();
  stroke(255, 0, 0);
  strokeWeight(8);
  rect(0, 0, width, height);

  noStroke();
  fill(250, 40, 40);
  rect(exitX, exitY, exitSize, exitSize);
  fill(0);
  textSize(16);
  text("EXIT", exitX + 5, exitY + 25);

  noStroke();
  fill(255);
  triangle(
    playerX, playerY - 15,
    playerX - 15, playerY + 15,
    playerX + 15, playerY + 15
  );

  movePlayer();
  
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);

    obs.x += obs.xSpeed;
    obs.y += obs.ySpeed;

    if (obs.x > width) obs.x = 0;
    if (obs.x < 0) obs.x = width;
    if (obs.y > height) obs.y = 0;
    if (obs.y < 0) obs.y = height;
  }

  if (extraObstacle !== null) {
    fill(15, 50, 225);
    rect(extraObstacle.x, extraObstacle.y, extraObstacle.size, extraObstacle.size);
  }

  if (
    playerX > exitX && playerX < exitX + exitSize &&
    playerY > exitY && playerY < exitY + exitSize
  ) {
    gameWon = true;
  }

  if (gameWon) {
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text("Congratulations!", width / 2, height / 2);
    noLoop();
  }
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    playerX -= playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    playerX += playerSpeed;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    playerY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    playerY += playerSpeed;
  }

  playerX = constrain(playerX, 0, width);
  playerY = constrain(playerY, 0, height);
}

function mousePressed() {
  if (extraObstacle === null) {
    extraObstacle = { x: mouseX, y: mouseY, size: 40 };
  }
}
