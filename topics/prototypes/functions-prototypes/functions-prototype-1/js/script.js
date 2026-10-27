/**
 * Planting Flowers
 * Ilianna
 *
 * Drawing flowers using functions
 */

"use strict";

// create variables
let canvasW = 800;
let canvasH = 600;
let flowerX;
let flowerY;
let flowerSize;
let flowerColour;

// create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
  background("lightblue");

  instructions();

  // Draw grass
  drawGrass(0, canvasH * 0.7, canvasW, canvasH * 0.3);

  // Draw sun
  drawSun(canvasW * 0.85, canvasH * 0.2, 30);
}

function instructions() {
  noStroke();
  fill("white");
  rect(0, 0, canvasW, canvasH * 0.06);
  fill("black");
  textSize(16);
  text("Click on the Grass to Plant Flowers!", canvasW * 0.01, canvasH * 0.04)
}

// How is the grass drawn
function drawGrass(x, y, w, h) {
  noStroke();
  fill(47, 158, 57);
  rect(x, y, w, h);
}

// How is the sun drawn
function drawSun(x, y, radius) {
  fill("yellow");
  noStroke();
  circle(x, y, radius * 2);
}

// How is the flower drawn
function drawFlower(x, y, size, petalColour) {
  // Stem
  stroke("green");
  strokeWeight(4);
  line(x, y, x, y + size * 2);

  // Petals
  noStroke();
  fill(petalColour);
  // Top
  circle(x, y - size * 0.5, size * 0.65);
  // Bottom
  circle(x, y + size * 0.5, size * 0.65);
  // Left
  circle(x - size * 0.5, y, size * 0.65);
  // Right
  circle(x + size * 0.5, y, size * 0.65);
  // Top-Left
  circle(x - size * 0.35, y - size * 0.35, size * 0.65);
  // Top-Right
  circle(x + size * 0.35, y - size * 0.35, size * 0.65);
  // Bottom-right
  circle(x + size * 0.35, y + size * 0.35, size * 0.65);
  // Bottom-left
  circle(x - size * 0.35, y + size * 0.35, size * 0.65);

  // Centre
  fill("orange");
  circle(x, y, size * 0.5);
}

// Cycle through colours for flower petals
function getRandomColour() {
  let colourNumber = floor(random(6));

  if (colourNumber == 0) {
    return "pink";
  } else if (colourNumber == 1) {
    return "purple";
  } else if (colourNumber == 2) {
    return "salmon";
  } else if (colourNumber == 3) {
    return "palegoldenrod";
  } else if (colourNumber == 4) {
    return "violet";
  } else {
    return "white";
  }
}

// Random size for flowers
function getRandomSize() {
  return random(25, 45);
}

// Draw a flower when the mouse is pressed but only on the grass
function mousePressed() {
  if (mouseY > (canvasH * 0.7) && mouseY < canvasH) {
    flowerX = mouseX;
    flowerY = mouseY;
    flowerSize = getRandomSize();
    flowerColour = getRandomColour();

    drawFlower(flowerX, flowerY, flowerSize, flowerColour);
  }
}
