
let noiseOffset = 0.01
let strokeValue = 5

function setup() {
  createCanvas(400, 400);
    background(220)

}

function draw() {
strokeWeight(strokeValue);

noiseOffset += 0.1;
strokeValue = noise(noiseOffset) * 50;


if (mouseIsPressed){

stroke(220,255,0)
stroke(map(mouseX, 400, 100, true));
line(mouseX, mouseY, pmouseX, pmouseY);
};

stroke(80);
strokeWeight(7)
push();
fill(255, 255, 0);
rotate(30);
rect(width * 0.5, height * 0.5, 20, 120);
pop();

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


}
function keyTyped(){
  if (key === 's'){
  saveCanvas('fileName', 'png')
}
return false

}
