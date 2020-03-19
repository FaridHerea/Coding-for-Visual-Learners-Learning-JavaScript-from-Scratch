function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);
}
  
  function draw() {
    background(220);
    fill(237, 34, 93);

    push();
    translate(width / 2, height / 2);
    rotate(45);
    rect(0, 0, 150, 150);
    pop();

    fill(255);
    rectC(width / 2, height / 2, 75, 75, 30);

    
// Ch11_1
    // rotate from the origin point
//    translate(width / 2, height / 2);
//    rotate(45);

//    translate(150, 0);
//    rotate(5);
//    rect(0, 0, 50, 50);

//    rect(width / 2 + 50, height / 2 + 50, 50, 50);
}

rectC = (x,y, width, height, rotation) => {
  if (rotation === undefined) {
    rotation = 0;
  }
  push();
  translate(x, y);
  rotate(rotation);
  rect(0, 0, width, height);
  pop();
}

// Ch10_2
// keyPressed = () => {
//   console.log(key);

//   keyCode == ENTER
//     ? console.log('Enter key pressed')
//     : '' ;
// }