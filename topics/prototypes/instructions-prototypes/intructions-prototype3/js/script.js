/**
 * Randomness
 * Ilianna
 * 
 * Use variables to create a bunch of random shapes. Different positions, sizes and colours.
 */

"use strict";

/**
 * Create a canvas to work on
*/
function setup() {
    createCanvas(800, 600);
}


/**
 * Draw shapes with random sizes and colours, in random places
*/
function draw() {
    background(232, 232, 232);
    // Create variables for shape values
      let shapeColour = color(random(0, 255), random(0, 255), random(0, 255));
      let shapeX = (random(0, 800));
      let shapeY = (random(0, 600));
      let shapeW = (random(40,120));
      let shapeH = (random(20,80));

    push();
    stroke(133, 133, 133);
    fill(shapeColour);
    // Create random rectangles
    rect(shapeX, shapeY, shapeW, shapeH);
    // Change values a bit, to not make them all the same
    ellipse((shapeX * 0.5), (shapeY * 0.5), (shapeW * 0.5), (shapeH * 0.5));
    rect((shapeX * 0.7), (shapeY * 0.7), (shapeW * 0.7), (shapeH * 0.7));
    ellipse((shapeX * 1.2), (shapeY * 1.2), (shapeW * 1.2), (shapeH * 1.2));
    pop();
}