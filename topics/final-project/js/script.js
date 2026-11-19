/**
 * Final Project
 * Ilianna Faoro
 *
 * 5 mini games that the user can choose from
 * Game 1: Starry Sky - Creating constellations
 *
 */

"use strict";

// VARIABLES

// Main Page
let canvasW = 1200;
let canvasH = 700;
let currentPage = "menu";

const menuButton = {
  size: 110,
  hoverSize: 125,
  y: canvasH * 0.8,
  x1: canvasW * 0.1,
  x2: canvasW * 0.3,
  x3: canvasW * 0.5,
  x4: canvasW * 0.7,
  x5: canvasW * 0.9,
};

// Game 1
let numStars = 130;
let stars = [];
let constellations = [];
let currentConstellation = [];
let lastStar = undefined;

// Game 2

// SET UP
function setup() {
  createCanvas(canvasW, canvasH);
  createStars();
}

// functions for each game page

// MENU

function menuPage() {
  background("lightblue");

  // write instructions
  textAlign(CENTER, CENTER);
  textSize(35);
  fill(0);
  text("Title", canvasW / 2, canvasH * 0.15);
  textSize(25);
  text("Pick a game", canvasW / 2, canvasH * 0.3);

  // make buttons to start games
  fill(0);
  circle(menuButton.x1, menuButton.y, menuButton.size);
  circle(menuButton.x2, menuButton.y, menuButton.size);
  circle(menuButton.x3, menuButton.y, menuButton.size);
  circle(menuButton.x4, menuButton.y, menuButton.size);
  circle(menuButton.x5, menuButton.y, menuButton.size);
}

// GAME 1
function game1Page() {
  background(34, 39, 92);

  // instructions
  push();
  fill("white");
  rect(0, 0, canvasW, 30);
  fill("black");
  textSize(16);
  textAlign(CENTER);
  text(
    "Click on Stars to Create Constellations. Press N to Start a New Constellation. Press H to Go Back to the Home Menu / Restart the Game.",
    canvasW / 2,
    18,
  );
  pop();

  // draw lines for star connections
  push();
  stroke(150, 180, 255);
  strokeWeight(1);

  for (let c = 0; c < constellations.length; c++) {
    for (let i = 0; i < constellations[c].length; i++) {
      let a = constellations[c][i][0];
      let b = constellations[c][i][1];

      line(stars[a][0], stars[a][1], stars[b][0], stars[b][1]);
    }
  }
  pop();

  push();
  stroke(150, 180, 255);
  strokeWeight(1);

  for (let i = 0; i < currentConstellation.length; i++) {
    let a = currentConstellation[i][0];
    let b = currentConstellation[i][1];

    line(stars[a][0], stars[a][1], stars[b][0], stars[b][1]);
  }
  pop();

  // draw stars
  noStroke();
  fill(255);

  for (let i = 0; i < stars.length; i++) {
    circle(stars[i][0], stars[i][1], 4);
  }
}

function createStars() {
  stars = [];

  for (let i = 0; i < numStars; i++) {
    stars[i] = [random(canvasW), random(30, canvasH)];
  }
}

function startGame1() {
  constellations = [];
  currentConstellation = [];
  lastStar = undefined;
  createStars();
  currentPage = "game1";
}

// GAME 2

function game2Page() {
  background("red");
  text("Game 2", canvasW / 2, canvasH / 2);
}

// Game 3
function game3Page() {
  background("yellow");
  text("Game 3", canvasW / 2, canvasH / 2);
}

// Game 4
function game4Page() {
  background("purple");
  text("Game 4", canvasW / 2, canvasH / 2);
}

// Game 5
function game5Page() {
  background("orange");
  text("Game 5", canvasW / 2, canvasH / 2);
}

// determine which page will be on screen
function draw() {
  if (currentPage === "menu") {
    menuPage();
  } else if (currentPage === "game1") {
    game1Page();
  } else if (currentPage === "game2") {
    game2Page();
  } else if (currentPage === "game3") {
    game3Page();
  } else if (currentPage === "game4") {
    game4Page();
  } else if (currentPage === "game5") {
    game5Page();
  }
}

// click buttons to start games
function mousePressed() {
  if (currentPage === "menu") {
    if (
      dist(mouseX, mouseY, menuButton.x1, menuButton.y) <
      menuButton.size / 2
    ) {
      startGame1();
    } else if (
      dist(mouseX, mouseY, menuButton.x2, menuButton.y) <
      menuButton.size / 2
    ) {
      currentPage = "game2";
    } else if (
      dist(mouseX, mouseY, menuButton.x3, menuButton.y) <
      menuButton.size / 2
    ) {
      currentPage = "game3";
    } else if (
      dist(mouseX, mouseY, menuButton.x4, menuButton.y) <
      menuButton.size / 2
    ) {
      currentPage = "game4";
    } else if (
      dist(mouseX, mouseY, menuButton.x5, menuButton.y) <
      menuButton.size / 2
    ) {
      currentPage = "game5";
    }
  }

  // GAME 1 constellations using the mouse
  else if (currentPage === "game1") {
    for (let i = 0; i < stars.length; i++) {
      let d = dist(mouseX, mouseY, stars[i][0], stars[i][1]);

      if (d < 7) {
        if (lastStar !== i) {
          if (lastStar !== undefined) {
            currentConstellation.push([lastStar, i]);
          }

          lastStar = i;
        }

        break;
      }
    }
  }
}

// press keys to do different things
function keyPressed() {
  // Return home with H
  if (key === "h" || key === "H") {
    currentPage = "menu";
  }

  // Start a new constellation with N
  if (key === "n" || key === "N") {
    if (currentPage === "game1") {
      // Stop the current constellation
      if (currentConstellation.length > 0) {
        constellations.push(currentConstellation);
      }

      // Start a new constellation
      currentConstellation = [];
      lastStar = undefined;
    }
  }
}
