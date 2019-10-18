let img;

function preload() {
  img = loadImage('umbrella-clipart-transparent-18_78.jpg');
}
const particles = [];

function setup() {
  createCanvas(1000, 800);
  image(img, width * 0.3, height * 0.3);
}

function draw() {
  background(img);

  for (let i = 0; i < 5; i++) {
    // change last two parameters to change speed
    let p = new Particle(mouseX, mouseY, map(mouseX - pmouseX, 0, 10, -.5, .5), map(mouseY - pmouseY, 0, 10, .5, 1));
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }

}
//insert umbrella images

 //drawloop end

class Particle {

  constructor(_x, _y, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.vx = _vx + random(-1.5, 1);
    this.vy = _vy + random(0, 1);
    this.alpha = 155;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    // add perlin noise here
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(60, 170, 0, this.alpha);
    ellipse(this.x, this.y, 36);
    fill(152, 251, 0, this.alpha);
    ellipse(this.x - 30, this.y - 15, 15);
  }

}
