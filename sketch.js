function setup() {
  createCanvas(400, 400);
}

function draw() {
colorMode(HSB);
  background(255, 204, 100)
  strokeWeight(7)
  line(mouseX, mouseY, pmouseX, pmouseY);

if (mouseIsPressed){
stroke(map(mousex, 0, 600, 0, 255, true))


};


}
