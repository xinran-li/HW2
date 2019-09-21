# HW2
function setup() {
  createCanvas(400, 400);
}

var ballY = 125;
var ballSpeed = 1;

var ballY2 = 225;
var ballSpeed2 = 1;

function draw() {
  background(220);
  noStroke();
  
  fill(255);
  rect(125, 100, 50, 150, 100);
  rect(225, 100, 50, 150, 100);
  
  fill(255, 0, 0, 100)
  ellipse(150, ballY, 50,);
  fill(0, 225, 0, 100)
  ellipse(250, ballY2, 50);
  
  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  
  if (ballY >= 225) {
    ballSpeed = -1;
    }

  if (ballY <= 125) {
    ballSpeed = 1;
 }
  
    if (ballY2 >= 225) {
    ballSpeed2 = -1;
 }

  if (ballY2 <= 125) {
    ballSpeed2 = 1;
 }
  
}
