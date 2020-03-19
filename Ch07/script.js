function setup() {
    createCanvas(800, 300);

//     sayHello();
}
  
  function draw() {
    background(220);

    grid(2, 3, 20)

//     var x = squared(10);
//     console.log(x)

//    circle(width/2, height/2, 100);
}

function grid(numX, numY, size) {
  for (i = 0; i < numX; i++) {
    for ( j = 0; j < numY; j++) {
      rect(size * i, size * j, size, size);
    }
  }
}

// function squared(num) {
//   var result = num * num;

//   fill(237, 34, 93);
//   textSize(60);
//   textAlign(CENTER, CENTER);
//   text(result, width / 2, height / 2);

//   return result;
// }

// function circle(x, y, diameter) {
//   ellipse(x, y, diameter, diameter);
// }

// function sayHello() {
//   var message = 'Hello world!';
//   console.log(message);
// }