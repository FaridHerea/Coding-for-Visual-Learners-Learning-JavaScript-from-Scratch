function setup() {
    createCanvas(800, 300);

// Ch06_03
//    textAlign(CENTER, CENTER);
//    frameRate(1);
}
  
  function draw() {
    var x = 0, y = 0, rectWidth = 10, offset = width / rectWidth;
    
    noStroke();
    for ( i = 0; i < offset; i++) {
      fill(i * 255 / offset)
      rect(i * rectWidth + rectWidth / 2, y, rectWidth, height)
    }
    
// Ch06_04
    // circle properties
//    fill(237, 34, 93);
//    noStroke();
    
//    var diameter = 30;

    // circle
//    for ( i = 0 ; i < width / diameter; i++) {
//      for ( j = 0; j < height / diameter; j++) {
//        ellipse(
//          i * diameter + diameter / 2, 
//          j * diameter + diameter / 2, 
//          diameter * noise(frameCount / 100 + i + j), 
//          diameter * noise(frameCount / 100 + i + j)
//        );
//      }
//    }

// Ch06_03
//    var random_0 = random();
//    var random_1 = random(10);
//    var random_2 = random(100, 1000);
//    var offset = 40;

//    fill(255);
//    textSize();
//    text(random_0, width / 2, height / 2 - offset);
//    text(random_1, width / 2, height / 2);
//    text(random_2, width / 2, height / 2 + offset);

// Ch06_02
    // circle properties
//    fill(237, 34, 93);
//    noStroke();
    
//    var diameter = 10;

    // circle
//    for ( i = 0 ; i < width / diameter; i++) {
//      for ( j = 0; j < height / diameter; j++) {
//        ellipse(
//          i * diameter + diameter / 2, 
//          j * diameter + diameter / 2, 
//          diameter, 
//          diameter
//        );
//      }
//    }

// Ch06_01
    // circle properties
//    fill(237, 34, 93);
//    noStroke();
    
//    var diameter = 10;

    // circle
//    for ( i = 0 ; i < width / diameter; i++) {
//      ellipse(i * diameter + diameter / 2, 0, diameter, diameter);
//    }
}