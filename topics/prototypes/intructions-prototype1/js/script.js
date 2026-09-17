/**
 * Title of Project
 * Ilianna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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
}