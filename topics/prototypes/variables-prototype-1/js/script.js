/**
 * Diglet V2
 * Ilianna Faoro
 *
 * Drawing Diglet from Pokemon, but animated
 */

"use strict";

// Set up our variables

let rock = {
  y: 585,

  size: {
    h: random(45, 50),
    w: random(50, 55),
  },
};

/**
 * Creates a canvas to work on.
 */
function setup() {
  createCanvas(800, 600);
}

/**
 * Draws the body and rocks of the pokemon.
 */
function draw() {
  background("lightblue");

  // Draw the head
  push();
  noStroke();
  fill(161, 133, 109);
  ellipse(400, 300, 200);
  pop();

  // Draw the body
  push();
  noStroke();
  fill(161, 133, 109);
  rect(300, 300, 200, 200);
  pop();

  // Draw the nose
  push();
  noStroke();
  fill(224, 144, 211);
  ellipse(380, 330, 80, 50);
  pop();

  // Draw the eyes
  push();
  noStroke();
  fill(77, 75, 76);
  ellipse(360, 270, 20, 40);
  ellipse(410, 270, 20, 40);
  pop();

  // Finish drawing the eyes
  push();
  noStroke();
  fill(181, 181, 181);
  ellipse(360, 260, 10, 10);
  ellipse(410, 260, 10, 10);
  pop();

  // Draw the rocks
  push();

  // Variables
  let rockY = 585;
  let rockH = random(45, 50);
  let rockH2 = random(45, 50);
  let rockW = random(50, 55);
  let rockW2 = random(50, 55);

  noStroke();
  fill(138, 130, 123);
  ellipse(500, rockY, rockH, rockW2);
  ellipse(480, rockY, rockH2, rockW);
  ellipse(470, rockY, rockH, rockW2);
  ellipse(450, rockY, rockH2, rockW);
  ellipse(440, rockY, rockH, rockW2);
  ellipse(420, rockY, rockH2, rockW);
  ellipse(400, rockY, rockH, rockW2);
  ellipse(390, rockY, rockH2, rockW);
  ellipse(370, rockY, rockH, rockW2);
  ellipse(350, rockY, rockH2, rockW);
  ellipse(340, rockY, rockH, rockW2);
  ellipse(320, rockY, rockH2, rockW);
  ellipse(300, rockY, rockH, rockW2);
  pop();
}
