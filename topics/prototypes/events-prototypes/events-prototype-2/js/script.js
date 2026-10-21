/**
 * Title of Project
 * Ilianna
 *
 * Creating a movable character
 */

"use strict";

// Create variables
let canvasW = 500;
let canvasH = 500;
let charX = canvasW / 2;
let charY = canvasH / 2;
let charS = 30;

// Make a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

// Make a circle that moves
function draw() {
  background("lightgray");

  stroke("black");
  ellipse(charX, charY, charS);

  // Use arrow keys to move
  if (keyIsDown(LEFT_ARROW)) charX -= 3;
  if (keyIsDown(RIGHT_ARROW)) charX += 3;
  if (keyIsDown(UP_ARROW)) charY -= 3;
  if (keyIsDown(DOWN_ARROW)) charY += 3;

  // Constrain the player in the canvas
  charX = constrain(charX, charS / 2, canvasW - charS / 2);
  charY = constrain(charY, 40 + charS / 2, canvasH - charS / 2);
}
