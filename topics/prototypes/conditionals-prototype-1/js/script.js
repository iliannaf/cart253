/**
 * Hockey Game
 * Ilianna
 *
 * A hockey Game
 * Made using some code from the conditionals challenge.
 */

"use strict";

const rink = {
  width: 900,
  height: 500,
};

const puck = {
  x: rink.width / 2,
  y: rink.height / 2,
  size: 60,
  fill: "black",
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "red",
};

const target = {
  x: rink.width * 0.98,
  y: rink.height * 0.5,
  size: 125,
  fill: "blue",
};

const target2 = {
  x: rink.width * 0.02,
  y: rink.height * 0.5,
  size: 125,
  fill: "blue",
};

let score1;
let score2;

/**
 * Create the canvas
 */
function setup() {
  score1 = 0;
  score2 = 0;
  createCanvas(rink.width, rink.height);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  line(rink.width / 2, 0, rink.width / 2, rink.height);
  textSize(18);
  text("Team 1:", rink.width * 0.04, rink.height * 0.05);
  text(score1, rink.width * 0.12, rink.height * 0.05);
  text("Team 2:", rink.width * 0.85, rink.height * 0.05);
  text(score2, rink.width * 0.93, rink.height * 0.05);

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
    movePuck();
  } else {
    puck.fill = "black";
  }

  //Check Goal
  checkGoal();
  checkGoal2();

  // Draw the user and puck and target
  drawUser();
  drawPuck();
  drawTarget();
  drawTarget2();
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

function drawTarget2() {
  push();
  noStroke();
  fill(target2.fill);
  ellipse(target2.x, target2.y, target2.size);
  pop();
}

//Part 2 - Move the puck
function movePuck() {
  //Do Left Right Movement
  if (user.x >= puck.x) {
    puck.x -= 2;
  } else if (user.x <= puck.x) {
    puck.x += 2;
  }
  // Do Up Down Movement
  if (user.y >= puck.y) {
    puck.y -= 2;
  } else if (user.y <= puck.y) {
    puck.y += 2;
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
    puck.x = rink.width / 2;
    puck.y = rink.height / 2;
    score1++;
  } else {
    target.fill = "blue";
  }
}

function checkGoal2() {
  // Calculate distance between circles' centres
  const d = dist(puck.x, puck.y, target2.x, target2.y);
  // Check if that distance is smaller than their two radii,
  // because if it is, they are overlapping
  const overlap = d < target2.size / 2 + puck.size / 2;
  // Set fill based on whether they overlap
  if (overlap) {
    puck.x = rink.width / 2;
    puck.y = rink.height / 2;
    score2++;
  } else {
    target2.fill = "blue";
  }
}
