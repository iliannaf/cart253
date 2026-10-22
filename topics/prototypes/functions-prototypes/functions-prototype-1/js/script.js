/**
 * Title of Project
 * Ilianna
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// create variables
let canvasW = 800;
let canvasH = 600;

// create a canvas to work on
function setup() {
  createCanvas(canvasW, canvasH);
}

//
function draw() {
  background("lightgray");
  fill("lightblue");
  stroke("black");
  strokeWeight(3);
  ellipse(400, 300, 30);
  // body
  line(400, 315, 400, 370);
  // legs
  line(400, 370, 395, 390);
  line(400, 370, 405, 390);
  // arms
  line(400, 330, 410, 355);
  line(400, 330, 390, 355);
}
