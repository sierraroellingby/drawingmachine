// let img;
//
// function preload() {
//   img = loadImage('umbrella-clipart-transparent-18_78.jpg');
// }
let hongkong;
// let shake;

function preload(){

  hongkong4 = loadImage('hongkongcrop4.png')
  hongkong1 = loadImage('hongkongcrop1.png')
  hongkong2 = loadImage('hongkongcrop2.png')
  hongkong3 = loadImage('hongkongcrop3.png')
  prochina1 = loadImage('prochina1.png')
  prochina2 = loadImage('prochina2.png')
  prochina3 = loadImage('prochina3.png')
  prochina11 = loadImage('prochina11.png')
}
const particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
// shake = new Shakey();
}

function draw() {
  background(10);
  imageMode(CENTER);
  image(hongkong4, 300, 100);
  image(hongkong1, 30, 400);
  image(hongkong2, 100, 500);
  image(hongkong3, 600, 400);
  image(prochina1, 1000, 100);
  image(prochina2, 800, 50);
  image(prochina11, 950, 250);
  image(prochina3, 1300, 500);
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
// class Shakey {
//   constructor() {
//     this.x = random(200);
//     this.y = random(200);
//     this.diameter = random(10, 30);
//     this.speed = 1;
//   }
//
//   move() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   }
//
//   show() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// }
