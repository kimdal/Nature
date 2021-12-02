// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
let world;

// A list we'll use to track fixed objects
let boundaries = [];
// A list for all of our rectangles
let boxes = [];

let Slider;

function setup() {
  createCanvas(300, 600);
  // Initialize box2d physics and create the world
  world = createWorld();

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width / 2, height - 5, width, 10));
  boundaries.push(new Boundary(0, height/2, 20, height));
  boundaries.push(new Boundary(298, height/2, 20, height));
  boundaries.push(new Boundary(250, height - 50, width / 2 - 50, 80));
  boundaries.push(new Boundary(50, 100, width / 2 - 50, 30));
  boundaries.push(new Boundary(200, height/2, 50, 80));
  boundaries.push(new Boundary(270, 150, 50, 30));
  boundaries.push(new Boundary(40, 370, 150, 150));

  let b = new Box(width / 2, 30);
  boxes.push(b);

  Slider = createSlider(10, 255, 100);
  Slider.position(85, 20);
}

function draw() {
  background(0, 0, 50);
let S = Slider.value();


  // We must always step through time!
  let timeStep = 1.0 / 30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep, 10, 10);

  // Boxes fall from the top every so often
  if (random(1) < 0.2) {
    let b = new Box(S, 30);
    boxes.push(b);
  }

  // Display all the boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  // Display all the boxes
  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].display();
    if (boxes[i].done()) {
      boxes.splice(i, 1);
    }
  }
}
