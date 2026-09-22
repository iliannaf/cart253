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
    let shapeColour;
    let shapePosition;
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(232, 232, 232);
      shapeColour = color(random(0, 255), random(0, 255), random(0, 255));
      shapeX = (random(0, 800));
      shapeY = (random(0, 600));
      shapeW = (random(0,40));
      shapeH = (random(0,20));

    push();
    stroke(133, 133, 133);
    fill(shapeColour);
    rect();
    pop();
}