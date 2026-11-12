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
let buttonY = canvasH * 0.8;
let buttonSize = 110;
let buttonHoverSize = 125;
let button1x = canvasW * 0.1;
let button2x = canvasW * 0.3;
let button3x = canvasW * 0.5;
let button4x = canvasW * 0.7;
let button5x = canvasW * 0.9;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

// Make it blue
function draw() {
  background("lightblue");

  // Title and sub heading
  textAlign(CENTER, CENTER);
  textSize(35);
  fill(0);
  text("Title", canvasW / 2, canvasH * 0.15);
  textSize(25);
  text("Pick a game", canvasW / 2, canvasH * 0.3);

  // Add buttons for games

  // Button 1
  fill(0);
  circle(button1x, buttonY, buttonSize);

  // Button 2
  fill(0);
  circle(button2x, buttonY, buttonSize);

  // Button 3
  fill(0);
  circle(button3x, buttonY, buttonSize);

  // Button 4
  fill(0);
  circle(button4x, buttonY, buttonSize);

  // Button 5
  fill(0);
  circle(button5x, buttonY, buttonSize);
}

function startGame1() {
  background("green");
}

function startGame2() {
  background("green");
}

function startGame3() {
  background("green");
}

function startGame4() {
  background("green");
}

function startGame5() {
  background("green");
}

// click buttons to start games
function mousePressed() {
  // Button 1
  if (dist(mouseX, mouseY, button1x, buttonY) < buttonSize / 2) {
    startGame1();
  }

  // Button 2
  if (dist(mouseX, mouseY, button2x, buttonY) < buttonSize / 2) {
    startGame2();
  }

  // Button 3
  if (dist(mouseX, mouseY, button3x, buttonY) < buttonSize / 2) {
    startGame3();
  }

  // Button 4
  if (dist(mouseX, mouseY, button4x, buttonY) < buttonSize / 2) {
    startGame4();
  }

  // Button 5
  if (dist(mouseX, mouseY, button5x, buttonY) < buttonSize / 2) {
    startGame5();
  }
}
