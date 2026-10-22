/**
 * Title of Project
 * Ilianna
 * 
 * Description
 */

"use strict";

// Creating Variables
let canvasW = 700;
let canvasH = 500;
let canvasColour;

// Make a colourful canvas to work on
function setup() {
createCanvas(canvasW, canvasH);
canvasColour = color(240, 220, 255);
}

// Give the canvas the colour variable
function draw() {
background(canvasColour);
}

// Change canvas colour when the mouse moves
function mouseMoved() {
  canvasColour = color(
    random(200, 255),
    random(200, 255),
    random(200, 255)
  );
}