/**
 * Diglet
 * Ilianna Faoro
 * 
 * Drawing Diglet from Pokemon
 */

"use strict";

/**
 * Creates a canvas to work on.
*/
function setup() {
    createCanvas(800, 600);
}


/**
 * Draws the body and rocks of the pokemon.
*/
function draw() {
    background("lightblue");

    // Draw the head
    push ();
    noStroke();
    fill(158, 113, 74);
    ellipse(400, 300, 200);
    pop ();

    // Draw the body
    push();
    noStroke();
    fill(158, 113, 74);
    rect(300, 300, 200, 200,);
    pop();

    // Draw the rocks
    push();
    noStroke();
    fill(138, 130, 123);
    ellipse(500, 500, 30, 35);
    pop();
}