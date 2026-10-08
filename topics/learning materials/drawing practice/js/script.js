/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates a canvas
*/

function setup() {
    createCanvas(640, 640);
}


/**
 * Adding a background
 * Adding an ellipse
 * Colour the border and inside of the ellipse
 * Use shapes to create a record
*/
function draw() {
    background(150, 150, 150);

    push();

    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);

    pop();

    push();

    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);

    pop();

    push();

    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);

    pop();
}