/**
 * Let's Build a House!
 * Ilianna
 * 
 * Let's build a house step by step using mouse clicks
 */

"use strict";

// Variables
let canvasW = 800;
let canvasH = 600;
let grassH = canvasH * 0.8;
let progress = 0;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

// Call all the functions
function draw() {
  background("lightblue");
  drawGrass(0, 520, canvasW, grassH);
  drawSun(canvasW * 0.9, canvasH * 0.1, 60);
  drawWalls(canvasW * 0.32, canvasH * 0.58, canvasW * 0.35, canvasH * 0.35);
  drawRoof(canvasW * 0.29, canvasH * 0.58, canvasW * 0.495, canvasH * 0.35, canvasW * 0.70, canvasH * 0.58);
  drawDoor(canvasW * 0.464, canvasH * 0.814, 50, 70, canvasW * 0.515, canvasH * 0.88, 6);
  drawLwindow();
  drawRwindow();
  drawChimney(470, 240, 30, 80);
  instructions();
}

// Draw the grass
function drawGrass(x, y, w, h) {
  noStroke();
  fill("forestgreen");
  rect(x, y, w, h);
}

// Draw the sun
function drawSun(x, y, size) {
  fill("gold");
  noStroke();
  circle(x, y, size);
}

// Draw the base of the house
function drawWalls(x, y, w, h) {
    if (progress >= 1) {
    fill("khaki");
    stroke(80);
    rect(x, y, w, h);
    }
}

// Draw the roof
function drawRoof(x1, y1, x2, y2, x3, y3) {
    if (progress >= 2) {
    fill("sienna");
    stroke(80);
    triangle(x1, y1, x2, y2, x3, y3);
    }
}

// Draw the door
function drawDoor(x, y, w, h, x2, y2, s) {
    if (progress >= 3) {
    fill("saddlebrown");
    rect(x, y, w, h);
    fill("gold");
    circle(x2, y2, s);
    }
}

// Draw the windows
function drawLwindow() {
    if (progress >= 4) {
    fill("paleturquoise");
    stroke(80);
    rect(290, 390, 55, 55);
    line(317.5, 390, 317.5, 445);
    line(290, 417.5, 345, 417.5);
    }
}

function drawRwindow() {
    if (progress >= 5) {
    fill("paleturquoise");
    stroke(80);
    rect(445, 390, 55, 55);
    line(472.5, 390, 472.5, 445);
    line(445, 417.5, 500, 417.5);
    }
}

// Draw the chimney
function drawChimney(x, y, w, h) {
    if (progress >= 6) {
    fill("saddlebrown");
    stroke(80);
    rect(x, y, w, h);
    }
}

// Add instructions on top
function instructions() {
  noStroke();
  fill(30);
  textSize(18);
  textAlign(CENTER);
  text("Click the Screen to Build your House! (" +
       min(progress, 6) + "/6)", canvasW / 2, 30);
  if (progress >= 6) {
    text("Your House is Complete!", canvasW / 2, 60);
  }
}

// Add a new piece each time the mouse is pressed
function mousePressed() {
  if (progress < 6) {
    progress++;
  } else {
    progress = 0;
  }
}