/**
 * Hockey Game
 * Ilianna
 *
 * A hockey Game
 * Made using some code from the conditionals challenge.
 */

"use strict";

const puck = {
  x: 450,
  y: 250,
  size: 80,
  fill: "black",
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "red",
};

const target = {
  x: 850,
  y: 250,
  size: 125,
  fill: "blue",
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(900, 500);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  //Hide the Cursor
  noCursor();

  // Calculate distance between circles' centres
  const d = dist(user.x, user.y, puck.x, puck.y);
  // Check if that distance is smaller than their two radii,
  // because if it is, they are overlapping
  const overlap = d < user.size / 2 + puck.size / 2;
  // Set fill based on whether they overlap
  if (overlap) {
    puck.fill = "yellow";
    movePuck();
  } else {
    puck.fill = "black";
  }

  //Check Goal
  checkGoal();

  // Draw the user and puck and target
  drawUser();
  drawPuck();
  drawTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

/**
 * Displays the Target circle
 */
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}

//Part 2 - Move the puck
function movePuck() {
  //Do Left Right Movement
  if (user.x >= puck.x) {
    puck.x -= 1;
  } else if (user.x <= puck.x) {
    puck.x += 1;
  }
  // Do Up Down Movement
  if (user.y >= puck.y) {
    puck.y -= 1;
  } else if (user.y <= puck.y) {
    puck.y += 1;
  }
}

// Check for Goal

function checkGoal() {
  // Calculate distance between circles' centres
  const d = dist(puck.x, puck.y, target.x, target.y);
  // Check if that distance is smaller than their two radii,
  // because if it is, they are overlapping
  const overlap = d < target.size / 2 + puck.size / 2;
  // Set fill based on whether they overlap
  if (overlap) {
    target.fill = "green";
  } else {
    target.fill = "blue";
  }
}
