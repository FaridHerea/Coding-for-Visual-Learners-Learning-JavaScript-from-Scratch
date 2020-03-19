function setup() {
    createCanvas(500, 300);
    background(20, 20, 20, 10);
}
  
  function draw() {
    var size = 250;
    var radius = 50;
    var radiusDecrease;

    // circle 01
    fill(51);
    strokeWeight(2);
    stroke(75);
    ellipse(250, 150, size, size);
    size = size - radius;

    // circle 02
    stroke(0);
    fill(255, 53, 139);
    ellipse(250, 150, size, size);
    size = size - radius;

    // circle 03
    fill(1, 176, 240);
    ellipse(250, 150, size, size);
    size = size - radius;

    // circle 04
    fill(174, 238, 18);
    // noFill();
    // noStroke();
    ellipse(250, 150, size, size);
}