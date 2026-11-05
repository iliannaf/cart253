/**
 * Starry Sky
 * Ilianna
 * 
 * Make a starry night sky that changes with every page refresh
 */

"use strict";

// variables
let canvasW = 800;
let canvasH = 600;
let numStars = 130;

// create an array for stars
let stars = [];

// create a canvas to work on
function setup() {
createCanvas(canvasW, canvasH);

  // create stars
  for (let i = 0; i < numStars; i++) {
    stars[i] = [random(width), random(height)];
  }
}

// draw the stars
function draw() {
background(34, 39, 92);

  // draw stars
  fill(255);
  for (let i = 0; i < stars.length; i++) {
    circle(stars[i][0], stars[i][1], 4);
  }
}