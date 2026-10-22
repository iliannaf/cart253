/**
 * Eat the Food
 * Ilianna
 *
 * A moveable circle that needs to eat more circles. Get to 15 to win.
 */

"use strict";

// Create variables
let canvasW = 500;
let canvasH = 500;
let charX = canvasW / 2;
let charY = canvasH / 2;
let charS = 30;
let score = 0;
let targetScore = 15;
let collectibles = [];
let win = false;

// Make a canvas to work on and food for the player
function setup() {
  createCanvas(canvasW, canvasH);

  for (let i = 0; i < 5; i++) {
    spawnFood();
  }
}

// Create food at random positions
function spawnFood() {
  let food = {
    x: random(15, canvasW - 15),
    y: random(50, canvasH - 15),
    size: 12,
  };

  collectibles.push(food);
}

// Make a circle that moves, check if the player eats or wins
function draw() {
  background("lightgray");

  // Draw the score counter at the top
  fill("white");
  noStroke();
  rect(0, 0, canvasW, 40);
  fill("black");
  textSize(18);
  textAlign(LEFT, CENTER);
  text("Score: " + score + " / " + targetScore, 10, 20);
  text("Use Arrow Keys to Move and Eat Food", 175, 20);

  // Stop the game when the player wins
  if (win) {
    fill("green");
    textAlign(CENTER, CENTER);
    textSize(32);
    text("YOU WIN!", canvasW / 2, canvasH / 2);
    return;
  }

  // Use arrow keys to move
  if (keyIsDown(LEFT_ARROW)) charX -= 3;
  if (keyIsDown(RIGHT_ARROW)) charX += 3;
  if (keyIsDown(UP_ARROW)) charY -= 3;
  if (keyIsDown(DOWN_ARROW)) charY += 3;

  // Constrain the player in the canvas
  charX = constrain(charX, charS / 2, canvasW - charS / 2);
  charY = constrain(charY, 40 + charS / 2, canvasH - charS / 2);

  // Draw the food
  for (let i = collectibles.length - 1; i >= 0; i--) {
    let c = collectibles[i];

    fill("green");
    stroke("black");
    ellipse(c.x, c.y, c.size);

    // Check if the player eats food
    let d = dist(charX, charY, c.x, c.y);

    if (d < charS / 2 + c.size / 2) {
      score++;

      // Make the player grow
      charS += 5;

      // Remove the collected food
      collectibles.splice(i, 1);

      // Spawn new food
      if (score < targetScore) {
        spawnFood();
      }

      // Check if the player wins
      if (score >= targetScore) {
        win = true;
      }
    }
  }

  stroke("black");
  fill("blue");
  ellipse(charX, charY, charS);
}
