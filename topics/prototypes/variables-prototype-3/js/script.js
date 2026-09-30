/**
 * Penguin Friend
 * Ilianna
 * 
 * Draw a penguin with movable wings
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(600, 600);
}

// Draw a penguin with movable wings
function draw() {
    background(198, 237, 245);

    // Create variable
    let wingY = map(mouseY, 0, height, -40, 30);

    // Draw the actual penguin

    // Wings
    fill(46, 46, 46);
    ellipse(230, 300 + wingY, 140, 70);
    ellipse(370, 300 + wingY, 140, 70);

    // Body
    fill(46, 46, 46);
    ellipse(300, 320, 130, 220);

    // Belly
    fill(255, 255, 255);
    ellipse(300, 345, 100, 170);

    // Head
    fill(46, 46, 46);
    ellipse(300, 190, 100, 100);

    // Eyes
    fill(255, 255, 255);
    ellipse(280, 185, 30, 35);
    ellipse(320, 185, 30, 35);

    fill(0);
    ellipse(280, 190, 12, 18);
    ellipse(320, 190, 12, 18);

    // Beak
    fill(232, 160, 50);
    triangle(285, 210, 300, 235, 315, 210);

    // Feet
    fill(232, 160, 50);
    ellipse(275, 425, 35, 15);
    ellipse(325, 425, 35, 15);
}
