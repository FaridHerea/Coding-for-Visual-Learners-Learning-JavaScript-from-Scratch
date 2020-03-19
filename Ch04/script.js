// Ch04_03
// Ch04_02
// var num;

function setup() {
    createCanvas(500, 300);
    rectMode(CENTER);

//    textAlign(CENTER, CENTER);
//    num = 2;

// Ch04_02
//    num = 1;
//    textAlign(CENTER, CENTER);
//    rectMode(CENTER);

// Ch04_01 ---
//    textAlign(CENTER, CENTER);
//    frameRate(6);
//    noLoop();
}
  
  // declaration of variable
  function draw() {
    background(1, 185, 240);
    
    // declaration of variables
    var xAxisPosition = -100, yAxisPosition = 30, 
        xAxisLimit = 500 + xAxisPosition,
        rectSize = 60;

    //rectangle properties
    fill(77, 27, 187);
    noStroke();
    //1st rectangle
    rect (frameCount + xAxisPosition < xAxisLimit ? xAxisPosition = xAxisPosition + frameCount : xAxisPosition = xAxisLimit, yAxisPosition, 200, rectSize)

    //2nd rectangle
    rect (frameCount + xAxisPosition < xAxisLimit ? xAxisPosition = xAxisPosition + frameCount : xAxisPosition = xAxisLimit, yAxisPosition + rectSize, 200, rectSize)

    //3rd rectangle
    rect (frameCount + xAxisPosition < xAxisLimit ? xAxisPosition = xAxisPosition + frameCount : xAxisPosition = xAxisLimit, yAxisPosition + rectSize * 2, 200, rectSize)

    //4th rectangle
    rect (frameCount + xAxisPosition < xAxisLimit ? xAxisPosition = xAxisPosition + frameCount : xAxisPosition = xAxisLimit, yAxisPosition + rectSize * 3, 200, rectSize)

    //5th rectangle
    rect (frameCount + xAxisPosition < xAxisLimit ? xAxisPosition = xAxisPosition + frameCount : xAxisPosition = xAxisLimit, yAxisPosition + rectSize * 4, 200, rectSize)


// Ch04_03
    // declaration of variables
//    var x = width / 2, y = height / 2;
    // increment the size with the current frameCount value
//    var size = 200, limit = 100;
//    frameCount < limit ? size = size + frameCount 
//                      : size = size + limit;

    // circle
//    fill(237, 34, 93);
//    noStroke();
//    ellipse(x, y, size, size);

    // rectangle
//    fill(255);
//    rect(x, y, size * 0.75, size * 0.15);

//    var value;
//    fill(237, 34, 93);

//    textSize(48);
//    num === 1 ? value = 'TRUE' 
//      : num === 2 ? value = 'TRUE 2'
//      : num === 3 ? value = 'TRUE 3'
//      : value = 'FALSE';
//    text(value, width / 2, height / 2);

// Ch04_02
//    fill(237, 34, 93);

//    textSize(48);
//    num === 1 ? text('TRUE', width / 2, height / 2) : "";

//    var x = width / 2, y = height / 2;
//    var size = 200 + frameCount;

    // circle
//    fill(237, 34, 93);
//    noStroke();
//    ellipse(x, y, size, size);

    //rectangle
//    fill(255);
//    rect(x, y, size * 0.75, size * 0.15);


// Ch04_01 ---
//    fill(237, 34, 93);
//    textSize(36);

//    var fps = parseInt(frameRate(), 10);
//    text('frameRate' + fps, width / 2, height / 2);
//    text('frameCount' + frameCount, width / 2, height / 2);

//    var fr = frameRate();
//    console.log(fr);
//    Text(value)
}