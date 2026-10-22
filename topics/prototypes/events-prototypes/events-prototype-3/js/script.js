/**
 * Colourful Canvas
 * Ilianna
 * 
 * A colourful canvas with a changing background and random coloured circles
 */

"use strict";

// Creating Variables
let canvasW = 700;
let canvasH = 500;
let canvasColour;
let circles = [];

// Make a colourful canvas to work on
function setup() {
createCanvas(canvasW, canvasH);
canvasColour = color(240, 220, 255);
}

// Give the canvas the colour variable
function draw() {
background(canvasColour);

  // Drawing circles for when mouse is clicked
  for (let c of circles) {
    fill(c.color);
    noStroke();
    circle(c.x, c.y, c.size);
  }

  fill("white");
  noStroke();
  rect(0, 0, canvasW, 40);
  fill("black");
  textSize(18);
  textAlign(LEFT, CENTER);
  text("Click Mouse to Draw Circles. Press Space to Clear the Board.", 90, 20);
}

// Change canvas colour when the mouse moves
function mouseMoved() {
  canvasColour = color(
    random(200, 255),
    random(200, 255),
    random(200, 255)
  );
}

// Add a random sized and coloured circle when the mouse is clicked
function mousePressed() {
  let newCircle = {
    x: mouseX,
    y: mouseY,
    size: random(30, 100),
    color: color(random(255), random(255), random(255))
  };

  circles.push(newCircle);
}

// Clear the board when space key is pressed
function keyPressed() {
  if (key === ' ') {
    circles = [];
  }
}