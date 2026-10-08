/**
 * Title of Project
 * Ilianna
 *
 * Description
 */

"use strict";

// Create variable
let r = 0;
let g = 0;
let b = 0;
let canvasW = 600;
let canvasH = 600;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);
}

// draw a square
function draw() {
  background(200);
  fill(r, g, b);
  square(canvasW / 2, canvasH / 2, 150);
}

// use different events to change and mix colours
function mouseClicked() {
  if (r === 0) {
    r = 255;
  } else {
    r = 0;
  }
}

function keyPressed() {
  if (g === 0) {
    g = 255;
  } else {
    g = 0;
  }
}

function mouseWheel() {
  if (b === 0) {
    b = 255;
  } else {
    b = 0;
  }
}
