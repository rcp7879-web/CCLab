/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let x, y;
let xSpeed, ySpeed;
let starXspeed;
let starYspeed;
let isMoving = true;
let x1, y1;
let offsetX = 0;
let offsetY = 0;
function setup() {
  createCanvas(800, 400);
  x = 100;
  y = 200;
  xSpeed = random(-10, 10);
  ySpeed = random(-10, 10);

  x1 = 50;
  y1 = 200;

  starX1speed = random(-5, 5);
  starYspeed = random(-5, 5);
}

function draw() {
  background(3, 3, 3);
  

    if (isMoving) {
  x = map(cos(frameCount / 30), -1, 1, 99, 575);
  y = map(sin(frameCount / 30), -1, 1, 99, 275);
      
  
  if (dist(mouseX, mouseY, x, y) <50) {
    if (mouseIsPressed == true) {
      isMoving = false;
      noStroke();
      
    } else if (mouseIsPressed == false) {
      isMoving = true;
    }
       
      }
    }
    
  // The mouse is close to the heart


  //Star movement:
  push();
  x1 = x1 - starXspeed;
  y1 = y1 + starYspeed;

  if (x1 < 0) {
    x1 = width;
  } else if (x1 > width) {
    x1 = 2;

    if (y1 < 0) {
      y1 = height;
    } else if (y1 > height) {
      y1 = 2;
    }
  
    
  
  }


// Additional stars
  circle(320, 400, 30)

  
  noStroke();
  fill(255);
  circle(x1, y1, 10);
  //Facial features of Sad World
  
  // Sad World
  fill(0, 117, 255);
  circle(310, 290, 180);
  fill(7, 54, 84);
  stroke(25, 0, 0);
  circle(360,280,5);
  circle(260, 280, 5);
  arc(310, 300, 80, 5, PI, TWO_PI);
  noFill();
  
  
  //Angry World
  fill(469, 30, 30);
  circle(310, 100, 180);
  noFill();
  beginShape();
  fill(255);
  line(300, 90, 30)
  line(320, 90, 600, 1);
  fill(153, 12, 12)
  circle(360, 100,5);
  circle(260, 100, 5);
  arc(310, 170 , 80, 10, PI, TWO_PI);

  // Anxiety World
  fill(255, 111, 0);
  circle(530, 100, 180);
  fill(255);
  arc(530, 150 , 100, 60, PI, TWO_PI);
  circle(460, 100,5);
  circle(590, 100, 5);

  //Happy World
  fill(255, 229, 0);
  circle(535, 290, 180);
  fill(255);
  //Facial features of Happy World
  circle(470, 290, 5);
  circle(580, 290, 5);
  arc(530, 290, 30, 30, radians(0), radians(-180));
  noFill();

  x = x + xSpeed;
  y = y + ySpeed;

  // when the circle move out of the canvas
  // set x (or y) at the other edge of canvas
  if (x < 50) {
    x = width;
  } else if (x > width) {
    x = 0;
  }
  if (y < 10) {
    y = height;
  } else if (y > height) {
    y = 0;
  }



  // display the circle
  //noStroke();
  //fill(255);
  //circle(x, y, 10);

  // Heart Entity Controls
  //Heart Entity -- change of the Heart to Angry World's color:
  if (x < 320 && y >= 10) {
    fill(469, 30, 30);
    // Heart Entity -- change of the Heart to Sad World's color:
  } else if (x <= 520 && y >= 220) {
    fill(0, 117, 255);
    //Heart Entity -- change of the Heart to Anxiety World's color:
  } else if (x < 460 && y <= 260) {
    fill(256, 111, 0);
    // Heart Entity -- change of the Heart to Happy World's color:
  } else if (x >= 360 && y <= 230) {
    fill(260, 229, 0);
  }

  
  
  // Draw Heart Entity
  noStroke();
  circle(x - 20, y, 50);
  circle(x + 20, y, 50);
  triangle(x - 43, y + 12, x + 43, y + 12, x, y + 50);
}
