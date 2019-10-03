function setup() {
  createCanvas(400, 400);
}

function draw() {
colorMode(HSB);
  background(230, 150, 80)
  strokeWeight(7)



if (mouseIsPressed){

line(mouseX, mouseY, pmouseX, pmouseY);
stroke(map(mouseX, 400, 600, 200, 255, true));
};

}
function keyTyped(){
  if (key === 's'){
  saveCanvas('fileName', 'png')
}
return false
}
