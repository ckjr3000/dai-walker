let pos, track, amp;

function preload() {
  track = loadSound("./placeholder.mp3");
}

function setup() {
  let canvas = createCanvas(900, 900);
  background(0);

  pos = createVector(width / 2, height / 2);

  canvas.mouseClicked(togglePlay);
  amp = new p5.Amplitude();
}

function draw() {
  let level = amp.getLevel();

  let color = map(level, 0, 0.2, 50, 255);
  let size = map(level, 0, 0.2, 5, 50);

  fill(color);
  noStroke();
  rect(pos.x, pos.y, size, size);

  pos.x += random(-5, 5);
  pos.y += random(-5, 5);

  if ((pos.x > width) | (pos.x < 0) | (pos.y > height) | (pos.y < 0)) {
    pos = createVector(width / 2, height / 2);
  }
}

function togglePlay() {
  if (track.isPlaying()) {
    track.pause();
  } else {
    track.loop();
    amp = new p5.Amplitude();
    amp.setInput(track);
  }
}
