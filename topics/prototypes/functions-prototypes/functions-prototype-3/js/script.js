/**
 * Construction
 * Ilianna
 * 
 * Let's build a house step by step
 */

"use strict";

// Create a canvas to work on
function setup() {
  createCanvas(800, 600);
}


//
function draw() {
  background("lightblue");
  drawGrass(0, 520, 800, 80);
  drawSun(700, 60, 60);
}

function drawGrass(x, y, w, h) {
  fill(100, 180, 100);
  rect(x, y, w, h);
}

function drawSun(x, y, size) {
  fill(255, 220, 80);
  noStroke();
  circle(x, y, size);
}