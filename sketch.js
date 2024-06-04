let gridSize = 20; // Size of each grid cell
let cols, rows;
let hearts = [];

function setup() {
  createCanvas(600, 600);
  cols = width / gridSize;
  rows = height / gridSize;
  
  // Initialize the hearts grid
  for (let i = 0; i < cols; i++) {
    hearts[i] = [];
    for (let j = 0; j < rows; j++) {
      hearts[i][j] = color(255); // Default white color
    }
  }
}

function draw() {
  background(255);
  drawHearts();
  drawMouseHeart();
}

function drawHearts() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(hearts[i][j]);
      drawHeart(i * gridSize + gridSize / 2, j * gridSize + gridSize / 2, gridSize / 2);
    }
  }
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y + size / 4);
  bezierVertex(x, y, x - size / 2, y - size / 2, x - size / 2, y + size / 4);
  bezierVertex(x - size / 2, y + size / 2, x, y + size, x, y + size);
  bezierVertex(x, y + size, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
  bezierVertex(x + size / 2, y - size / 2, x, y, x, y + size / 4);
  endShape(CLOSE);
}

function drawMouseHeart() {
  let mouseCol = floor(mouseX / gridSize);
  let mouseRow = floor(mouseY / gridSize);
  
  if (mouseCol >= 0 && mouseCol < cols && mouseRow >= 0 && mouseRow < rows) {
    fill(200); // Light gray color
    drawHeart(mouseCol * gridSize + gridSize / 2, mouseRow * gridSize + gridSize / 2, gridSize / 2);
  }
}

function mousePressed() {
  let col = floor(mouseX / gridSize);
  let row = floor(mouseY / gridSize);
  
  if (col >= 0 && col < cols && row >= 0 && row < rows) {
    hearts[col][row] = color(random(255), random(255), random(255)); // Random color
  }
}