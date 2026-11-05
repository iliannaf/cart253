/**
 * Rain
 * Ilianna
 * 
 * Rain falling from the sky.
 */

"use strict";


let x = [];
let y = [];
let speed = [];
let numRain = 100;

let rainSlider;


// Create a canvas, raindrops and a slider
function setup() {
  createCanvas(800, 600);

// Create slider
rainSlider = createSlider(0, 150, 100);
rainSlider.position((windowWidth - 150) / 2, 725);
rainSlider.style("width", "150px");

  // Create raindrops
  for (let i = 0; i < numRain; i++) {
    x[i] = random(width);
    y[i] = random(height);
    speed[i] = random(2, 6);
  }
}

// Mkae the rain fall
function draw() {
  background(34, 39, 92);

  // Slider value
  numRain = rainSlider.value();

  // Draw and move the raindrops down
  for (let i = 0; i < numRain; i++) {

    stroke(150, 200, 255);
    strokeWeight(2);
    line(x[i], y[i], x[i], y[i] + 10);
    y[i] += speed[i];

    // Reset when it reaches the bottom
    if (y[i] > height) {
      y[i] = 0;
      x[i] = random(width);
    }
  }
}
