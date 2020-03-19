var pressed = false;
var colors = [];

// Ch10_01
// var toggle = false;

function setup() {
    createCanvas(800, 300);
    background(0);
    colors = [
      [245, 3, 155],
      [13, 159, 215],
      [148, 177, 191],
      [100, 189, 167],
      [242, 226, 133],
      [176, 230, 110],
      [123, 90, 240]
    ]
    noStroke();

// Ch10_01
//     rectMode(CENTER);

}
  
  function draw() {
    if (pressed === true) {
      var randomIndex = parseInt(random(colors.length), 10);
      var randomSize = random(200);

      fill(colors[randomIndex]);
      ellipse(random(width), random(height), randomSize, randomSize)
    }
    pressed = false;

// Ch10_01
    // declaration of variables
//     var x = width / 2, y = height / 2, size = 200;

    // display a different color based on the toggle value
//     if (toggle === true) {
//       background(1, 186, 248);
//     } else {
//       background(250, 150, 50);
//     }

    // circle
//     fill(237, 4, 93);
//     noStroke();
//     ellipse(x, y, size, size);

    // rectangle
//     fill(255);
//     rect(x, y, size * 0.75, size * 0.15);
}

// --- p5js group events ---

keyPressed = () => {
  pressed = true;
}

// Ch10_01
// mousePressed = () => {
//   toggle = !toggle;
// }