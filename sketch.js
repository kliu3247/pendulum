let circle 
let angle = 0
const waveHeight = 100
let canvasHeight = 400
let canvasWidth = 400
let clicked = false

function setup() {
  createCanvas(400, 400);
  circle = createCircle([3, 225, 0], canvasWidth/2, canvasHeight/2)
}

function draw() {
  //background(220);
  updateCircle(circle, angle)
  drawCircle(circle)
  angle+=0.02
  
  if(clicked == true){
    updateCircle(circle2, angle)
    drawCircle(circle2)
    angle+=0.02
  }
}

const updateCircle = (circle, angle) => {
  circle.x = angle * 20
  circle.y = sin(angle) * waveHeight + canvasHeight/2
}

const createCircle = (colorVal, xVal , yVal) =>{
  return{
    x: xVal,
    y: yVal,
    size: 10,
    color: colorVal,
  }
}

const drawCircle = (circle) => {
  fill(circle.color)
  ellipse(circle.x, circle.y, circle.size)
}

window.onclick = myFunction;

function myFunction (){
  circle2 = createCircle([255, 0, 188], 10, 10)
  clicked = !clicked;
}