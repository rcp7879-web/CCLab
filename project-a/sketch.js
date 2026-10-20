/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let x, y;
let xSpeed, ySpeed;
let isMoving = true;
let x1, y1;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let graboffsetX;
let graboffsetY;

function mouseReleased() {
    isDragging = false
    isMoving = true
    offsetX = 0
    offsetY = 0
}



function setup() {
    createCanvas(800, 400);
    //Controls stability of heart when dragging:
    x = 100;
    y = 200;
    xSpeed = random(-10, 10);
    ySpeed = random(-10, 10);
}

function draw() {
    background(3, 3, 3);
    console.log(
        "moving:", isMoving,
        "dragging:", isDragging,
        "x:", x,
        "offsetX:", offsetX
    );
    console.log("DRAW IS RUNNING");
    console.log("isDragging =", isDragging);
    text("offsetX: " + offsetX, 20, 50);
    text("offsetY: " + offsetY, 20, 70);

    if (isDragging) {
        text("DRAG BLOCK RUNNING", 20, 100);
        //console.log("mouse:", mouseX, mouseY);
        offsetX = (mouseX + graboffsetX) - x
        offsetY = (mouseY - graboffsetY) - y
        console.log("x:", x, "y:", y);
        console.log("offsets:", offsetX, offsetY);
        console.log("final position:", x + offsetX, y + offsetY);
        console.log("x:", x, "y:", y);
        console.log("offsetX:", offsetX, "offsetY:", offsetY);
    }

    console.log("isMoving:", isMoving, "x:", x);
    if (isMoving) {
        x = map(cos(frameCount / 30), -1, 1, 99, 575);
        y = map(sin(frameCount / 30), -1, 1, 99, 275);


        console.log("dragging block runs");



        if (dist(mouseX, mouseY, x + offsetX, y + offsetY) < 100) {
            if (mouseIsPressed == true) {
                isMoving = false;
                isDragging = true;
                graboffsetX = mouseX - (x - offsetX);
                graboffsetY = mouseY - (y - offsetY);


            }

        }
    }


    // Sad World
    if (isDragging == true) {
        fill(82, 81, 78);
        circle(310, 290, 180);
        noFill();
        fill(7, 54, 84);
        circle(360, 280, 5);
        circle(260, 280, 5);
    } else if (isDragging == false) {
        fill(0, 117, 255);
        circle(310, 290, 180);
        fill(7, 54, 84);
        stroke(25, 0, 0);
        circle(360, 280, 5);
        circle(260, 280, 5);
        arc(310, 300, 80, 5, PI, TWO_PI);
        noFill();

    }

    //Angry World
    if (isDragging == true) {
        fill(82, 81, 78);
        circle(310, 100, 180);
        noFill();
        fill(7, 54, 84);
        circle(360, 100, 5);
        circle(260, 100, 5);
    } else if (isDragging == false) {
        fill(469, 30, 30);
        circle(310, 100, 180);
        noFill();
        beginShape();
        fill(255);
        line(300, 90, 30, 1)
        line(320, 90, 600, 1);
        fill(153, 12, 12)
        circle(360, 100, 5);
        circle(260, 100, 5);
        arc(310, 170, 80, 10, PI, TWO_PI);
    }
    // Anxiety World
    if (isDragging == true) {
        fill(82, 81, 78);
        circle(530, 100, 180);
        noFill();
        fill(7, 54, 84);
        circle(460, 100, 5);
        circle(590, 100, 5);
    } else if (isDragging == false) {
        fill(255, 111, 0);
        circle(530, 100, 180);
        fill(255);
        arc(530, 150, 100, 60, PI, TWO_PI);
        circle(460, 100, 5);
        circle(590, 100, 5);

    }


    //Happy World
    if (isDragging == true) {
        fill(82, 81, 78);
        circle(535, 290, 180);
        noFill();
        fill(7, 54, 84);
        circle(470, 290, 5);
        circle(580, 290, 5);

    } else if (isDragging == false) {
        fill(255, 229, 0);
        circle(535, 290, 180);
        fill(255);
        //Facial features of Happy World
        circle(470, 290, 5);
        circle(580, 290, 5);
        arc(530, 290, 30, 30, radians(0), radians(-180));
        noFill();
    }


    // fill(255, 229, 0);
    //circle(535, 290, 180);
    // fill(255);
    //Facial features of Happy World
    // circle(470, 290, 5);
    // circle(580, 290, 5);
    // arc(530, 290, 30, 30, radians(0), radians(-180));
    //noFill();

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
        push();
        noStroke();
        fill(469, 30, 30);
        circle(x - 20 + offsetX, y + offsetY, 50);
        circle(x + 20 + offsetX, y + offsetY, 50);
        triangle(x - 43 + offsetX, y + 12 + offsetY, x + 43 + offsetX, y + 12 + offsetY, x + offsetX, y + 50 + offsetY);
        pop();
        // Heart Entity change of expression to Anger
        push();
        fill(255)
        arc(x - 20 + offsetX, y + 3 + offsetY, 30, 30, radians(5), radians(-120));
        arc(x + 20 + offsetX, y + 3 + offsetY, 30, 30, radians(-40), radians(+180));
        arc(x - 1 + offsetX, y + 40 + offsetY, 20, 30, PI, TWO_PI);
        noStroke();
        noFill();
        arc(x + 1, y + 25, 30, 30, radians(0), radians(-180));
        pop();
        // Heart Entity -- change of the Heart to Sad World's color:
    } else if (x <= 520 && y >= 220) {
        push();
        fill(0, 117, 255);
        noStroke();
        circle(x - 20 + offsetX, y + offsetY, 50);
        circle(x + 20 + offsetX, y + offsetY, 50);
        triangle(x - 43 + offsetX, y + 12 + offsetY, x + 43 + offsetX, y + 12 + offsetY, x + offsetX, y + 50 + offsetY);
        fill(255);
        // Heart Entity change of expression to Sadness
        push();
        fill(255)
        arc(x - 20 + offsetX, y + 3 + offsetY, 30, 30, radians(-20), radians(-180));
        arc(x + 20 + offsetX, y + 3 + offsetY, 30, 30, radians(10), radians(210));
        arc(x + 2 + offsetX, y + 40 + offsetY, 20, 30, PI, TWO_PI);
        noStroke();
        noFill();
        arc(x + 1 + offsetX, y + 25 + offsetY, 30, 30, radians(0), radians(-180));
        pop();
        //Heart Entity -- change of the Heart to Anxiety World's color:
    } else if (x < 460 && y <= 260) {
        push();
        fill(256, 111, 0);
        noStroke();
        circle(x - 20 + offsetX, y + offsetY, 50);
        circle(x + 20 + offsetX, y + offsetY, 50);
        triangle(x - 43 + offsetX, y + 12 + offsetY, x + 43 + offsetX, y + 12 + offsetY, x + offsetX, y + 50 + offsetY);

        // Heart Entity change of expression to Anxiety
        push();
        fill(255)
        arc(x - 20 + offsetX, y + 3 + offsetY, 30, 30, radians(0), radians(360));
        arc(x + 20 + offsetX, y + 3 + offsetY, 30, 30, radians(0), radians(360));
        arc(x + 2 + offsetX, y + 35 + offsetY, 20, 30, PI, TWO_PI);
        noStroke();
        noFill();
        arc(x + 1 + offsetX, y + 25 + offsetY, 30, 30, radians(0), radians(-180));
        pop();

        // Heart Entity -- change of the Heart to Happy World's color:
    } else if (x >= 360 && y <= 250) {
        push();
        fill(260, 229, 0);
        noStroke();
        circle(x - 20 + offsetX, y + offsetY, 50);
        circle(x + 20 + offsetX, y + offsetY, 50);
        triangle(x - 43 + offsetX, y + 12 + offsetY, x + 43 + offsetX, y + 12 + offsetY, x + offsetX, y + 50 + offsetY);
        fill(255);

        //Heart Entity change of expression to Happiness
        arc(x + offsetX - 20, y + 3 + offsetY, 30, 30, radians(0), radians(360));
        arc(x + 20 + offsetX, y + 3 + offsetY, 30, 30, radians(0), radians(360));
        circle(x - 20 + offsetX, y + 10 + offsetY, 10);
        circle(x + 20 + offsetX, y + 10 + offsetY, 10);
        arc(x + 1 + offsetX, y + 25 + offsetY, 30, 30, radians(0), radians(-180));


    }




}
