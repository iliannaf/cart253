/**
 * Final Project
 * Ilianna Faoro
 *
 * 5 mini games that the user can choose from
 *
 */

"use strict";

// VARIABLES

// Canvas
let canvasW = 1200;
let canvasH = 700;

// Buttons
let buttonH = canvasH * 0.8;
let buttonSize = 110;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

// Make it blue
function draw() {
  background("lightblue");

  // Add buttons for games
  fill(0);
  circle(canvasW * 0.1, buttonH, buttonSize);

  fill(0);
  circle(canvasW * 0.3, buttonH, buttonSize);

  fill(0);
  circle(canvasW * 0.5, buttonH, buttonSize);

  fill(0);
  circle(canvasW * 0.7, buttonH, buttonSize);

  fill(0);
  circle(canvasW * 0.9, buttonH, buttonSize);
}
