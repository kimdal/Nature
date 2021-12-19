// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A rectangular box


// Constructor
class Box {
  constructor(x, y, r) {
    //this.w = random(3, 5);
    //this.h = random(5, 50);
    this.r = r;
    this.c = color(255);
    //this.Sound = loadSound('Clock.mp3');

    // Define a body
    let bd = new box2d.b2BodyDef();
    bd.type = box2d.b2BodyType.b2_dynamicBody;
    bd.position = scaleToWorld(x, y);

    // Define a fixture
    let fd = new box2d.b2FixtureDef();
    // Fixture holds shape
    fd.shape = new box2d.b2PolygonShape();
    fd.shape.SetAsBox(scaleToWorld(this.r), scaleToWorld(this.r));

    // Some physics
    fd.density = 1.0;
    fd.friction = 0.5;
    fd.restitution = 0.2;

    // Create the body
    this.body = world.CreateBody(bd);
    // Attach the fixture
    this.body.CreateFixture(fd);

    // Some additional stuff
    this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5)));
    this.body.SetAngularVelocity(random(-5, 5));
  }

  // This function removes the particle from the box2d world
  killBody() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  done() {
    // Let's find the screen position of the particle
    let pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    // if (pos.y > height + this.w * this.h) {
      if (pos.y > height + this.r) {
      this.killBody();
      return true;
    }
    return false;
  }

  // Drawing the box
  display() {
    // Get the body's position
    let pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    let a = this.body.GetAngleRadians();

    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    //translate(p5.Vector.fromAngle(millis() / 200, 10));

    rotate(a);
    fill(this.c);
    noStroke();
    strokeWeight(2);
    rect(0, 0, this.r, this.r);
    pop();

    if (pos.y > height/2){
      this.c = color(random(0, 255), random(0, 255), 0);
    }
    if (pos.x > width/2){
      this.c = color(random(0, 255), random(0, 255), random(0, 255));
    }
// if (keyIsPressed === true){
//   translate(p5.Vector.fromAngle(millis() / 200, 10));
// }
}
Move(){
translate(p5.Vector.fromAngle(millis() / 200, 10));
}
}
