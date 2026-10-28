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
  drawDoor(canvasW * 0.464, canvasH * 0.814, 50, 70, canvasW * 0.515, canvasH * 0.88, 6);
  drawLwindow();
  drawRwindow();
  drawChimney(470, 240, 30, 80);
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
    fill("sienna");
    stroke(80);
    triangle(x1, y1, x2, y2, x3, y3);
}

function drawDoor(x, y, w, h, x2, y2, s) {
    fill("saddlebrown");
    rect(x, y, w, h);
    fill("gold");
    circle(x2, y2, s);
}

function drawLwindow() {
    fill("paleturquoise");
    stroke(80);
    rect(290, 390, 55, 55);
    line(317.5, 390, 317.5, 445);
    line(290, 417.5, 345, 417.5);
}

function drawRwindow() {
    fill("paleturquoise");
    stroke(80);
    rect(445, 390, 55, 55);
    line(472.5, 390, 472.5, 445);
    line(445, 417.5, 500, 417.5);
}

function drawChimney(x, y, w, h) {
    fill("saddlebrown");
    stroke(80);
    rect(x, y, w, h);
}