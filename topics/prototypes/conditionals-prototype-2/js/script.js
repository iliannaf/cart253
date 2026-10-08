/**
 * Diglet V3
 * Ilianna
 *
 * Diglet again, but now he can go up AND down.
 */

"use strict";

// Create the variables
let head = {
  y: 750,
  final: 365,
  speed: 0.8,
  direction: -1,
};

let body = {
  y: 750,
  final: 365,
  speed: 0.8,
  direction: -1,
};

let nose = {
  y: 785,
  final: 400,
  speed: 0.8,
  direction: -1,
};

let eyes = {
  y: 725,
  final: 340,
  speed: 0.8,
  direction: -1,
};

let eyes2 = {
  y: 735,
  final: 330,
  speed: 0.8,
  direction: -1,
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
  ellipse(400, head.y, 200);

  head.y += head.speed * head.direction;

  if (head.y <= head.final || head.y >= 750) {
    head.direction *= -1;
  }
  pop();

  // Draw the body
  push();
  noStroke();
  fill(161, 133, 109);
  rect(300, body.y, 200, 200);

  body.y += body.speed * body.direction;

  if (body.y <= body.final || body.y >= 750) {
    body.direction *= -1;
  }
  pop();

  // Draw the nose
  push();
  noStroke();
  fill(224, 144, 211);
  ellipse(380, nose.y, 80, 50);

  nose.y += nose.speed * nose.direction;

  if (nose.y <= nose.final || nose.y >= 785) {
    nose.direction *= -1;
  }
  pop();

  // Draw the eyes
  push();
  noStroke();
  fill(77, 75, 76);
  ellipse(360, eyes.y, 20, 40);
  ellipse(410, eyes.y, 20, 40);

  eyes.y += eyes.speed * eyes.direction;

  if (eyes.y <= eyes.final) {
    eyes.y = eyes.final;
    eyes.direction = 1;
  }

  if (eyes.y >= 725) {
    eyes.y = 725;
    eyes.direction = -1;
  }
  pop();

  // Finish drawing the eyes
  push();
  noStroke();
  fill(181, 181, 181);
  ellipse(360, eyes.y - 5, 10, 10);
  ellipse(410, eyes.y - 5, 10, 10);

  pop();

  // Draw the rocks
  push();

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
