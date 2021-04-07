
let bg;
let earthpng;
let moonpng;

let moonx = 1050;
let moonY = 400;

let showmoon = false;
let emoondist = 384400;


function preload() {
  bg = loadImage('./files/bg.png');
  earthpng = loadImage('./files/earth.png');
  moonpng = loadImage('./files/moon.png');
}


function setup() {


  createCanvas(1200, 800);
}

function draw() {
  imageMode(CORNER);
  background(bg);

  noFill();
  strokeWeight(2);
  stroke(255);
  circle(150, 400, dist(150, 400, mouseX, 400)*2);

  strokeWeight(2);
  line(150, 400, mouseX, 400);


  textSize(40);
  let d1 = dist(150, 400, mouseX, 400);
  let d = map(d1, 0,1900 , 0 ,emoondist );

  push();
  translate((150 + mouseX) / 2, (400 + 400) / 2);
  rotate(atan2(400 - 400, mouseX - 150));
  text(`${nfc(d*2, 0)} km`, 0, -5);
  pop();



  imageMode(CENTER);
  image(earthpng, 150, 400,20,20);

  if (showmoon) {
    imageMode(CENTER);
    image(moonpng, 1050, 400,10,10);

    line(1050, 0, 1050, 800);
  }


}

function mouseClicked() {
  if (showmoon === false) {
    showmoon = true;
  } else {
    showmoon = false;
  }
}