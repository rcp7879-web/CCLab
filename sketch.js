/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  6. Only change YourNameDancer
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new Fish(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Fish {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x += map(sin(frameCount / 20 + PI / 2), -1, 1, -15, 15);
    this.angle = PI / 2 + map(sin(frameCount / 40), -1, 1, -PI, PI);
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //Body of Fish
    push()
    fill(227, 194, 50)
    ellipse(-2, -0.05, 100)
    pop()
    //Three eyes of Fish
    push()
    fill()
    circle(35, -5, 10)
    fill(255)
    circle(35, -5, 2)
    circle(-0.000005, -10, 10)
    circle(-0.000005, -10, 2)
    circle(-35, -5, 10)
    circle(-35, -5, 2)
    pop()
    //Physical Feature of Monster Fish: 

    //Tail of Monster Fish 
    push()
    fill(17, 87, 128)
    triangle(50, 4, 40, 30, 60, 80)
    triangle(50, -5, 40, -30, 60, -80)
    // Fins of Monster Fish 
    triangle(40, -10, 60, -20, 40, -30)
    triangle(-20, -50, 35, -30, 30, -60)
    triangle(-40, -10, -60, -20, -40, -30)
    //Underbelly of Monster Fish 
    arc(-1, 28, 50, 50, 0, PI);
    fill(255)
    //Mouth of Monster Fish 
    arc(-1, 10, 30, 30, 0, PI);









    // ⬆️ draw your dancer above ⬆️
    // ******** //


    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    // pop();
  }
  //drawReferenceShapes() {
  // noFill();
  // stroke(255, 0, 0);
  // line(-5, 0, 5, 0);
  //  line(0, -5, 0, 5);
  // stroke(255);
  // rect(-100, -100, 200, 200);
  // fill(255);
  // stroke(0);
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/