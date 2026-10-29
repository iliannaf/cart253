/**
 * Balloon Catcher
 * Ilianna
 *
 * Catch balloons using a basket connected to the user's mouse
 */

"use strict";

// variables
let canvasW = 800;
let canvasH = 600;
let balloonX = 200;
let balloonY = 50;
let balloonSpeed = 2;
let basketW = 120;
let score = 0;

// Create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

// Call the functions
function draw() {
  background("lightblue");

  drawBalloon(balloonX, balloonY);
  drawBasket(mouseX, canvasH * 0.8, basketW, 25);
  drawScore();
  moveBalloon();
}

// How is the balloon drawn
function drawBalloon(x, y) {
  fill(212, 75, 66);
  noStroke();
  ellipse(x, y, 35, 45);

  stroke(0);
  line(x, y + 22, x, y + 40);
  noStroke();
  balloonSpeed = constrain(balloonSpeed, 0.5, 30);
}

// How is the basket drawn
function drawBasket(x, y, w, h) {
  x = constrain(x, w / 2, canvasW - w / 2);
  basketW = constrain(basketW, 40, 120);
  fill(150, 90, 40);
  rect(x - w / 2, y, w, h);
}

// How does the balloon move
function moveBalloon() {
  balloonY = balloonY + balloonSpeed;

  // Reset balloon if it reaches the bottom
  if (balloonY > canvasH) {
    score = score - 1;
    balloonSpeed = balloonSpeed - 0.5;
    basketW = basketW * 1.05;
    balloonY = 0;
    balloonX = random(20, canvasW - 20);
  }

  // Check if the balloon touches the basket
  if (
    balloonY + 22.5 >= canvasH * 0.8 &&
    balloonY - 22.5 <= canvasH * 0.8 + 25 &&
    balloonX > mouseX - 40 &&
    balloonX < mouseX + 40
  ) {
    score = score + 1;
    balloonSpeed = balloonSpeed + 0.5;
    basketW = basketW * 0.95;
    balloonY = 0;
    balloonX = random(20, canvasW - 20);
  }
}

// Track the score on top
function drawScore() {
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 25);
}
