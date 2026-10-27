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

// create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

//
function draw() {
  background("lightblue");

  // Grass
  drawGrass(0, canvasH * 0.7, canvasW, canvasH * 0.3);

  // Sun
  drawSun(canvasW * 0.85, canvasH * 0.15, 30);
}

function drawGrass(x, y, w, h) {
  noStroke();
  fill(47, 158, 57);
  rect(x, y, w, h);
}

function drawSun(x, y, radius) {
  fill("yellow");
  noStroke();
  circle(x, y, radius * 2);
}
