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

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
  rectMode(CENTER);
}

// draw a square
function draw() {
  background(200);
  fill(rC, gC, bC);
  square(canvasW / 2, canvasH / 2, 220);

  // Red circle
  fill(255, 0, 0);
  circle(150, 520, 80);

  // Green circle
  fill(0, 255, 0);
  circle(300, 520, 80);

  // Blue circle
  fill(0, 0, 255);
  circle(450, 520, 80);
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
}

function mousePressed() {
  // Red circle
  if (dist(mouseX, mouseY, 150, 520) < 35) {
    rAdd();
  }

  // Green circle
  if (dist(mouseX, mouseY, 300, 520) < 35) {
    gAdd();
  }

  // Blue circle
  if (dist(mouseX, mouseY, 450, 520) < 35) {
    bAdd();
  }
}