/**
 * Final Project
 * Ilianna Faoro
 *
 * 5 mini games that the user can choose from
 * Game 1: Starry Sky - Creating constellations
 * Game 2: Air Hockey - A game of air hockey
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
const puck = {
  x: canvasW / 2,
  y: canvasH / 2,
  size: 55,
  fill: "black",
  speedX: 0,
  speedY: 0,
  friction: 0.98,
};

const game2player1 = {
  x: canvasW * 0.75,
  y: canvasH * 0.5,
  size: 75,
  fill: "red",
};

const game2player2 = {
  x: canvasW * 0.25,
  y: canvasH * 0.5,
  size: 75,
  fill: "blue",
};

const game2target = {
  x: canvasW * 0.999,
  y: canvasH * 0.5,
  size: 250,
  fill: "maroon",
};

const game2target2 = {
  x: canvasW * 0.001,
  y: canvasH * 0.5,
  size: 250,
  fill: "navy",
};

let blueUp = false;
let blueDown = false;
let blueLeft = false;
let blueRight = false;

let redUp = false;
let redDown = false;
let redLeft = false;
let redRight = false;

let game2score1;
let game2score2;

// Game 3
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let currentPlayer = "X";
let game3winner = "";
let game3gameOver = false;

let boardSize = 300;
let cellSize = boardSize / 3;
let boardX = canvasW / 2 - boardSize / 2;
let boardY = canvasH / 2 - boardSize / 2;

// SET UP
function setup() {
  createCanvas(canvasW, canvasH);
  // Game 1
  createStars();
  // Game 2
  game2score1 = 0;
  game2score2 = 0;
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
    "Click on stars to create constellations. Press N to start a new constellation. Press H to go back to the home menu / restart the game.",
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
  background("silver");

  // Draw the rink
  push();
  stroke("black");
  strokeWeight(2);
  line(canvasW / 2, 0, canvasW / 2, canvasH);

  noFill();
  stroke("black");
  ellipse(canvasW / 2, canvasH / 2, 300);
  pop();

  game2instructions();

  if (game2score1 < 5 && game2score2 < 5) {
    // BLUE PLAYER
    if (blueUp) game2player2.y -= 5;
    if (blueDown) game2player2.y += 5;
    if (blueLeft) game2player2.x -= 5;
    if (blueRight) game2player2.x += 5;

    // RED PLAYER
    if (redUp) game2player1.y -= 5;
    if (redDown) game2player1.y += 5;
    if (redLeft) game2player1.x -= 5;
    if (redRight) game2player1.x += 5;
  }

  playerHitsPuck(game2player1);
  playerHitsPuck(game2player2);
  movePuck();
  drawGame2Player1();
  drawGame2Player2();
  constrainPlayersGame2()
  drawPuck();
  drawTarget();
  drawTarget2();
  game2checkGoal();
  game2checkGoal2();
  game2win();
}

// Game 3

function game3Page() {
  background("lightyellow");

  // Instructions
  textAlign(CENTER, CENTER);
  fill("black");
  textSize(20);

  if (game3winner !== "") {
    text(game3winner + " wins!", canvasW / 2, canvasH * 0.1);
  } else if (game3gameOver) {
    text("Tied", canvasW / 2, canvasH * 0.1);
  } else {
    text("Player " + currentPlayer + "'s turn", canvasW / 2, canvasH * 0.1);
  }

  // Draw grid
  stroke("black");
  strokeWeight(5);

  for (let i = 1; i < 3; i++) {
    line(
      boardX + i * cellSize,
      boardY,
      boardX + i * cellSize,
      boardY + boardSize
    );

    line(
      boardX,
      boardY + i * cellSize,
      boardX + boardSize,
      boardY + i * cellSize
    );
  }

  // Draw Xs and Os
  textSize(75);
  textAlign(CENTER, CENTER);
  noStroke();

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "X") {
        fill("blue");
      } else {
        fill("red");
      }

      text(
        board[row][col],
        boardX + col * cellSize + cellSize / 2,
        boardY + row * cellSize + cellSize / 2
      );
    }
  }

  // Instructions at bottom
  fill("black");
  textSize(20);
  text("Click a square to play | SPACE to restart | H for home", canvasW / 2, canvasH * 0.9);
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
    resetGame2();
    game2score1 = 0;
    game2score2 = 0;
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

  // Restart Game 2
  if (key === " " && currentPage === "game2") {
    if (game2score1 >= 5 || game2score2 >= 5) {
      game2score1 = 0;
      game2score2 = 0;

      resetGame2();
    }
  }
}

// GAME 2
function game2instructions() {
  fill("black");
  textSize(18);
  text("Team 1:", canvasW * 0.055, canvasH * 0.05);
  text(game2score1, canvasW * 0.098, canvasH * 0.05);
  text("WASD to move", canvasW * 0.07, canvasH * 0.088);
  text("Team 2:", canvasW * 0.92, canvasH * 0.05);
  text(game2score2, canvasW * 0.96, canvasH * 0.05);
  text("IJKL to move", canvasW * 0.931, canvasH * 0.088);
}

function drawGame2Player1() {
  push();
  noStroke();
  fill(game2player1.fill);
  ellipse(game2player1.x, game2player1.y, game2player1.size);
  pop();
}

function drawGame2Player2() {
  push();
  noStroke();
  fill(game2player2.fill);
  ellipse(game2player2.x, game2player2.y, game2player2.size);
  pop();
}

function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function movePuck() {
  // Move the puck
  puck.x += puck.speedX;
  puck.y += puck.speedY;

  // Slow the puck down
  puck.speedX *= puck.friction;
  puck.speedY *= puck.friction;

  // Stop very small movements
  if (abs(puck.speedX) < 0.1) puck.speedX = 0;
  if (abs(puck.speedY) < 0.1) puck.speedY = 0;

  // Keep puck inside the canvas
  if (puck.x < puck.size / 2) {
    puck.x = puck.size / 2;
    puck.speedX *= -1;
  }

  if (puck.x > canvasW - puck.size / 2) {
    puck.x = canvasW - puck.size / 2;
    puck.speedX *= -1;
  }

  if (puck.y < puck.size / 2 + 30) {
    puck.y = puck.size / 2 + 30;
    puck.speedY *= -1;
  }

  if (puck.y > canvasH - puck.size / 2) {
    puck.y = canvasH - puck.size / 2;
    puck.speedY *= -1;
  }
}

function playerHitsPuck(player) {
  let d = dist(player.x, player.y, puck.x, puck.y);

  if (d < player.size / 2 + puck.size / 2) {

    // Find direction from player to puck
    let angle = atan2(puck.y - player.y, puck.x - player.x);

    // Push puck away from player
    puck.speedX = cos(angle) * 8;
    puck.speedY = sin(angle) * 8;

    // Move puck outside the player
    let minDistance = player.size / 2 + puck.size / 2;

    puck.x = player.x + cos(angle) * minDistance;
    puck.y = player.y + sin(angle) * minDistance;
  }
}

function drawTarget() {
  push();
  noStroke();
  fill(game2target.fill);
  ellipse(game2target.x, game2target.y, game2target.size);
  pop();
}

function drawTarget2() {
  push();
  noStroke();
  fill(game2target2.fill);
  ellipse(game2target2.x, game2target2.y, game2target2.size);
  pop();
}

function game2checkGoal() {
  const d = dist(
    puck.x,
    puck.y,
    game2target.x,
    game2target.y
  );

  const overlap = d < game2target.size / 2 + puck.size / 2;

  if (overlap) {
    game2score1++;

    resetGame2();
  }
}

function game2checkGoal2() {
  const d = dist(
    puck.x,
    puck.y,
    game2target2.x,
    game2target2.y
  );

  const overlap = d < game2target2.size / 2 + puck.size / 2;

  if (overlap) {
    game2score2++;

    resetGame2();
  }
}


function game2win() {
  if (game2score1 >= 5 || game2score2 >= 5) {
    // Dark background
    fill(0, 0, 0, 180);
    rect(0, 0, canvasW, canvasH);

    // Winner message
    textAlign(CENTER, CENTER);
    textSize(45);

    if (game2score1 >= 5) {
      fill("blue");
      text("Team 1 Wins!", canvasW / 2, canvasH / 2 - 30);
    } else {
      fill("red");
      text("Team 2 Wins!", canvasW / 2, canvasH / 2 - 30);
    }

    fill("white");
    textSize(22);
    text("Press SPACE to play again", canvasW / 2, canvasH / 2 + 35);
  }
}


function constrainPlayersGame2() {
  // Keep red player inside the canvas
  game2player1.x = constrain(
    game2player1.x,
    game2player1.size / 2,
    canvasW - game2player1.size / 2
  );

  game2player1.y = constrain(
    game2player1.y,
    30 + game2player1.size / 2,
    canvasH - game2player1.size / 2
  );

  // Keep blue player inside the canvas
  game2player2.x = constrain(
    game2player2.x,
    game2player2.size / 2,
    canvasW - game2player2.size / 2
  );

  game2player2.y = constrain(
    game2player2.y,
    30 + game2player2.size / 2,
    canvasH - game2player2.size / 2
  );
}

function resetGame2() {
  // Reset puck
  puck.x = canvasW / 2;
  puck.y = canvasH / 2;
  puck.speedX = 0;
  puck.speedY = 0;

  // Reset players
  game2player1.x = canvasW * 0.75;
  game2player1.y = canvasH * 0.5;

  game2player2.x = canvasW * 0.25;
  game2player2.y = canvasH * 0.5;
}

function keyDownHandler(event) {
  if (event.key === "w") blueUp = true;
  if (event.key === "s") blueDown = true;
  if (event.key === "a") blueLeft = true;
  if (event.key === "d") blueRight = true;

  if (event.key === "i") redUp = true;
  if (event.key === "k") redDown = true;
  if (event.key === "j") redLeft = true;
  if (event.key === "l") redRight = true;
}

function keyUpHandler(event) {
  if (event.key === "w") blueUp = false;
  if (event.key === "s") blueDown = false;
  if (event.key === "a") blueLeft = false;
  if (event.key === "d") blueRight = false;

  if (event.key === "i") redUp = false;
  if (event.key === "k") redDown = false;
  if (event.key === "j") redLeft = false;
  if (event.key === "l") redRight = false;
}

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);