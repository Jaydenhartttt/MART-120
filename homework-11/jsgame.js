let playerX = 50;
let playerY = 50;
let playerSpeed = 5;

let obstacles = [];

let exitX, exitY, exitSize = 40;

let gameWon = false;

let extraObstacle = null;

function setup() {
  createCanvas(400, 400); 
  
  obstacles.push({x: 200, y: 100, size: 30, color: color(100, 50, 200), xSpeed: 2, ySpeed: 1});
  obstacles.push({x: 400, y: 300, size: 50, color: color(70, 140, 15), xSpeed: -3, ySpeed: 2});
  
  exitX = width - 60;
  exitY = height - 60;
}

function draw() {
  background(0);
  fill(250, 40, 40);
  rect(exitX, exitY, exitSize, exitSize);
  textSize(16);
  fill(0);
  text("EXIT", exitX + 5, exitY + 25);

  fill(255, 255, 255);
  triangle(playerX, playerY - 15, playerX - 15, playerY + 15, playerX + 15, playerY + 15);
  
  movePlayer();
  
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
    
    obs.x += obs.xSpeed;
    obs.y += obs.ySpeed;
    
    if (obs.x > width) obs.x = 0;
    else if (obs.x < 0) obs.x = width;
    if (obs.y > height) obs.y = 0;
    else if (obs.y < 0) obs.y = height;
  }
  
  if (extraObstacle !== null) {
    fill(15, 50, 225);
    rect(extraObstacle.x, extraObstacle.y, extraObstacle.size, extraObstacle.size);
  }
  
  if (playerX > exitX && playerX < exitX + exitSize &&
      playerY > exitY && playerY < exitY + exitSize) {
    gameWon = true;
  }
  
  if (gameWon) {
    fill(500);
    textSize(30);
    textAlign(CENTER);
    text("Congratulations!", width/2, height/2);
    noLoop();
  }
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { 
    playerX -= playerSpeed;
  } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { 
    playerX += playerSpeed;
  }

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    playerY -= playerSpeed;
  } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { 
    playerY += playerSpeed;
  }
  
  if (playerX < 0 || playerX > width) {
    playerX = constrain(playerX, 0, width);
  }
  if (playerY < 0 || playerY > height) {
    playerY = constrain(playerY, 0, height);
  }
}

function mousePressed() {
  if (extraObstacle === null) {
    extraObstacle = {x: mouseX, y: mouseY, size: 40};
  }
}
