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

// Make a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}
//
function draw() {
  background("lightgray");
  stroke("black");
  ellipse(charX, charY, 30);
}
