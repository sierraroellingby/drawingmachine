function setup() {
  createCanvas(400, 400);
    background(245, 225, 174)
    strokeWeight(7)
}

function draw() {


if (mouseIsPressed){


stroke(map(mouseX, 400, 100, true));
line(mouseX, mouseY, pmouseX, pmouseY);
};

}
function keyTyped(){
  if (key === 's'){
  saveCanvas('fileName', 'png')
}
return false

beginShape();
  fill(255, 255, 0);
curveVertex(width * 0.2, height * 0.3);
curveVertex(width * 0.65, height * 0.23);
curveVertex(width * 0.8, height * 0.7);
curveVertex(width*0.65, height* 0.6);
curveVertex(width * 0.5, height * 0.5);
curveVertex(width * 0.3, height * 0.4);
curveVertex(width * 0.8, height * 0.7);
endShape();

fill(255, 255, 0);
rect(width * 0.5, height * 0.5, 20, 120);
}
