/**
 * Day and Night
 * Ilianna
 * 
 * A scene that switches from day to night forever.
 */

"use strict";

// Create Variables
let sunX = 100;
let moonX = 100;
let speed = 1;
let isDay = true;

// Create a canvas to work on
function setup() {
  createCanvas(800, 600);
}

// Make daytime and nightime, sun and moon move across the screen
function draw() {

  // Daytime
  if (isDay == true) {
    background(124, 194, 235);

    // Draw grass
    fill(41, 186, 58);
    noStroke();
    rect(0, 580, 800, 20);

    // Draw sun
    fill(237, 230, 97);
    ellipse(sunX, 150, 100, 100);

    // Move sun
    sunX = sunX + speed;

    // When the sun leaves the screen, switch to night and spawn moon
    if (sunX >= 850) {
      isDay = false;
      moonX = -50;
    }
  }

  // Nighttime
  if (isDay == false) {
    background(43, 71, 120);

    // Draw grass
    fill(57, 97, 41);
    noStroke();
    rect(0, 580, 800, 20);

    // Draw moon
    fill(167, 172, 181);
    ellipse(moonX, 150, 100, 100);

    // Move moon
    moonX = moonX + speed;

    // When the moon leaves the screen, switch to day and spawn sun
    if (moonX >= 850) {
      isDay = true;
      sunX = -50;
    }
  }
}