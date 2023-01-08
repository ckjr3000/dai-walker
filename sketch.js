let pos;
let pallette = [];

function setup() {
  createCanvas(2000, 1000);
  background(0);
  pos = createVector(width / 2, height / 2);
}

function draw() {
  fill(255);
  noStroke();
  rect(pos.x, pos.y, 5, 5);

  pos.x += random(-5, 5);
  pos.y += random(-5, 5);

  if ((pos.x > width) | (pos.x < 0) | (pos.y > height) | (pos.y < 0)) {
    pos = createVector(width / 2, height / 2);
  }
}
