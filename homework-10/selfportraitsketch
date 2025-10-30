var x=80
var x2=320
var y=300
var direction = "right";
let size=20
let change = 5
let x3 = 50;
let y3 = 50;
let x3Speed = 3;
let y3Speed = 3;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(173,216,230);
  rect(185, 220, 30)
  ellipse(200, 180, 100);
  rect(150, 240, 100)
  triangle(200, 340, 250, 340, 250, 400)
  triangle(200, 340, 151, 340, 150, 400)
  line(180, 200, 220, 200)
  strokeWeight(5);
  point(180, 170)
  point(220, 170)
  strokeWeight(2);
  line(280, 340, 250, 240)
  line(120, 340, 150, 240)
  textSize(size);
  text("Jayden Hart", 5, 55)
  size += change;
  if (size > 40 || size < 10) {
    change *= -1;
  }
  ellipse(x, y, 50);
  frameRate (15)
  ellipse(x, 120, 50)
  ellipse(x2, 120, 50)
  rect(300, y, 50)
  rect(50, y, 50)
  if (direction=="right") {
    y=x+1; 
  }
  if (direction=="left") {
    y=x-1;
  }
  if (y>=320) {
    direction = "left";
  } 
  if (y<=80) {
    direction = "right";
  } 
  
  
  
  if (direction=="right") {
    x=x+1; 
  }
  if (direction=="left") {
    x=x-1;
  }
  if (x>=320) {
    direction = "left";
  } 
  if (x<=80) {
    direction = "right";
  } 
  
  
  if (direction=="left") {
    x2=x2+1; 
  }
  if (direction=="right") {
    x2=x2-1;
  }
  if (x2>=320) {
    direction = "right";
  } 
  if (x2<=80) {
    direction = "left";
  } 
}
