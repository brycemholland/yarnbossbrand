var flowers = [];
var gridSize = 30;
var colNum;
var rowNum; 
var colorModeRange = 100;
var colorChoiceRange = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  colorMode(RGB, colorModeRange);
  noStroke();
  noFill();
  rectMode(CENTER);

  colNum = Math.floor(width/gridSize);
  rowNum = Math.floor(height/gridSize);
  console.log(colNum);
  console.log(rowNum);

  // create flowers
  var flowerId = 0;
  for (var i=0; i<colNum; i++){
    for (var j=0; j<rowNum; j++){
      flowers.push(new flower(flowerId, i, j));
      flowerId++;
    }
  }

  // identify neighbors
  console.log(flowers.length);
  for (var i=0; i<flowers.length; i++){
    flowers[i].findNeighbors();
    if (flowers[i].independance == 10){
      console.log(flowers[i]);
    }
  }
}