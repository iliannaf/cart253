/**
 * Starry Sky
 * Ilianna
 * 
 * Make a starry night sky that changes with every page refresh. Use the mouse to create custom constellations.
 */

"use strict";

// variables
let canvasW = 800;
let canvasH = 600;
let numStars = 130;

// create an array for stars and connections
let stars = [];
let connections = [];

// create a canvas to work on
function setup() {
createCanvas(canvasW, canvasH);

  // create stars
  for (let i = 0; i < numStars; i++) {
    stars[i] = [random(canvasW), random(30, canvasH)];
  }
}

// draw the stars
function draw() {
background(34, 39, 92);

// instructions
fill("white");
rect(0, 0, canvasW, 30,);
fill("black");
textSize(15);
textAlign(CENTER);
text("Click on Stars to Create Constellations. Refresh the Page to Reset.", canvasW / 2, 20);

// draw lines for star connections
stroke(150, 180, 255);
strokeWeight(1);

  for (let i = 0; i < connections.length; i++) {
    let a = connections[i][0];
    let b = connections[i][1];

    line(
      stars[a][0], stars[a][1],
      stars[b][0], stars[b][1]
    );
  }

// draw stars
noStroke();
fill(255);

  for (let i = 0; i < stars.length; i++) {
    circle(stars[i][0], stars[i][1], 4);
  }
}

// use mouse to connect stars and create constellations
function mousePressed() {

  for (let i = 0; i < stars.length; i++) {

    let d = dist(mouseX, mouseY, stars[i][0], stars[i][1]);

    // click near a star
    if (d < 7) {
      // connect to previously clicked star
      if (connections.length == 0 || lastStar != i) {
        if (lastStar != undefined) {
          connections.push([lastStar, i]);
        }
        lastStar = i;
      }
      break;
    }
  }
}

let lastStar;