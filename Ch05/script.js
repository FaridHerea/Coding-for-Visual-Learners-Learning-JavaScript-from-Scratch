var toggle = false;
// Ch05_01
// var toggle = true;

function setup() {
    createCanvas(800, 300);
    background(220)

// Ch05_02
//    background(1, 186, 248);

// Ch05_01
//    rectMode(CENTER);
}
  
  function draw() {
    // declaration of variables
    var x = mouseX, y = mouseY, xSize = 30, ySize = 20;

    if (mouseIsPressed === true) {
      fill(258, 4, 2);
      noStroke();
      rect(x, y, xSize, ySize);
    }

// Ch05_02
    // declaration of variables
//    var x = mouseX, y = mouseY, size = 25;

    // circle
//    fill(237, 34, 93, 100);
//    noStroke();
//    ellipse(x, y, size, size);

// Ch 05_01
//    if (mouseIsPressed === true) {
//      toggle = !toggle;
//    }

//    if (toggle === true) {
//      background(1, 186, 248);
//    } else {
//      background(250, 150, 50);
//    }

    // declaration of variables
//    var x = width /2, y = height / 2, size = 200;

    // circle
//    fill(237, 4, 93);
//    noStroke();
//    ellipse(x, y, size, size);

    // rectangle
//    fill(255);
//    rect(x, y, size * 0.75, size * 0.15);
}