/**
 * Construction
 * Ilianna
 * 
 * Let's build a house step by step
 */

"use strict";

// Variables
let canvasW = 800;
let canvasH = 600;
let grassH = canvasH * 0.8;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

//
function draw() {
  background("lightblue");
  drawGrass(0, 520, canvasW, grassH);
  drawSun(canvasW * 0.9, canvasH * 0.1, 60);
  drawWalls(canvasW * 0.32, canvasH * 0.58, canvasW * 0.35, canvasH * 0.35);
  drawRoof(canvasW * 0.29, canvasH * 0.58, canvasW * 0.495, canvasH * 0.35, canvasW * 0.70, canvasH * 0.58);
}

function drawGrass(x, y, w, h) {
  noStroke();
  fill("forestgreen");
  rect(x, y, w, h);
}

function drawSun(x, y, size) {
  fill("gold");
  noStroke();
  circle(x, y, size);
}

function drawWalls(x, y, w, h) {
    fill("khaki");
    stroke(80);
    rect(x, y, w, h);
}

function drawRoof(x1, y1, x2, y2, x3, y3) {
    fill("brown");
    stroke(80);
    triangle(x1, y1, x2, y2, x3, y3);
}
