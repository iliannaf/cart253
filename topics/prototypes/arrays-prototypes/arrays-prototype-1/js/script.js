/**
 * Magic 8 Ball
 * Ilianna
 *
 * A magic 8 ball that gives you advice. Made using code from the arrays learning materials by Pippin Barr.
 */

"use strict";

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

// Pick an answer at random (or with magic?)
let randomAnswers = random(answers);

//
function setup() {
  createCanvas(600, 600);
}

//
function draw() {
  background("lightgray");
  drawMagic8();
}

function drawMagic8() {
  noStroke();
  fill("black");
  ellipse(300, 400, 200);
  fill("white");
  ellipse(300, 400, 75);
  fill("black");
  textSize(30);
  text(8, 292, 410);
}
