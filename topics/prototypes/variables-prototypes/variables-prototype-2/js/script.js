/**
 * Bouncy Ball
 * Ilianna
 * 
 * Create a bouncy ball that changes colours every time it hits a wall.
 */

"use strict";

// Create the variables
let ball = {
  x: 300,
  y: 300,
  xSpeed: 4.5,
  ySpeed: 3,
  size: 100,
  r: 106,
  g: 217,
  b: 125
};

// Create a canvas
function setup() {
  createCanvas(windowWidth * 0.7, windowHeight * 0.7);
}

// Make the ball change colours when this is called
function changeColour() {
    ball.r = random(0, 255);
    ball.g = random(0, 255);
    ball.b = random(0, 255);
}

// Draw a ball that changes colours once it hits a wall.
function draw() {
  background(224, 224, 224);

  // Makes the ball move
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  // Makes the ball change directions once it hits a wall
  if (ball.x <= ball.size / 2 || ball.x >= width - ball.size / 2) {
    ball.xSpeed *= -1;
    changeColour();
  }

  if (ball.y <= ball.size / 2 || ball.y >= height - ball.size / 2) {
    ball.ySpeed *= -1;
    changeColour();
  }

  fill(ball.r, ball.g, ball.b);
  ellipse(ball.x, ball.y, ball.size);
}