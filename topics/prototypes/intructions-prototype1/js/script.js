/**
 * Building
 * Ilianna
 * 
 * A building on a field of grass, because that makes sense in this world.
 */

"use strict";

/**
 * Creates a canvas to work on.
*/
function setup() {
    createCanvas(800, 600);
}


/**
 * Creates a building with windows and a door.
*/
function draw() {
    background("lightblue");

    // Make the grass
    push();
    noStroke();
    fill("#38b058");
    rect(0, 500, 800, 600);
    pop();

    // Make a building
    push();
    stroke("black");
    strokeWeight(2);
    fill("#8c8d91");
    rect(250, 70, 300, 500)
    pop();

    // Add windows
    push();
    stroke("black");
    strokeWeight(2);
    fill("#90b7f5");
    rect(300, 120, 50);
    rect(450, 120, 50);
    rect(300, 220, 50);
    rect(450, 220, 50);
    rect(300, 320, 50);
    rect(450, 320, 50);
    rect(300, 420, 50);
    rect(450, 420, 50);
    pop();

    // Add a door
    push();
    stroke("black");
    strokeWeight(2);
    fill("#6e5347");
    rect(375, 490, 50, 80);
    pop();

    // Add a door handle bar
    push();
    stroke("black");
    strokeWeight(5);
    line(390, 540, 410, 540);
    pop();
}