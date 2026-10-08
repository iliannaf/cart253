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
    fill(161, 133, 109);
    ellipse(400, 300, 200);
    pop ();

    // Draw the body
    push();
    noStroke();
    fill(161, 133, 109);
    rect(300, 300, 200, 200);
    pop();

    // Draw the nose
    push();
    noStroke();
    fill(224, 144, 211);
    ellipse(380, 330, 80, 50);
    pop();

    // Draw the eyes
    push();
    noStroke();
    fill(77, 75, 76);
    ellipse(360, 270, 20, 40);
    ellipse(410, 270, 20, 40);
    pop();

    // Finish drawing the eyes
    push();
    noStroke();
    fill(181, 181, 181);
    ellipse(360, 260, 10, 10);
    ellipse(410, 260, 10, 10);
    pop();

    // Draw the rocks
    push();
    noStroke();
    fill(138, 130, 123);
    ellipse(500, 500, 40, 45);
    ellipse(480, 500, 45, 50);
    ellipse(470, 500, 40, 45);
    ellipse(450, 500, 40, 45);
    ellipse(440, 500, 40, 45);
    ellipse(420, 500, 45, 50);
    ellipse(400, 500, 40, 45);
    ellipse(390, 500, 40, 45);
    ellipse(370, 500, 45, 50);
    ellipse(350, 500, 40, 45);
    ellipse(340, 500, 40, 45);
    ellipse(320, 500, 45, 50);
    ellipse(300, 500, 40, 45);
    pop();
}