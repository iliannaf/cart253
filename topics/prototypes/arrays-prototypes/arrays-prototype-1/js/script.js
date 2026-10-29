/**
 * Magic 8 Ball
 * Ilianna
 *
 * A magic 8 ball that gives you advice. Made using code from the arrays learning materials by Pippin Barr.
 */

"use strict";

// Variables
let ballSize = 200;
let ballY = 400;
let ballX = 300;
let ballWy = 400;
let ballWx = 300;
let eightY = 400;
let eightX = 300;

let shake = 0;
let decay = 0.9;

let randomAnswers;

// Make an array to keep our answers in
const answers = [
  "YES",
  "NO",
  "It is certain",
  "Ask again later",
  "Reply hazy, try again",
  "Most likely",
  "Very doubtful",
  "My sources say no",
];

function setup() {
  createCanvas(600, 600);
  randomAnswers = random(answers);
}

function draw() {
  background("lightgray");
  fill("black");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Have a Question?", 300, 60);
  text("Shake the Ball to Receive your Answer", 300, 100);

  // Random number to shake the ball and then make it stop
  let offsetX = random(-shake, shake);
  let offsetY = random(-shake, shake);
  drawMagic8(offsetX, offsetY);
  shake = shake * decay;
}

function drawMagic8(offsetX, offsetY) {
  noStroke();
  // Ball
  fill("black");
  ellipse(ballX + offsetX, ballY + offsetY, ballSize);
  // White part
  fill("white");
  ellipse(ballWx + offsetX, ballWy + offsetY, 75);
  // Number '8'
  fill("black");
  textSize(30);
  text("8", eightX + offsetX, eightY + offsetY);
}

function shakeBall() {
  shake = 15;
}

function mousePressed() {
  if (dist(mouseX, mouseY, ballX, ballY) < ballSize / 2) {
    shakeBall();
  }
}
