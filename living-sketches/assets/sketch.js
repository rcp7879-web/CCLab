let imgs = []; // empty array
let imageIndex = 0;

async function setup() {
  createCanvas(600, 450);
  frameRate(12)

  let allPromises = [];
  for (let i = 0; i <= 9; i++) {
    let filename = "assets/cloud" + i + " Small.png";
    let onePromise = loadImage(filename);
    allPromises.push(onePromise);
  }
  imgs = await Promise.all(allPromises);
}
function draw() {
  background(220);

  imageIndex = frameCount % 10; // imgs.length

 
  image(imgs[imageIndex], 0, 0);

  fill(0, 255, 0);
  text(imageIndex, 10, 20);
}

  

function mousePressed() {
  imageIndex++;
  if (imageIndex >= imgs.length) {
    imageIndex = 0;
  }
}
