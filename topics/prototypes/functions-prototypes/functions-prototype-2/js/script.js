/**
 * Title of Project
 * Ilianna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// variables
let canvasW = 800;
let canvasH = 600;
let balloonX = 200;
let balloonY = 50;

// Create a canvas to work on
function setup() {
createCanvas(canvasW, canvasH);
}

//
function draw() {
background("lightblue");

drawBalloon();
}

function drawBalloon() {
  fill(255, 80, 100);
  noStroke();
  ellipse(balloonX, balloonY, 35, 45);

  stroke(0);
  line(balloonX, balloonY + 22, balloonX, balloonY + 40);
  noStroke();
}