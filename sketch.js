
 let img;
 function preload(){
img loadImage("Desktop/umbrella/umbrella-clipart-transparent-18");
}
  const particles = [];

function setup() {
  createCanvas(600, 400);
  image(img, width * 0.3, height * 0.3)
}

function draw() {
  background(10);

  for (let i = 0; i < 5; i++) {
    // change last two parameters to change speed
    let p = new Particle(mouseX, mouseY, map(mouseX - pmouseX, 0, 10, -.5, .5), map(mouseY - pmouseY, 0, 10, -.5, .5));
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
  //insert umbrella images

} //drawloop end

class Particle {

  constructor(_x, _y, _vx, _vy) {
    this.x = _x;
    this.y = _y;
    this.vx = _vx + random(-3, 2);
    this.vy = _vy + random(-3, 2);
    this.alpha = 155;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    // add perlin noise here
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }

  show() {
    noStroke();
    //stroke(255);
    fill(60, 170, this.alpha);
    ellipse(this.x, this.y, 36);
    fill(152, 251, this.alpha);
    ellipse(this.x-30, this.y - 15, 15);
  }

}
