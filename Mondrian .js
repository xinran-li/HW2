# HW2
function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(234, 200, 106);
  noStroke();

  // blue square
  fill(17, 45, 104);
  rect(0, 0, 50, 55);
  rect(0, 340, 50, 70);
  rect(160, 100, 170, 240);

  // gray square
  fill(200);
  rect(0, 55, 50, 45);
  rect(0, 160, 50, 50);
  rect(0, 290, 50, 50);
  rect(230, 0, 100, 55);
  rect(100, 340, 60, 60);

  // white square
  fill(255);
  rect(50, 55, 110, 285);
  rect(330, 55, 70, 285);

  
  // red square
  fill(255, 0, 0);
  rect(160, 0, 70, 55);
  rect(270, 340, 60, 60);

  stroke(0);
  strokeWeight(10);
  line(50, 0, 50, 400); 
  line(0, 340, 400, 340);


  strokeWeight(14);
  line(160, 100, 400, 100); 

  strokeWeight(20);
  line(0, 160, 55, 160); 

}
