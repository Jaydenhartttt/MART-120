function setup() {
  createCanvas(400, 400);
  background(173,216,230);
}

function draw() {
  rect(185, 220, 30)
  ellipse(200, 180, 100);
  rect(150, 240, 100)
  triangle(200, 340, 250, 340, 250, 400)
  triangle(200, 340, 151, 340, 150, 400)
  line(180, 200, 220, 200)
  strokeWeight(5);
  point(180, 170)
  point(220, 170)
  line(280, 340, 250, 240)
  line(120, 340, 150, 240)
  text("Jayden Hart", 5, 15)
}
