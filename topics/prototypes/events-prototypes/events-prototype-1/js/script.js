/**
 * Mixing Colours
 * Ilianna
 *
 * Mix colours to create new ones
 */

"use strict";

// Create variable
let rC = 0;
let gC = 0;
let bC = 0;
let canvasW = 600;
let canvasH = 600;
let circleH = 520;
let circleSize = 80;
let rCx = 75;
let gCx = 225;
let bCx = 375;
let blackCx = 525;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);
}

// draw a square
function draw() {
  background(200);
  fill(rC, gC, bC);
  square(canvasW / 2, canvasH / 2.5, 300);

  // Red circle
  fill(255, 0, 0);
  circle(rCx, circleH, circleSize);

  // Green circle
  fill(0, 255, 0);
  circle(gCx, circleH, circleSize);

  // Blue circle
  fill(0, 0, 255);
  circle(bCx, circleH, circleSize);

  // Black circle
  fill(0);
  circle(blackCx, circleH, circleSize);
}

// use functions to add, change and mix colours
function rAdd() {
  if (rC === 0) {
    rC = 255;
  } else {
    rC = 0;
  }
}

function gAdd() {
  if (gC === 0) {
    gC = 255;
  } else {
    gC = 0;
  }
}

function bAdd() {
  if (bC === 0) {
    bC = 255;
  } else {
    bC = 0;
  }
}

function bReset() {
  rC = 0;
  gC = 0;
  bC = 0;
}

function keyPressed() {
  if (key === 'r') {
    rAdd();
  }

  if (key === 'g') {
    gAdd();
  }

  if (key === 'b') {
    bAdd();
  }

  if (key === 't') {
    bReset();
  }
}

function mousePressed() {
  // Red circle
  if (dist(mouseX, mouseY, rCx, circleH) < (circleSize / 2)) {
    rAdd();
  }

  // Green circle
  if (dist(mouseX, mouseY, gCx, circleH) < (circleSize / 2)) {
    gAdd();
  }

  // Blue circle
  if (dist(mouseX, mouseY, bCx, circleH) < (circleSize / 2)) {
    bAdd();
  }

  // Black circle
  if (dist(mouseX, mouseY, blackCx, circleH) < (circleSize / 2)) {
    bReset();
  }
}