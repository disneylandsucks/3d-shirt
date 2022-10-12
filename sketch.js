let mod
let shirt, shirt2
let img
let theta = 0


function preload() {
  mod = loadModel ('Finished_Voldemort_3dthing.obj')
  img = loadImage ('SCREENPRINT SHIRT.png')

}
function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES)
  shirt = new Shirt(img,mod,theta)
  shirt2 = new Shirt(img,mod,theta)
}

function draw() {
  background(220);
  shirt.update(theta)
  shirt.render()
  theta++
  
  // scale (25.0)
  // translate(0,height/60)
  // rotateX(180)
  // rotateY(theta)
  // // rotateZ(theta/4)
  // noStroke()
  // texture(img);
  // model(shirt)
  // theta+=1
}
