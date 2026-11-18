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

// Menu
let currentPage = "menu";

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

// functions for each game page
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
  circle(button1x, buttonY, buttonSize);
  circle(button2x, buttonY, buttonSize);
  circle(button3x, buttonY, buttonSize);
  circle(button4x, buttonY, buttonSize);
  circle(button5x, buttonY, buttonSize);
}

function game1Page() {
  background("green");
  text("Game 1", canvasW / 2, canvasH / 2);
}

function game2Page() {
  background("red");
  text("Game 2", canvasW / 2, canvasH / 2);
}

function game3Page() {
  background("yellow");
  text("Game 3", canvasW / 2, canvasH / 2);
}

function game4Page() {
  background("purple");
  text("Game 4", canvasW / 2, canvasH / 2);
}

function game5Page() {
  background("orange");
  text("Game 5", canvasW / 2, canvasH / 2);
}

// determine which page will be on screen
function draw() {
  if (currentPage === "menu") {
    menuPage();
  }

  else if (currentPage === "game1") {
    game1Page();
  }

  else if (currentPage === "game2") {
    game2Page();
  }

  else if (currentPage === "game3") {
    game3Page();
  }

  else if (currentPage === "game4") {
    game4Page();
  }

  else if (currentPage === "game5") {
    game5Page();
  }
}

// click buttons to start games
function mousePressed() {
  if (currentPage === "menu") {

    if (dist(mouseX, mouseY, button1x, buttonY) < buttonSize / 2) {
      currentPage = "game1";
    }

    if (dist(mouseX, mouseY, button2x, buttonY) < buttonSize / 2) {
      currentPage = "game2";
    }

    if (dist(mouseX, mouseY, button3x, buttonY) < buttonSize / 2) {
      currentPage = "game3";
    }

    if (dist(mouseX, mouseY, button4x, buttonY) < buttonSize / 2) {
      currentPage = "game4";
    }

    if (dist(mouseX, mouseY, button5x, buttonY) < buttonSize / 2) {
      currentPage = "game5";
    }
  }
}

// press H to go back to the home page
function keyPressed() {
  if (key === 'h' || key === 'H') {
    currentPage = "menu";
  }
}
